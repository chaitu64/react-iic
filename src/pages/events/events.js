import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Events.module.css';
function Events() {
	return (
		<div className={styles.wrap}>
			

			<main>
				<div className={styles['hero-events']}>
					<h1>Events Schedule</h1>
					<p>Stay updated with our latest workshops, hackathons, and innovation sessions. Mark your calendars and join the innovation journey.</p>
				</div>

				<section id="past">
					<div className={styles['section-header']}>
						<h2>Past Events</h2>
						<div className={styles['section-line']}></div>
					</div>
					<div className={styles['events-grid']}>
						{/* Event cards from events.html */}
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>DEC</span>
								<span className={styles['date-day']}>21</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>LOGO FORGE: Design Challenge</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> 9.30-12.30</span>
									<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> B-206</span>
								</div>
								<p className={styles['event-desc']}>Step into the world of imagination! Transform real company logos into fresh, creative designs. Showcase your visual branding skills and originality in this arena.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>DEC</span>
								<span className={styles['date-day']}>21</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>BRAIN BUZZ: Tech Quiz</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> 1.30 - 3.30 </span>
									<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> B-206</span>
								</div>
								<p className={styles['event-desc']}>An electrifying quiz testing intelligence, speed, and problem-solving. A mix of logical, analytical, and general knowledge questions to ignite your curiosity.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>DEC</span>
								<span className={styles['date-day']}>22</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Code Buzz: Coding Challenge</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> 10:00 AM - 2:00 PM</span>
									<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> Computer Lab</span>
								</div>
								<p className={styles['event-desc']}>Dive into the world of coding! Solve challenging problems and showcase your programming skills in this exciting coding competition.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>DEC</span>
								<span className={styles['date-day']}>22</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Idea Star: Innovation Pitch</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> 3:00 PM - 5:00 PM</span>
									<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> Seminar Hall</span>
								</div>
								<p className={styles['event-desc']}>Pitch your innovative ideas to a panel of experts! This event is designed to nurture creativity and entrepreneurial thinking among students.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>MAY</span>
								<span className={styles['date-day']}>25</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Incubation Visit - Vignan TBI</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> Completed</span>
								</div>
								<p className={styles['event-desc']}>VVIT IIC organized a field visit to Vignan TBI, providing students with a practical understanding of the incubation process. The session focused on bridging the gap between academic learning and real-world startup strategies.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>DEC</span>
								<span className={styles['date-day']}>19</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Incubation Visit - SRM-AP</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> Completed</span>
								</div>
								<p className={styles['event-desc']}>IIC members had the privilege to explore the incubation center at SRM-AP University, learning about the entrepreneurship ecosystem and startup support mechanisms.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>OCT</span>
								<span className={styles['date-day']}>15</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>INNOVATE-IT Challenge</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> Completed</span>
								</div>
								<p className={styles['event-desc']}>Held on October 15th, 'INNOVATE-IT' was a dedicated ideation platform designed to foster the entrepreneurial spirit. Student teams of 2-3 members showcased their problem-solving skills, presenting unique concepts under the theme 'Ignite Ideas, Inspire Action.'</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>SEP</span>
								<span className={styles['date-day']}>24</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Smart India Hackathon 2025</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> Completed</span>
								</div>
								<p className={styles['event-desc']}>The Institution's Innovation Council at VVIT University successfully organized Smart India Hackathon 2025. This national-level event provided a platform for students to demonstrate their technical prowess and entrepreneurial spirit.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
						<div className={styles['event-card']}>
							<div className={styles['date-badge']} style={{background: 'var(--muted)'}}>
								<span className={styles['date-month']}>NOV</span>
								<span className={styles['date-day']}>17</span>
							</div>
							<div className={styles['event-content']}>
								<h3 className={styles['event-title']} style={{color: 'var(--muted)'}}>Tech Talks</h3>
								<div className={styles['event-details']}>
									<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> Completed</span>
								</div>
								<p className={styles['event-desc']}>From student to founder! our students received invaluable mentorship from the host MR.Dileep Sajja who broke down the importance of entrepreneurship and shared the essential strategies needed to build a business from scratch.</p>
								<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
							</div>
						</div>
					</div>
				</section>
			</main>

			
		</div>
	);
}

export default Events;
