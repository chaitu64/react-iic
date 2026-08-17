import React, { useState, useEffect } from 'react';
import styles from './Events.module.css';

const TEMPORARY_IMAGES = [
	"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
	"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
	"https://images.unsplash.com/photo-1515187029136-1c3905436df7?auto=format&fit=crop&q=80&w=800",
	"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
];

const DEFAULT_EVENTS = [
	{
		id: '1',
		title: 'Intra Institutional startup competition',
		date: '2026-07-15',
		time: '10:00 AM',
		location: 'Main Auditorium',
		description: 'Institutional startup competition for students of VVITU',
		category: 'Bootcamp',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.17%20PM%20(1).jpeg'
	},
	{
		id: '2',
		title: 'SIH 2024',
		date: '2024-09-06',
		time: '11:00 AM',
		location: 'Seminar Hall B',
		description: 'Smart India Hackathon 2024',
		category: 'Seminar',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.17%20PM.jpeg'
	},
	{
		id: '3',
		title: 'SIH 2025',
		date: '2025-09-19',
		time: '02:00 PM',
		location: 'Lab Complex 3',
		description: 'Smart India Hackathon 2025',
		category: 'Hackathon',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.18%20PM%20(1).jpeg'
	},
	{
		id: '4',
		title: 'Waste to Build',
		date: '2026-07-15',
		time: '09:00 AM',
		location: 'Computer Lab 1',
		description: 'Waste to Build is an event that focuses on sustainable development and innovation.',
		category: 'Workshop',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.18%20PM%20(2).jpeg'
	},
	{
		id: '5',
		title: 'Innvoate it',
		date: '2026-03-18',
		time: '01:30 PM',
		location: 'Main Auditorium',
		description: 'Innvoate it is an event that focuses on innovation and creativity.',
		category: 'Workshop',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.18%20PM%20(3).jpeg'
	},
	{
		id: '7',
		title: 'Tech mania',
		date: '2023-12-22',
		time: '03:00 PM',
		location: 'Seminar Hall A',
		description: 'Tech mania is an event that focuses on technology and innovation.',
		category: 'Workshop',
		image: 'https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/IICEvents/WhatsApp%20Image%202026-08-17%20at%2011.34.19%20PM.jpeg'
	}
];

function Events() {
	const [eventsData] = useState(DEFAULT_EVENTS);
	const [loading] = useState(false);

	// Backend fetch removed in favor of static events data

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
								loading="lazy"
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
										<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> VVITU Campus</span>
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
									<img
										src={evt.image || TEMPORARY_IMAGES[idx % TEMPORARY_IMAGES.length]}
										alt={evt.title || "Past Event"}
										loading="lazy"
										style={{ width: '100%', height: '300px', objectFit: 'cover', objectPosition: 'center' }}
									/>
									<div className={styles['event-body']}>
										<div className={styles['event-content']}>
											<h3 className={styles['event-title']}>{evt.title}</h3>
											<div className={styles['event-details']}>
												<span className={styles['detail-item']}><i className={`fa-regular fa-clock`}></i> {evt.time || "10:00 AM"}</span>
												<span className={styles['detail-item']}><i className={`fa-solid fa-location-dot`}></i> {evt.location || "Main Auditorium"}</span>
											</div>
											<p className={styles['event-desc']}>{evt.description}</p>
											<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
												{evt.category && <span className={`${styles['status-tag']} ${styles['status-completed']}`} style={{ background: 'var(--glass-bg)', color: 'var(--navy)' }}>{evt.category}</span>}
												<span className={`${styles['status-tag']} ${styles['status-completed']}`}>Completed</span>
											</div>
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
