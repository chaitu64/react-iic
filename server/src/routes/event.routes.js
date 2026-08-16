import { Router } from "express";
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from "../controllers/event.controller.js";

const router = Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
