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
						{eventsData.length > 0 ? (
							eventsData.map((evt, idx) => (
								<div className={styles['event-card']} key={evt.id || idx}>
									{evt.image && (
										<img
											src={evt.image}
											alt={evt.title}
											style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
										/>
									)}
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
