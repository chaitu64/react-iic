import React, { useState, useEffect } from 'react';
import styles from './Events.module.css';

function Events() {
	const [eventsData, setEventsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:5000/api/events')
			.then(res => res.json())
			.then(data => {
				// Access the events array from the response { events: [...] }
				setEventsData(data.events || data || []);
				setLoading(false);
			})
			.catch(err => {
				console.error("Failed to fetch events:", err);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		if (window.location.hash) {
			const el = document.getElementById(window.location.hash.slice(1));
			if (el) {
				setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
			}
		}
	}, []);
	return (
		<div className={styles.wrap}>


			<main>
				<div className={styles['hero-events']}>
					<h1>Events Schedule</h1>
					<p>Stay updated with our latest workshops, hackathons, and innovation sessions. Mark your calendars and join the innovation journey.</p>
				</div>

				<section id="ongoing" style={{ marginBottom: '60px' }}>
					<div className={styles['section-header']}>
						<h2>Ongoing Events</h2>
						<div className={styles['section-line']}></div>
					</div>
					<div className={styles['events-grid']}>
						<div className={styles['event-card']} id="sih2026" style={{ border: '2px solid #22c55e', boxShadow: '0 8px 30px rgba(34, 197, 94, 0.2)' }}>
							<img
								src="/images/poster.jpg"
								alt="Smart India Hackathon 2026"
								style={{ width: '100%', height: '200px', objectFit: 'cover' }}
								onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=SIH+2026'; }}
							/>
							<div className={styles['event-body']}>
								<div className={styles['date-badge']} style={{ background: '#22c55e' }}>
									<span className={styles['date-month']}>NOW</span>
									<span className={styles['date-day']}>LIVE</span>
								</div>
								<div className={styles['event-content']}>
									<h3 className={styles['event-title']} style={{ color: 'var(--navy)' }}>Smart India Hackathon 2026</h3>
									<div className={styles['event-details']}>
										<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> 24/7</span>
										<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> VVIT Campus</span>
									</div>
									<p className={styles['event-desc']}>currently onging is SIH 2026. Participate and showcase your innovative skills! Join students nationwide in tackling real-world challenges.</p>
									<span className={`${styles['status-tag']}`} style={{ background: '#dcfce7', color: '#166534' }}>Ongoing</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="past">
					<div className={styles['section-header']}>
						<h2>Past Events</h2>
						<div className={styles['section-line']}></div>
					</div>
					<div className={styles['events-grid']}>
						{/* Event cards from events.html */}
						{eventsData.length > 0 ? (
							eventsData.map((evt, idx) => (
								<div className={styles['event-card']} key={evt.id || idx}>
									{evt.image && (
										<img
											src={evt.image}
											alt={evt.title}
											style={{ width: '100%', height: '200px', objectFit: 'cover' }}
										/>
									)}
									<div className={styles['event-body']}>
										<div className={styles['date-badge']} style={{ background: 'var(--orange)' }}>
											<span className={styles['date-month']}>{new Date(evt.date).toLocaleString('default', { month: 'short' }).toUpperCase() || 'DEC'}</span>
											<span className={styles['date-day']}>{new Date(evt.date).getDate() || '21'}</span>
										</div>
										<div className={styles['event-content']}>
											<h3 className={styles['event-title']} style={{ color: 'var(--navy)' }}>{evt.title}</h3>
											<div className={styles['event-details']}>
												<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> {evt.time}</span>
												<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> {evt.location}</span>
											</div>
											<p className={styles['event-desc']}>{evt.description}</p>
											<span className={`${styles['status-tag']} ${styles['status-completed']}`}>{evt.category || 'Completed'}</span>
										</div>
									</div>
								</div>
							))
						) : (
							<div style={{ textAlign: 'center', width: '100%', padding: '40px', color: '#666' }}>
								{loading ? <span>Loading Real-time Events... <i className="fa-solid fa-circle-notch fa-spin"></i></span> : "No events scheduled at the moment."}
							</div>
						)}
					</div>
				</section>
			</main>


		</div>
	);
}

export default Events;
