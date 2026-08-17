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
        // Read directly from the 'gallery' Storage Bucket just like you asked!
        const { data: files, error } = await supabase.storage.from('gallery').list('', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'created_at', order: 'desc' }
        });

        if (error) throw error;
        if (!files || files.length === 0) {
            return res.status(404).json({ message: "No images found in the gallery bucket", galleryImages: [] });
        }

        // Generate the Public URL for every single file sitting in the bucket!
        const bucketImages = files.map(file => {
            const { data } = supabase.storage.from('gallery').getPublicUrl(file.name);
            return {
                id: file.id,
                title: file.name,
                date: file.created_at,
                // The frontend gallery mapping expects an array named `images`
                images: [data.publicUrl],
                category: "all" // Automatically assign to the "All Events" filter
            };
        });

        return res.status(200).json({ message: "Gallery Bucket fetched successfully", galleryImages: bucketImages });
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
