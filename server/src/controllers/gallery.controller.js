import { supabase } from "../config/supabase.js";

export const createGalleryImage = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(400).json({ message: "All Fields are required" });
        }

        const { data, error } = await supabase
            .from('gallery')
            .insert([{ title, description, image }])
            .select();

        if (error) throw error;
        return res.status(201).json({ message: "Gallery Image uploaded successfully", galleryImage: data[0] });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const getAllGalleryImages = async (req, res) => {
    try {
        const { data: galleryImages, error } = await supabase.from('gallery').select('*');
        if (error) throw error;

        if (!galleryImages) {
            return res.status(404).json({ message: "Gallery Image not found" });
        }
        return res.status(200).json({ message: "Gallery Images fetched successfully", galleryImages });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const deleteGalleryImage = async (req, res) => {
    try {
        const { error, count } = await supabase.from('gallery').delete({ count: 'exact' }).eq('id', req.params.id);

        if (error) throw error;
        if (count === 0) {
            return res.status(404).json({ message: "Gallery Image not found" });
        }
        return res.status(200).json({ message: "Gallery Image deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const updateGalleryImage = async (req, res) => {
    try {
        const { title, description, image } = req.body;

        // Build updates object dynamically based on what was provided
        let updates = {};
        if (title) updates.title = title;
        if (description) updates.description = description;
        if (image) updates.image = image;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No fields provided to update" });
        }

        const { data: galleryImage, error } = await supabase
            .from('gallery')
            .update(updates)
            .eq('id', req.params.id)
            .select();

        if (error) throw error;
        if (!galleryImage || galleryImage.length === 0) {
            return res.status(404).json({ message: "Gallery Image not found" });
        }
        return res.status(200).json({ message: "Gallery Image updated successfully", galleryImage: galleryImage[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" })
    }
}
