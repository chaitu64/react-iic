import { supabase } from "../config/supabase.js";

export const getParticipants = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from("sih_2026_registrations")
            .select("*")
            .order('batch_id', { ascending: true }); 

        if (error) {
            return res.status(500).json({ message: "Error fetching participants", error });
        }

        const columns = ['Batch ID', 'Name', 'Branch', 'Email', 'Faculty Assigned', 'Date of Review', 'Status'];

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

        return res.status(200).json({
            message: "Status updated successfully",
            participant: data
        });
    } catch (error) {
        console.error("Update status error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
