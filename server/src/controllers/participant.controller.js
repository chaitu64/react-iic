import * as xlsx from "xlsx";
import { supabase } from "../config/supabase.js";
import { sendCertificateEmail } from "../services/email.service.js";

// Helper function to find the email column (case insensitive)
const findEmailColumn = (row) => {
    const keys = Object.keys(row);
    for (const key of keys) {
        const keyLower = key.toLowerCase().trim();
        if (keyLower === "emailid" || keyLower.includes("email")) {
            return key;
        }
    }
    return null;
};

export const uploadSpreadsheet = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Read the file from buffer
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert to JSON
        let data = xlsx.utils.sheet_to_json(sheet);

        if (data.length === 0) {
            return res.status(400).json({ message: "Spreadsheet is empty" });
        }

        if (data.length > 5000) {
            return res.status(400).json({ message: "Spreadsheet is too large. Maximum 5000 rows allowed." });
        }

        // Add the default status to all rows
        const processedData = data.map((row) => ({
            ...row,
            status: "pending",
        }));


        const recordsToInsert = processedData.map((row) => {
            const emailKey = findEmailColumn(row);
            return {
                batch_id: parseInt(row['Batch ID'] || row['batchid'] || row['BatchId']),
                team_lead_name: row['Name'] || row['name'] || 'Unknown',
                register_number: row['Register Number'] || row['register_number'] || 'N/A',
                branch: row['Branch'] || row['branch'] || 'N/A',
                email: emailKey ? row[emailKey] : null,
                faculty_assigned: row['Faculty Assigned'] || row['facult assigned'] || null,
                review_date: row['Date of Review'] || row['date of review'] || null,
                review_status: 'pending'
            };
        });

        const { data: insertedData, error } = await supabase
            .from("sih_2026_registrations")
            .insert(recordsToInsert)
            .select();

        if (error) {
            console.error("Supabase insert error:", error);
            return res.status(500).json({ message: "Failed to store data in database", error });
        }

        // Extract column names from the first row of raw data
        const columns = Object.keys(data[0]);

        return res.status(200).json({
            message: "Spreadsheet processed successfully",
            columns,
            participants: insertedData,
        });

    } catch (error) {
        console.error("Upload error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getParticipants = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("sih_2026_registrations")
            .select("*")
            .order('batch_id', { ascending: true }); // Good practice to order by batch_id

        if (error) {
            return res.status(500).json({ message: "Error fetching participants", error });
        }

        // Return a mock columns array just in case the frontend relies on it
        const columns = ['Batch ID', 'Name', 'Branch', 'Email', 'Faculty Assigned', 'Date of Review', 'Status'];

        return res.status(200).json({ participants: data, columns });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params; // this is the batch_id from the frontend
        const { status } = req.body;

        if (!status || !["pending", "completed"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const { data, error } = await supabase
            .from("sih_2026_registrations")
            .update({ review_status: status })
            .eq("batch_id", id)
            .select()
            .single();

        if (error) {
            return res.status(500).json({ message: "Error updating status", error });
        }

        if (!data) {
            return res.status(404).json({ message: "Participant not found" });
        }

        // Check if status is completed and send email
        if (status === "completed" && data.email) {
            try {
                await sendCertificateEmail(data.email);
            } catch (emailError) {
                console.error("Failed to send email:", emailError);
                return res.status(200).json({
                    message: "Status updated successfully, but failed to send certificate email.",
                    participant: data
                });
            }
        }

        return res.status(200).json({ message: "Status updated successfully", participant: data });
    } catch (error) {
        console.error("Update status error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
