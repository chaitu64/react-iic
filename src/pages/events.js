import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
function Events() {
	return (
		<div className="wrap">
			<header>
				<div className="header-inner">
					<div className="brand">
						<img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
						<span>VVIT</span>
					</div>
					<button className="nav-toggle" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false">
						<i className="fa fa-bars"></i>
					</button>
					<nav id="main-nav">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
						<Link to="/calender">Calendar</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
			</header>

			<main>
				<div className="hero-events">
					<h1>Events Schedule</h1>
					<p>Stay updated with our latest workshops, hackathons, and innovation sessions. Mark your calendars and join the innovation journey.</p>
				</div>

				<section id="past">
					<div className="section-header">
						<h2>Past Events</h2>
						<div className="section-line"></div>
					</div>
					<div className="events-grid">
						{/* Event cards from events.html */}
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">DEC</span>
								<span className="date-day">21</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>LOGO FORGE: Design Challenge</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> 9.30-12.30</span>
									<span className="detail-item"><i className="fa-solid fa-location-dot"></i> B-206</span>
								</div>
								<p className="event-desc">Step into the world of imagination! Transform real company logos into fresh, creative designs. Showcase your visual branding skills and originality in this arena.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">DEC</span>
								<span className="date-day">21</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>BRAIN BUZZ: Tech Quiz</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> 1.30 - 3.30 </span>
									<span className="detail-item"><i className="fa-solid fa-location-dot"></i> B-206</span>
								</div>
								<p className="event-desc">An electrifying quiz testing intelligence, speed, and problem-solving. A mix of logical, analytical, and general knowledge questions to ignite your curiosity.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">DEC</span>
								<span className="date-day">22</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Code Buzz: Coding Challenge</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> 10:00 AM - 2:00 PM</span>
									<span className="detail-item"><i className="fa-solid fa-location-dot"></i> Computer Lab</span>
								</div>
								<p className="event-desc">Dive into the world of coding! Solve challenging problems and showcase your programming skills in this exciting coding competition.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">DEC</span>
								<span className="date-day">22</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Idea Star: Innovation Pitch</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> 3:00 PM - 5:00 PM</span>
									<span className="detail-item"><i className="fa-solid fa-location-dot"></i> Seminar Hall</span>
								</div>
								<p className="event-desc">Pitch your innovative ideas to a panel of experts! This event is designed to nurture creativity and entrepreneurial thinking among students.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">MAY</span>
								<span className="date-day">25</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Incubation Visit - Vignan TBI</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> Completed</span>
								</div>
								<p className="event-desc">VVIT IIC organized a field visit to Vignan TBI, providing students with a practical understanding of the incubation process. The session focused on bridging the gap between academic learning and real-world startup strategies.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">DEC</span>
								<span className="date-day">19</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Incubation Visit - SRM-AP</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> Completed</span>
								</div>
								<p className="event-desc">IIC members had the privilege to explore the incubation center at SRM-AP University, learning about the entrepreneurship ecosystem and startup support mechanisms.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">OCT</span>
								<span className="date-day">15</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>INNOVATE-IT Challenge</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> Completed</span>
								</div>
								<p className="event-desc">Held on October 15th, 'INNOVATE-IT' was a dedicated ideation platform designed to foster the entrepreneurial spirit. Student teams of 2-3 members showcased their problem-solving skills, presenting unique concepts under the theme 'Ignite Ideas, Inspire Action.'</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">SEP</span>
								<span className="date-day">24</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Smart India Hackathon 2025</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> Completed</span>
								</div>
								<p className="event-desc">The Institution's Innovation Council at VVIT University successfully organized Smart India Hackathon 2025. This national-level event provided a platform for students to demonstrate their technical prowess and entrepreneurial spirit.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
						<div className="event-card">
							<div className="date-badge" style={{background: 'var(--muted)'}}>
								<span className="date-month">NOV</span>
								<span className="date-day">17</span>
							</div>
							<div className="event-content">
								<h3 className="event-title" style={{color: 'var(--muted)'}}>Tech Talks</h3>
								<div className="event-details">
									<span className="detail-item"><i className="fa-regular fa-clock"></i> Completed</span>
								</div>
								<p className="event-desc">From student to founder! our students received invaluable mentorship from the host MR.Dileep Sajja who broke down the importance of entrepreneurship and shared the essential strategies needed to build a business from scratch.</p>
								<span className="status-tag status-completed">Completed</span>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="footer">
				<div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
					<div className="footer-grid">
						<div>
							<h4>VVIT IIC</h4>
							<p>Institution's Innovation Council (IIC) promotes innovation and entrepreneurship within academic institutions.</p>
						</div>
						<div>
							<h5>Quick Links</h5>
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/events">Events</a></li>
								<li><a href="/teams">Teams</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</div>
						<div>
							<h5>Resources</h5>
							<ul>
								<li><a href="https://yukti.mic.gov.in/" target="_blank" rel="noopener noreferrer">YUKTI</a></li>
								<li><a href="https://mic.gov.in/" target="_blank" rel="noopener noreferrer">MIC</a></li>
							</ul>
						</div>
						<div>
							<h5>Contact</h5>
							<ul>
								<li><a href="/contact">Contact Us</a></li>
								<li><a href="/teams">Teams</a></li>
							</ul>
						</div>
					</div>
					<hr />
					<p>&copy; {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}

export default Events;
