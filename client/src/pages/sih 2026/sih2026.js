import React, { useState } from 'react';
import styles from './sih2026.module.css';
const API_URL = 'http://localhost:5000/api';
function Sih2026() {
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

  // ======================================================
  // VERIFY STUDENT USING BACKEND API
  // ======================================================
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
      const response = await fetch(
        `${API_URL}/challenges/verify`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            batch_id: Number(batchId),
            email: email.trim().toLowerCase()
          })
        }
      );

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


  // ======================================================
  // HANDLE FORM INPUT
  // ======================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };


  // ======================================================
  // SUBMIT CHALLENGE USING BACKEND API
  // ======================================================
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
      const response = await fetch(
        `${API_URL}/challenges/submit`,
        {
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

            problem_statement_details:
              formData.problemStatementDetails,

            github_repo_link:
              formData.githubRepoLink,

            contact_number:
              formData.contactNumber,

            challenge_reason:
              formData.challengeReason,

            technical_contribution:
              formData.technicalContribution || null
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
          'Unable to submit your challenge.'
        );
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
        text:
          error.message ||
          'Unable to submit your challenge. Please try again.'
      });

    } finally {
      setIsSubmitting(false);
    }
  };


  // ======================================================
  // SCROLL TO FORM
  // ======================================================
  const scrollToForm = () => {
    const element = document.getElementById('challenge-form');

    if (element) {
      const navbarOffset = 120;

      const elementPosition =
        element.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  return (
    <div className={styles.container}>

      {/* HERO SECTION */}
      <section className={styles.hero}>

        <div className={styles.heroBadge}>
          SIH 2026 • IIC Technical Review
        </div>

        <h1 className={styles.heading}>
          Technical Review Challenge
        </h1>

        <p className={styles.heroText}>
          Believe your project deserves another technical review?
          Submit your project for an independent evaluation based on
          innovation, implementation and technical contribution.
        </p>

        <button
          className={styles.primaryButton}
          onClick={scrollToForm}
        >
          Submit a Challenge
          <span>→</span>
        </button>

      </section>


      {/* HOW IT WORKS */}
      <section className={styles.processSection}>

        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>
            PROCESS
          </span>

          <h2>How it works</h2>
        </div>

        <div className={styles.stepsGrid}>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>

            <h3>Verify Registration</h3>

            <p>
              Enter your registered Batch ID and email to verify your
              SIH participation.
            </p>
          </div>


          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>

            <h3>Submit Details</h3>

            <p>
              Provide your project details, GitHub repository and
              reason for requesting a technical review.
            </p>
          </div>


          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>

            <h3>Independent Review</h3>

            <p>
              Your submission will be reviewed by selected technical
              faculty and the IIC Web Team.
            </p>
          </div>


          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>

            <h3>Review Outcome</h3>

            <p>
              The review status will be updated after
              the technical evaluation.
            </p>
          </div>

        </div>

      </section>


      {/* INFORMATION */}
      <section className={styles.infoBox}>

        <div className={styles.infoIcon}>ℹ</div>

        <div>
          <h3>Fair Technical Review Initiative</h3>

          <p>
            This initiative provides an opportunity for students to
            request an additional technical review of their SIH
            project. Please focus your submission on the project's
            implementation, innovation, functionality and technical
            contribution.
          </p>
        </div>

      </section>


      {/* CHALLENGE FORM */}
      <section
        className={styles.formSection}
        id="challenge-form"
      >

        <div className={styles.formHeader}>

          <span className={styles.sectionTag}>
            SUBMISSION PORTAL
          </span>

          <h2>Submit Your Challenge</h2>

          <p>
            Verify your SIH registration before submitting your
            technical review request.
          </p>

        </div>


        {/* MESSAGE */}
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


        {/* VERIFICATION FORM */}
        {!verifiedStudent && (
          <form
            className={styles.verifyForm}
            onSubmit={handleVerify}
          >

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
              {isVerifying
                ? 'Verifying...'
                : 'Verify Registration'}
            </button>

          </form>
        )}


        {/* VERIFIED STUDENT DETAILS */}
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

                <strong>
                  {verifiedStudent.team_lead_name}
                </strong>
              </div>


              <div>
                <span>Register Number</span>

                <strong>
                  {verifiedStudent.register_number}
                </strong>
              </div>


              <div>
                <span>Branch</span>

                <strong>
                  {verifiedStudent.branch}
                </strong>
              </div>


              <div>
                <span>Year</span>

                <strong>
                  {verifiedStudent.year}
                </strong>
              </div>


              <div>
                <span>Email</span>

                <strong>
                  {verifiedStudent.email}
                </strong>
              </div>

            </div>


            {/* CHALLENGE FORM */}
            <form
              className={styles.challengeForm}
              onSubmit={handleSubmit}
            >

              <div className={styles.inputGroup}>

                <label>
                  Problem Statement / Project Details *
                </label>

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

                <label>
                  Reason for Re-Evaluation Request *
                </label>

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

                <label>
                  Technical Contribution / Innovation
                </label>

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
                  I confirm that the information submitted is genuine
                  and that this request is intended for a fair
                  technical re-evaluation of our SIH project.
                </p>

              </div>


              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Submitting Challenge...'
                  : 'Submit Technical Review Challenge'}
              </button>

            </form>

          </div>
        )}

      </section>

    </div>
  );
}

export default Sih2026;