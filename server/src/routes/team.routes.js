import express from "express";
import { createTeamMember, getAllTeamMemeber, getTeamMemberById, updateTeamMember, deleteTeamMember } from "../controllers/team.controller.js";

const router = express.Router();

router.post("/", createTeamMember);
router.get("/", getAllTeamMemeber);
router.get("/:id", getTeamMemberById);
router.put("/:id", updateTeamMember);
router.delete("/:id", deleteTeamMember);

export default router;