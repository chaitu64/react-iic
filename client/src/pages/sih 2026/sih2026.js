import React, { useEffect, useState } from 'react';
import styles from './sih2026.module.css';
import { supabase } from '../../lib/supabase';

const API_URL = 'http://localhost:5000/api';

function Sih2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [batchId, setBatchId] = useState('');
  const [email, setEmail] = useState('');
  const [verifiedStudent, setVerifiedStudent] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [formData, setFormData] = useState({
    problemStatementDetails: '',
    githubRepoLink: '',
    contactNumber: '',
    challengeReason: '',
    technicalContribution: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [updatingStatusId, setUpdatingStatusId] = useState(null);

  useEffect(() => {
    setIsAdmin(
      localStorage.getItem('isAdmin') === 'true' &&
      Boolean(localStorage.getItem('token'))
    );

    const fetchParticipants = async () => {
      try {
        setLoadError('');
        const { data, error } = await supabase
          .from('sih_2026_registrations')
          .select('*')
          .order('batch_id', { ascending: true });

        if (error) {
          throw error;
        }

        setTeams(
          (data || []).map((participant) => ({
            id: participant.batch_id
              ? `B${participant.batch_id.toString().padStart(3, '0')}`
              : String(participant.id || 'N/A'),
            name: participant.team_lead_name || 'Unknown Team',
            branch: participant.branch || 'N/A',
            register_number: participant.register_number || 'N/A',
            email: participant.email || 'N/A',
            faculty: participant.faculty_assigned || 'N/A',
            iic_coordinator: participant.iic_coordinator_assigned || 'N/A',
            date:
              participant.review_date ||
              participant.reviewed_at?.split('T')[0] ||
              'N/A',
            status:
              participant.review_status?.toLowerCase() === 'completed'
                ? 'Completed'
                : 'Pending',
            originalBatchId: participant.batch_id
          }))
        );
      } catch (error) {
        console.error('Error fetching participants:', error);
        setLoadError('Unable to load participant details right now.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!batchId.trim() || !email.trim()) {
      setMessage({
        type: 'error',
        text: 'Please enter both Batch ID and Registered Email.'
      });
      return;
    }

    setIsVerifying(true);
    setMessage(null);
    setVerifiedStudent(null);

    try {
      const response = await fetch(`${API_URL}/challenges/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          batch_id: Number(batchId),
          email: email.trim().toLowerCase()
        })
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.alreadySubmitted) {
          setMessage({
            type: 'info',
            text:
              result.message ||
              'A challenge has already been submitted for this Batch ID.'
          });
          return;
        }

        throw new Error(
          result.message ||
          'Verification failed. Please check your details.'
        );
      }

      setVerifiedStudent(result.student);
      setMessage({
        type: 'success',
        text:
          'Registration verified successfully. You can now submit your technical review challenge.'
      });
    } catch (error) {
      console.error('Verification error:', error);
      setMessage({
        type: 'error',
        text:
          error.message ||
          'Verification failed. Please check your details and try again.'
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verifiedStudent) {
      setMessage({
        type: 'error',
        text: 'Please verify your registration first.'
      });
      return;
    }

    if (
      !formData.problemStatementDetails.trim() ||
      !formData.githubRepoLink.trim() ||
      !formData.contactNumber.trim() ||
      !formData.challengeReason.trim()
    ) {
      setMessage({
        type: 'error',
        text: 'Please fill in all required fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch(`${API_URL}/challenges/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          batch_id: verifiedStudent.batch_id,
          team_lead_name: verifiedStudent.team_lead_name,
          register_number: verifiedStudent.register_number,
          branch: verifiedStudent.branch,
          year: verifiedStudent.year,
          email: verifiedStudent.email,
          problem_statement_details: formData.problemStatementDetails,
          github_repo_link: formData.githubRepoLink,
          contact_number: formData.contactNumber,
          challenge_reason: formData.challengeReason,
          technical_contribution: formData.technicalContribution || null
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to submit your challenge.');
      }

      setMessage({
        type: 'success',
        text:
          'Your technical review challenge has been submitted successfully. The review team will evaluate your submission.'
      });

      setFormData({
        problemStatementDetails: '',
        githubRepoLink: '',
        contactNumber: '',
        challengeReason: '',
        technicalContribution: ''
      });
      setVerifiedStudent(null);
      setBatchId('');
      setEmail('');
    } catch (error) {
      console.error('Submission error:', error);
      setMessage({
        type: 'error',
        text: error.message || 'Unable to submit your challenge. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingStatusId(id);

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/participants/${id}/status`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status: newStatus.toLowerCase() })
        }
      );

      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          // ignore invalid json payloads
        }
        throw new Error(errorData.message || 'Failed to update status');
      }

      setTeams((previousTeams) =>
        previousTeams.map((team) =>
          (team.originalBatchId || team.id) === id
            ? { ...team, status: newStatus }
            : team
        )
      );
    } catch (error) {
      console.error('Status update error:', error);
      window.alert(error.message || 'Network error: Could not update status.');
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const filteredData = teams.filter((team) => {
    const search = searchTerm.trim().toLowerCase();

    return (
      team.name?.toLowerCase().includes(search) ||
      team.id?.toLowerCase().includes(search) ||
      team.branch?.toLowerCase().includes(search) ||
      team.register_number?.toLowerCase().includes(search) ||
      team.faculty?.toLowerCase().includes(search) ||
      team.email?.toLowerCase().includes(search) ||
      team.iic_coordinator?.toLowerCase().includes(search)
    );
  });

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    setIsAdmin(false);
  };

  const scrollToForm = () => {
    const element = document.getElementById('challenge-form');

    if (element) {
      const navbarOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroBadge}>SIH 2026 • IIC Technical Review</div>

        <h1 className={styles.heading}>Technical Review Challenge</h1>

        <p className={styles.heroText}>
          Believe your project deserves another technical review? Submit your
          project for an independent evaluation based on innovation,
          implementation and technical contribution.
        </p>

        {!isAdmin && (
          <button className={styles.primaryButton} onClick={scrollToForm}>
            Submit a Challenge
            <span>→</span>
          </button>
        )}
      </section>

      {isAdmin && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <button
                onClick={handleLogout}
                style={{
                  background: '#dc3545',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Logout Admin
              </button>
            </div>

            <div className={styles.searchContainer} style={{ margin: 0 }}>
              <input
                type="text"
                placeholder="Search teams, ID, branch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Batch ID</th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>Register Number</th>
                  <th>Registered Mail</th>
                  <th>Faculty Assigned</th>
                  <th>IIC Co-ordinator</th>
                  <th>Date of Review</th>
                  <th>Review Status</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td
                      colSpan="9"
                      className={styles.noData}
                      style={{
                        padding: '40px',
                        fontSize: '1.2rem',
                        color: '#6b7280'
                      }}
                    >
                      Loading participants...
                    </td>
                  </tr>
                ) : loadError ? (
                  <tr>
                    <td colSpan="9" className={styles.noData}>
                      {loadError}
                    </td>
                  </tr>
                ) : filteredData.length > 0 ? (
                  filteredData.map((team) => (
                    <tr key={team.id} style={{ transition: 'all 0.2s ease' }}>
                      <td data-label="Batch ID">{team.id}</td>
                      <td data-label="Name" className={styles.teamName}>
                        {team.name}
                      </td>
                      <td data-label="Branch">{team.branch}</td>
                      <td data-label="Register Number">{team.register_number}</td>
                      <td data-label="Registered Mail">{team.email}</td>
                      <td data-label="Faculty Assigned">{team.faculty}</td>
                      <td data-label="IIC Co-ordinator">{team.iic_coordinator}</td>
                      <td data-label="Date of Review">{team.date}</td>
                      <td data-label="Status">
                        <select
                          value={team.status}
                          onChange={(e) =>
                            handleStatusChange(
                              team.originalBatchId || team.id,
                              e.target.value
                            )
                          }
                          disabled={
                            updatingStatusId === (team.originalBatchId || team.id)
                          }
                          className={`${styles.statusDropdown} ${
                            team.status === 'Completed'
                              ? styles.completed
                              : styles.pending
                          }`}
                          style={{
                            cursor:
                              updatingStatusId === (team.originalBatchId || team.id)
                                ? 'wait'
                                : 'pointer'
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className={styles.noData}>
                      No matching teams found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {!isAdmin && (
        <>
          <section className={styles.processSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>PROCESS</span>
              <h2>How it works</h2>
            </div>

            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>01</div>
                <h3>Verify Registration</h3>
                <p>
                  Enter your registered Batch ID and email to verify your SIH
                  participation.
                </p>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>02</div>
                <h3>Submit Details</h3>
                <p>
                  Provide your project details, GitHub repository and reason for
                  requesting a technical review.
                </p>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>03</div>
                <h3>Independent Review</h3>
                <p>
                  Your submission will be reviewed by selected technical faculty and
                  the IIC Web Team.
                </p>
              </div>

              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>04</div>
                <h3>Review Outcome</h3>
                <p>
                  The review status will be updated after the technical evaluation.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.infoBox}>
            <div className={styles.infoIcon}>ℹ</div>

            <div>
              <h3>Fair Technical Review Initiative</h3>
              <p>
                This initiative provides an opportunity for students to request an
                additional technical review of their SIH project. Please focus your
                submission on the project's implementation, innovation,
                functionality and technical contribution.
              </p>
            </div>
          </section>

          <section className={styles.formSection} id="challenge-form">
            <div className={styles.formHeader}>
              <span className={styles.sectionTag}>SUBMISSION PORTAL</span>
              <h2>Submit Your Challenge</h2>
              <p>
                Verify your SIH registration before submitting your technical review
                request.
              </p>
            </div>

            {message && (
              <div
                className={`${styles.message} ${
                  message.type === 'success'
                    ? styles.successMessage
                    : message.type === 'error'
                    ? styles.errorMessage
                    : styles.infoMessage
                }`}
              >
                {message.type === 'success' && '✓ '}
                {message.type === 'error' && '⚠ '}
                {message.type === 'info' && 'ℹ '}
                {message.text}
              </div>
            )}

            {!verifiedStudent && (
              <form className={styles.verifyForm} onSubmit={handleVerify}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>Batch ID *</label>
                    <input
                      type="number"
                      placeholder="Enter your Batch ID"
                      value={batchId}
                      onChange={(e) => setBatchId(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Registered Email *</label>
                    <input
                      type="email"
                      placeholder="Enter registered email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.verifyButton}
                  disabled={isVerifying}
                >
                  {isVerifying ? 'Verifying...' : 'Verify Registration'}
                </button>
              </form>
            )}

            {verifiedStudent && (
              <div className={styles.verifiedContainer}>
                <div className={styles.verifiedHeader}>
                  <div>
                    <span className={styles.verifiedCheck}>✓</span>
                    <h3>Registration Verified</h3>
                  </div>

                  <button
                    type="button"
                    className={styles.changeButton}
                    onClick={() => {
                      setVerifiedStudent(null);
                      setMessage(null);
                    }}
                  >
                    Change Details
                  </button>
                </div>

                <div className={styles.studentDetails}>
                  <div>
                    <span>Batch ID</span>
                    <strong>{verifiedStudent.batch_id}</strong>
                  </div>

                  <div>
                    <span>Team Lead</span>
                    <strong>{verifiedStudent.team_lead_name}</strong>
                  </div>

                  <div>
                    <span>Register Number</span>
                    <strong>{verifiedStudent.register_number}</strong>
                  </div>

                  <div>
                    <span>Branch</span>
                    <strong>{verifiedStudent.branch}</strong>
                  </div>

                  <div>
                    <span>Year</span>
                    <strong>{verifiedStudent.year}</strong>
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>{verifiedStudent.email}</strong>
                  </div>
                </div>

                <form className={styles.challengeForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label>Problem Statement / Project Details *</label>
                    <textarea
                      name="problemStatementDetails"
                      value={formData.problemStatementDetails}
                      onChange={handleChange}
                      placeholder="Explain the problem statement and your proposed solution..."
                      rows="5"
                      required
                    />
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label>GitHub Repository Link *</label>
                      <input
                        type="url"
                        name="githubRepoLink"
                        value={formData.githubRepoLink}
                        onChange={handleChange}
                        placeholder="https://github.com/..."
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label>Contact Number *</label>
                      <input
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Reason for Re-Evaluation Request *</label>
                    <textarea
                      name="challengeReason"
                      value={formData.challengeReason}
                      onChange={handleChange}
                      placeholder="Clearly explain why you believe your project requires an additional technical review..."
                      rows="6"
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Technical Contribution / Innovation</label>
                    <textarea
                      name="technicalContribution"
                      value={formData.technicalContribution}
                      onChange={handleChange}
                      placeholder="Highlight important technical implementation, innovation, models, datasets or unique features..."
                      rows="5"
                    />
                  </div>

                  <div className={styles.declaration}>
                    <span>✓</span>
                    <p>
                      I confirm that the information submitted is genuine and that this
                      request is intended for a fair technical re-evaluation of our SIH
                      project.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting Challenge...' : 'Submit Technical Review Challenge'}
                  </button>
                </form>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default Sih2026;