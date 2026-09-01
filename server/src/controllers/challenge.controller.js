import { supabase } from "../config/supabase.js";

// ======================================================
// VERIFY REGISTERED SIH PARTICIPANT
// ======================================================
export const verifyStudent = async (req, res) => {
  try {
    const { batch_id, email } = req.body;

    if (!batch_id || !email) {
      return res.status(400).json({
        success: false,
        message: "Batch ID and registered email are required"
      });
    }

    // Check whether student/team exists in registered SIH participants
    const { data: student, error: studentError } = await supabase
      .from("sih_2026_registrations")
      .select("*")
      .eq("batch_id", batch_id)
      .eq("email", email.trim().toLowerCase())
      .single();

    if (studentError || !student) {
      return res.status(404).json({
        success: false,
        message:
          "No registered SIH participant found with this Batch ID and Email."
      });
    }

    // Check whether a challenge was already submitted
    const { data: existingChallenge, error: challengeError } = await supabase
  .from("sih_review_challenges")
  .select(`
    id,
    review_status,
    web_team_review_status,
    faculty_review_status
  `)
  .eq("batch_id", student.batch_id)
  .maybeSingle();

    if (challengeError) {
      console.error("Challenge verification error:", challengeError);

      return res.status(500).json({
        success: false,
        message: "Unable to verify challenge submission status."
      });
    }

    if (existingChallenge) {
      return res.status(409).json({
        success: false,
        alreadySubmitted: true,
        message: `A challenge has already been submitted for this Batch ID. Current status: ${
          existingChallenge.review_status || "Pending"
        }.`
      });
    }

    return res.status(200).json({
      success: true,
      message: "Registration verified successfully",
      student
    });

  } catch (error) {
    console.error("Student verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


// ======================================================
// SUBMIT CHALLENGE
// ======================================================
export const submitChallenge = async (req, res) => {
  try {
    const {
      batch_id,
      team_lead_name,
      register_number,
      branch,
      year,
      email,
      problem_statement_details,
      github_repo_link,
      contact_number,
      challenge_reason,
      technical_contribution
    } = req.body;

    // Validate required fields
    if (
      !batch_id ||
      !team_lead_name ||
      !email ||
      !problem_statement_details ||
      !github_repo_link ||
      !contact_number ||
      !challenge_reason
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }
    const githubRepoPattern =
  /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/;

if (!githubRepoPattern.test(github_repo_link.trim())) {
  return res.status(400).json({
    success: false,
    message: "Please provide a valid GitHub repository link."
  });
}

    // Extra duplicate protection
    const { data: existingChallenge } = await supabase
      .from("sih_review_challenges")
      .select("id")
      .eq("batch_id", batch_id)
      .maybeSingle();

    if (existingChallenge) {
      return res.status(409).json({
        success: false,
        message: "A challenge has already been submitted for this Batch ID."
      });
    }

    const { data, error } = await supabase
      .from("sih_review_challenges")
      .insert([
        {
          batch_id,
          team_lead_name,
          register_number,
          branch,
          year,
          email,
          problem_statement_details,
          github_repo_link,
          contact_number,
          challenge_reason,
          technical_contribution: technical_contribution || null,

          web_team_review_status: "Pending",
          faculty_review_status: "Pending",
          review_status: "Pending",

          submitted_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) {
      console.error("Challenge submission error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    return res.status(201).json({
      success: true,
      message: "Challenge submitted successfully",
      challenge: data
    });

  } catch (error) {
    console.error("Submit challenge error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


// ======================================================
// GET ALL CHALLENGES
// ======================================================
export const getAllChallenges = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("sih_review_challenges")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      console.error("Fetch challenges error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    return res.status(200).json({
      success: true,
      challenges: data
    });

  } catch (error) {
    console.error("Get challenges error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


// ======================================================
// UPDATE WEB TEAM REVIEW
// ======================================================
export const updateWebTeamReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Review status is required"
      });
    }

    // Get current challenge
    const { data: challenge, error: fetchError } = await supabase
      .from("sih_review_challenges")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !challenge) {
      return res.status(404).json({
        success: false,
        message: "Challenge not found"
      });
    }

    let reviewStatus = "Under Review";

    if (
      status === "Reviewed" &&
      challenge.faculty_review_status === "Reviewed"
    ) {
      reviewStatus = "Reviewed";
    }

    const { data, error } = await supabase
      .from("sih_review_challenges")
      .update({
        web_team_review_status: status,
        review_status: reviewStatus,
        reviewed_at: new Date().toISOString()
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Web team review update error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    return res.status(200).json({
      success: true,
      message: "Web team review updated successfully",
      challenge: data
    });

  } catch (error) {
    console.error("Web team review error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};


// ======================================================
// UPDATE FACULTY REVIEW
// ======================================================
export const updateFacultyReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Review status is required"
      });
    }

    // Get current challenge
    const { data: challenge, error: fetchError } = await supabase
      .from("sih_review_challenges")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !challenge) {
      return res.status(404).json({
        success: false,
        message: "Challenge not found"
      });
    }

    let reviewStatus = "Under Review";

    if (
      status === "Reviewed" &&
      challenge.web_team_review_status === "Reviewed"
    ) {
      reviewStatus = "Reviewed";
    }

    const { data, error } = await supabase
      .from("sih_review_challenges")
      .update({
        faculty_review_status: status,
        review_status: reviewStatus,
        reviewed_at: new Date().toISOString()
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Faculty review update error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    return res.status(200).json({
      success: true,
      message: "Faculty review updated successfully",
      challenge: data
    });

  } catch (error) {
    console.error("Faculty review error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};