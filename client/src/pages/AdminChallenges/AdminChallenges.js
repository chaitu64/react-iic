import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './adminChallenges.module.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function AdminChallenges() {
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    navigate('/admin-portal-login');
  };

  // ======================================================
  // FETCH ALL CHALLENGES FROM DATABASE
  // ======================================================

  const fetchChallenges = async (showLoader = true) => {
    try {
      if (showLoader) {
        setIsLoading(true);
      }

      const token = localStorage.getItem('token');

      const response = await fetch(
        `${API_URL}/challenges`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Failed to fetch challenges'
        );
      }

      setChallenges(result.challenges || []);

    } catch (error) {
      console.error('Fetch challenges error:', error);

      setMessage({
        type: 'error',
        text: error.message || 'Unable to load challenges.'
      });

    } finally {
      if (showLoader) {
        setIsLoading(false);
      }
    }
  };


  // ======================================================
  // INITIAL FETCH
  // ======================================================

  useEffect(() => {
    fetchChallenges();
  }, []);


  // ======================================================
  // UPDATE WEB TEAM REVIEW
  // ======================================================

  const updateWebTeamReview = async (id, status) => {
    try {
      setUpdatingId(`${id}-web`);
      setMessage(null);

      const token = localStorage.getItem('token');

      const response = await fetch(
        `${API_URL}/challenges/${id}/web-review`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            status
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Failed to update Web Team review'
        );
      }

      // Immediately update UI
      setChallenges((previousChallenges) =>
        previousChallenges.map((challenge) =>
          challenge.id === id
            ? {
              ...challenge,
              web_team_review_status: status
            }
            : challenge
        )
      );

      // Fetch latest data from database
      await fetchChallenges(false);

      setMessage({
        type: 'success',
        text: 'Web Team review updated successfully.'
      });

    } catch (error) {
      console.error('Web review update error:', error);

      setMessage({
        type: 'error',
        text: error.message || 'Unable to update review.'
      });

    } finally {
      setUpdatingId(null);
    }
  };


  // ======================================================
  // UPDATE FACULTY REVIEW
  // ======================================================

  const updateFacultyReview = async (id, status) => {
    try {
      setUpdatingId(`${id}-faculty`);
      setMessage(null);

      const token = localStorage.getItem('token');

      const response = await fetch(
        `${API_URL}/challenges/${id}/faculty-review`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            status
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Failed to update Faculty review'
        );
      }

      // Immediately update UI
      setChallenges((previousChallenges) =>
        previousChallenges.map((challenge) =>
          challenge.id === id
            ? {
              ...challenge,
              faculty_review_status: status
            }
            : challenge
        )
      );

      // Fetch latest data from database
      await fetchChallenges(false);

      setMessage({
        type: 'success',
        text: 'Faculty review updated successfully.'
      });

    } catch (error) {
      console.error('Faculty review update error:', error);

      setMessage({
        type: 'error',
        text: error.message || 'Unable to update review.'
      });

    } finally {
      setUpdatingId(null);
    }
  };


  // ======================================================
  // SEARCH FILTER
  // ======================================================

  const filteredChallenges = challenges.filter((challenge) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      challenge.batch_id?.toString().toLowerCase().includes(search) ||
      challenge.team_lead_name?.toLowerCase().includes(search) ||
      challenge.email?.toLowerCase().includes(search) ||
      challenge.branch?.toLowerCase().includes(search) ||
      challenge.register_number?.toLowerCase().includes(search) ||
      challenge.problem_statement_details?.toLowerCase().includes(search)
    );
  });


  // ======================================================
  // GET OVERALL STATUS
  // ======================================================

  const getOverallStatus = (challenge) => {
    const webStatus =
      challenge.web_team_review_status || 'w';

    const facultyStatus =
      challenge.faculty_review_status || 'w';


    // If either reviewer rejects
    if (
      webStatus === 'Rejected' ||
      facultyStatus === 'Rejected'
    ) {
      return 'Rejected';
    }


    // Both reviewers approve
    if (
      webStatus === 'Approved' &&
      facultyStatus === 'Approved'
    ) {
      return 'Approved';
    }


    // One reviewer approved, another waiting
    if (
      webStatus === 'Approved' ||
      facultyStatus === 'Approved'
    ) {
      return 'Under Review';
    }


    // Default
    return 'Waiting';
  };


  // ======================================================
  // STATUS CSS CLASS
  // ======================================================

  const getStatusClass = (status) => {
    switch (status) {
      case 'Approved':
        return styles.reviewed;

      case 'Rejected':
        return styles.rejected;

      case 'Under Review':
        return styles.underReview;

      default:
        return styles.waiting;
    }
  };


  // ======================================================
  // STATUS COUNTS
  // ======================================================

  const totalCount = challenges.length;

  const waitingCount = challenges.filter(
    (challenge) =>
      getOverallStatus(challenge) === 'Waiting'
  ).length;

  const underReviewCount = challenges.filter(
    (challenge) =>
      getOverallStatus(challenge) === 'Under Review'
  ).length;

  const approvedCount = challenges.filter(
    (challenge) =>
      getOverallStatus(challenge) === 'Approved'
  ).length;

  const rejectedCount = challenges.filter(
    (challenge) =>
      getOverallStatus(challenge) === 'Rejected'
  ).length;


  // ======================================================
  // UI
  // ======================================================

  return (
    <div className={styles.container}>

      {/* ================= HEADER ================= */}

      <div className={styles.header}>

        <div className={styles.headerContent}>

          <span className={styles.tag}>
            SIH 2026 • ADMIN PORTAL
          </span>

          <h1>Technical Review Challenges</h1>

          <p>
            Review and manage technical re-evaluation requests
            submitted by SIH participants.
          </p>

        </div>


        <div className={styles.headerActions}>
          <button
            className={styles.refreshButton}
            onClick={() => fetchChallenges()}
            disabled={isLoading}
          >
            <span>↻</span>
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>

          <button
            className={styles.logoutButton}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>


      {/* ================= MESSAGE ================= */}

      {message && (
        <div
          className={`${styles.message} ${message.type === 'success'
            ? styles.successMessage
            : styles.errorMessage
            }`}
        >
          {message.type === 'success' ? '✓ ' : '⚠ '}
          {message.text}
        </div>
      )}


      {/* ================= STATS ================= */}

      <div className={styles.statsGrid}>

        <div className={styles.statCard}>
          <span>Total Challenges</span>
          <strong>{totalCount}</strong>
        </div>


        <div className={styles.statCard}>
          <span>Waiting</span>
          <strong>{waitingCount}</strong>
        </div>


        <div className={styles.statCard}>
          <span>Under Review</span>
          <strong>{underReviewCount}</strong>
        </div>


        <div className={styles.statCard}>
          <span>Approved</span>
          <strong>{approvedCount}</strong>
        </div>


        <div className={styles.statCard}>
          <span>Rejected</span>
          <strong>{rejectedCount}</strong>
        </div>

      </div>


      {/* ================= SEARCH ================= */}

      <div className={styles.searchWrapper}>

        <span className={styles.searchIcon}>
          ⌕
        </span>

        <input
          type="text"
          placeholder="Search by Batch ID, name, email, register number, branch or project..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>


      {/* ================= LOADING ================= */}

      {isLoading && (
        <div className={styles.loading}>
          Loading challenges...
        </div>
      )}


      {/* ================= EMPTY ================= */}

      {!isLoading && filteredChallenges.length === 0 && (
        <div className={styles.emptyState}>

          <div className={styles.emptyIcon}>
            📂
          </div>

          <h3>No Challenges Found</h3>

          <p>
            No challenge submissions match your search.
          </p>

        </div>
      )}


      {/* ================= CHALLENGE LIST ================= */}

      <div className={styles.challengeList}>

        {!isLoading &&
          filteredChallenges.map((challenge) => {

            const overallStatus =
              getOverallStatus(challenge);

            return (

              <div
                key={challenge.id}
                className={styles.challengeCard}
              >

                {/* ================= CARD HEADER ================= */}

                <div className={styles.cardHeader}>

                  <div className={styles.batchInfo}>

                    <span className={styles.batchLabel}>
                      BATCH ID
                    </span>

                    <h2>
                      {challenge.batch_id}
                    </h2>

                  </div>


                  <span
                    className={`${styles.statusBadge} ${getStatusClass(overallStatus)
                      }`}
                  >
                    {overallStatus}
                  </span>

                </div>


                {/* ================= PARTICIPANT DETAILS ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    👤 Participant Details
                  </h3>


                  <div className={styles.detailPanel}>

                    <div className={styles.detailGrid}>

                      <div className={styles.detailItem}>
                        <span>Name</span>
                        <strong>
                          {challenge.team_lead_name || 'Not provided'}
                        </strong>
                      </div>


                      <div className={styles.detailItem}>
                        <span>Register Number</span>
                        <strong>
                          {challenge.register_number || 'Not provided'}
                        </strong>
                      </div>


                      <div className={styles.detailItem}>
                        <span>Branch</span>
                        <strong>
                          {challenge.branch || 'Not provided'}
                        </strong>
                      </div>


                      <div className={styles.detailItem}>
                        <span>Year</span>
                        <strong>
                          {challenge.year || 'Not provided'}
                        </strong>
                      </div>


                      <div
                        className={`${styles.detailItem} ${styles.fullWidth}`}
                      >
                        <span>Email Address</span>

                        <strong>
                          {challenge.email || 'Not provided'}
                        </strong>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ================= PROJECT DETAILS ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    📁 Project Details
                  </h3>

                  <div className={styles.contentBox}>
                    <p>
                      {challenge.problem_statement_details ||
                        'Not provided'}
                    </p>
                  </div>

                </div>


                {/* ================= GITHUB ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    🔗 GitHub Repository
                  </h3>


                  <div className={styles.githubBox}>

                    <span className={styles.repoText}>
                      Project Source Code
                    </span>


                    {challenge.github_repo_link ? (

                      <a
                        href={challenge.github_repo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        Open Repository ↗
                      </a>

                    ) : (

                      <span className={styles.noData}>
                        Repository not provided
                      </span>

                    )}

                  </div>

                </div>


                {/* ================= CONTACT ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    📞 Contact Number
                  </h3>

                  <div className={styles.contentBox}>
                    <p>
                      {challenge.contact_number || 'Not provided'}
                    </p>
                  </div>

                </div>


                {/* ================= CHALLENGE REASON ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    📝 Challenge Reason
                  </h3>

                  <div className={styles.contentBox}>
                    <p>
                      {challenge.challenge_reason || 'Not provided'}
                    </p>
                  </div>

                </div>


                {/* ================= TECHNICAL CONTRIBUTION ================= */}

                <div className={styles.section}>

                  <h3 className={styles.sectionTitle}>
                    💻 Technical Contribution
                  </h3>

                  <div className={styles.contentBox}>
                    <p>
                      {challenge.technical_contribution ||
                        'Not provided'}
                    </p>
                  </div>

                </div>


                {/* ================= REVIEW SECTION ================= */}

                <div className={styles.reviewSection}>

                  <h3 className={styles.reviewTitle}>
                    Review Decisions
                  </h3>


                  <div className={styles.reviewGrid}>


                    {/* WEB TEAM REVIEW */}

                    <div className={styles.reviewCard}>

                      <div>

                        <span className={styles.reviewLabel}>
                          Web Team Review
                        </span>

                        <p>
                          Review technical implementation.
                        </p>

                      </div>


                      <select
                        value={
                          challenge.web_team_review_status ||
                          'w'
                        }
                        disabled={
                          updatingId ===
                          `${challenge.id}-web`
                        }
                        onChange={(e) =>
                          updateWebTeamReview(
                            challenge.id,
                            e.target.value
                          )
                        }
                      >

                        <option value="w">
                          Waiting
                        </option>

                        <option value="Approved">
                          Approved
                        </option>

                        <option value="Rejected">
                          Rejected
                        </option>

                      </select>

                    </div>


                    {/* ================= FACULTY REVIEW ================= */}

                    <div className={styles.reviewCard}>

                      <div>

                        <span className={styles.reviewLabel}>
                          Faculty Review
                        </span>

                        <p>
                          Final academic evaluation.
                        </p>

                      </div>


                      <select
                        value={
                          challenge.faculty_review_status ||
                          'w'
                        }
                        disabled={
                          updatingId ===
                          `${challenge.id}-faculty`
                        }
                        onChange={(e) =>
                          updateFacultyReview(
                            challenge.id,
                            e.target.value
                          )
                        }
                      >

                        <option value="w">
                          Waiting
                        </option>

                        <option value="Approved">
                          Approved
                        </option>

                        <option value="Rejected">
                          Rejected
                        </option>

                      </select>

                    </div>


                  </div>

                </div>


              </div>

            );

          })}

      </div>

    </div>
  );
}

export default AdminChallenges;

