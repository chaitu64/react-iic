import { supabase } from "../config/supabase.js";

export const createEvent = async (req, res) => {
    try {
        const { title, description, date, time, location, image, category, price, organizer } = req.body;
        if (!title || !description || !date || !time || !location || !image || !category || !price || !organizer) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const { data, error } = await supabase
            .from('events')
            .insert([{ title, description, date, time, location, image, category, price, organizer }])
            .select();

        if (error) throw error;
        return res.status(201).json({ message: "Event created successfully", event: data[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const { data: events, error } = await supabase.from('events').select('*');
        if (error) throw error;
        return res.status(200).json({ events });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data: event, error } = await supabase.from('events').select('*').eq('id', id).single();
        if (error || !event) {
            return res.status(404).json({ message: "Event Not Found" });
        }
        return res.status(200).json({ event });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const { data: event, error } = await supabase
            .from('events')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        if (!event || event.length === 0) {
            return res.status(404).json({ message: "Event Not Found" });
        }
        return res.status(200).json({ message: "Event updated successfully", event: event[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { error, count } = await supabase.from('events').delete({ count: 'exact' }).eq('id', id);

        if (error) throw error;
        if (count === 0) {
            return res.status(404).json({ message: "Event Not Found" });
        }
        return res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}