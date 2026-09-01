import { Router } from "express";
import { verifyAdmin } from "../middlewares/auth.middleware.js";
import {
  submitChallenge,
  getAllChallenges,
  updateWebTeamReview,
  updateFacultyReview,
  verifyStudent
} from "../controllers/challenge.controller.js";



const router = Router();


// ==========================================
// STUDENT ROUTES
// ==========================================

// Verify SIH registration
router.post("/verify", verifyStudent);

// Submit challenge
router.post("/submit", submitChallenge);


// ==========================================
// ADMIN ROUTES - PROTECTED
// ==========================================

// Get all submitted challenges
router.get("/", verifyAdmin, getAllChallenges);

// Update web team review
router.put(
  "/:id/web-review",
  verifyAdmin,
  updateWebTeamReview
);

// Update faculty review
router.put(
  "/:id/faculty-review",
  verifyAdmin,
  updateFacultyReview
);


export default router;