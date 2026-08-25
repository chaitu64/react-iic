import * as xlsx from "xlsx";
import { supabase } from "../config/supabase.js";
import { sendCertificateEmail } from "../services/email.service.js";

// Helper function to find the email column (case insensitive)
const findEmailColumn = (row) => {
    const keys = Object.keys(row);
    for (const key of keys) {
        if (key.toLowerCase().trim() === "emailid") {
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

        // Add the default status to all rows
        const processedData = data.map((row) => ({
            ...row,
            status: "pending",
        }));


        
        const recordsToInsert = processedData.map((row) => ({
            raw_data: row,
            status: row.status,
            team_lead_email: row[findEmailColumn(row)] || null
        }));

        const { data: insertedData, error } = await supabase
            .from("participants")
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
            .from("participants")
            .select("*");

        if (error) {
            return res.status(500).json({ message: "Error fetching participants", error });
        }

        // Extract columns dynamically from the first record's raw_data if it exists
        let columns = [];
        if (data && data.length > 0 && data[0].raw_data) {
            columns = Object.keys(data[0].raw_data);
        }

        return res.status(200).json({ participants: data, columns });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status || !["pending", "completed"].includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const { data, error } = await supabase
            .from("participants")
            .update({ status })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            return res.status(500).json({ message: "Error updating status", error });
        }

        if (!data) {
            return res.status(404).json({ message: "Participant not found" });
        }

        // Check if status is completed and send email
        if (status === "completed" && data.team_lead_email) {
            await sendCertificateEmail(data.team_lead_email);
        }

        return res.status(200).json({ message: "Status updated successfully", participant: data });
    } catch (error) {
        console.error("Update status error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
