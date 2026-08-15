import { supabase } from "../config/supabase.js";

export const createTeamMember = async (req, res) => {
    try {
        const { name, role, bio, initials, section, image } = req.body;
        if (!name || !role || !bio || !initials || !section || !image) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const { data, error } = await supabase
            .from('team_members')
            .insert([{ name, role, bio, initials, section, image }])
            .select();

        if (error) throw error;
        return res.status(201).json({ message: "Team member created successfully", teamMember: data[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getAllTeamMemeber = async (req, res) => {
    try {
        const { data: teamMembers, error } = await supabase.from('team_members').select('*');
        if (error) throw error;
        return res.status(200).json({ message: "Team members fetched successfully", teamMembers });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getTeamMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data: teamMember, error } = await supabase.from('team_members').select('*').eq('id', id).single();
        if (error || !teamMember) {
            return res.status(404).json({ message: "Team Member Not Found" });
        }
        return res.status(200).json({ message: "Team member fetched successfully", teamMember });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const updateTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const { data, error } = await supabase
            .from('team_members')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Team Member Not Found" });
        }
        return res.status(200).json({ message: "Team member updated successfully", teamMember: data[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, count } = await supabase.from('team_members').delete({ count: 'exact' }).eq('id', id);

        if (error) throw error;
        if (count === 0) {
            return res.status(404).json({ message: "Team Member Not Found" });
        }
        return res.status(200).json({ message: "Team member deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}