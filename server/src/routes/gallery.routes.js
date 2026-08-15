import { Router } from "express";
import { createGalleryImage, deleteGalleryImage, getAllGalleryImages, updateGalleryImage } from "../controllers/gallery.controller.js";

const router = Router();

router.post("/",createGalleryImage);
router.get("/",getAllGalleryImages);
router.delete("/:id",deleteGalleryImage);
router.put("/:id",updateGalleryImage);

export default router;