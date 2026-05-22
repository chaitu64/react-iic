import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
function Contact() {
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
				<div className="hero-contact">
					<h1>Get In Touch</h1>
					<p>Have questions about IIC? Want to collaborate or participate in our programs? We'd love to hear from you. Reach out through any channel below.</p>
				</div>

				<div className="contact-container">
					<div className="contact-info">
						<h2>Contact Information</h2>
						<div className="info-group">
							<div className="info-label">Email</div>
							<div className="info-content">
								<a href="mailto:iicvvit@vvit.net">iicvvit@vvit.net</a><br />
							</div>
						</div>
						<div className="info-group">
							<div className="info-label">Phone</div>
							<div className="info-content">
								<a href="tel:+919392042226">+91 93920 42226</a><br />
								<a href="tel:+919490343393">+91 94903 43393</a>
							</div>
						</div>
						<div className="info-group">
							<div className="info-label">Office Location</div>
							<div className="info-content">
								Institution's Innovation Council<br />
								VVIT University<br />
								Namburu<br />
								India
							</div>
						</div>
						<div className="info-group">
							<div className="info-label">Follow Us</div>
							<div className="social-links">
								<a href="https://www.linkedin.com/in/iic-vvitu-624755321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link linkedin" aria-label="LinkedIn" target="_blank" rel="noopener">
									<i className="fab fa-linkedin-in"></i>
								</a>
								<a href="https://www.instagram.com/iic_vvitu/" className="social-link instagram" aria-label="Instagram" target="_blank" rel="noopener">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
						<div className="info-group">
							<div className="info-label">Quick Links</div>
							<div className="info-content">
								<a href="/events">View Events</a><br />
								<a href="/gallery">Event Gallery</a><br />
								<a href="/teams">Meet the Team</a>
							</div>
						</div>
					</div>
					<div className="map-section">
						<div className="map-title">
							<h2>Visit Us</h2>
							<p>Located at VVIT University in Namburu, our innovation hub is easily accessible and equipped with modern facilities for collaboration and innovation.</p>
						</div>
						<div className="map-container">
							<iframe
								src="https://maps.google.com/maps?q=Vasireddy%20Venkatadri%20Institute%20of%20Technology%2C%20Nambur&t=&z=15&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{border:0}}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="VVIT University Map"
							></iframe>
						</div>
					</div>
				</div>
			</main>

			<footer>
				<div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
					<div className="footer-grid">
						<div>
							<h4 style={{fontSize:'20px',fontWeight:'700',marginBottom:'16px'}}>VVIT IIC</h4>
							<p style={{color:'#bbb',lineHeight:'1.7',fontSize:'15px'}}>Institution's Innovation Council (IIC) promotes innovation and entrepreneurship within academic institutions.</p>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:'600',marginBottom:'12px'}}>Quick Links</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="/" style={{color:'#bbb',display:'block',padding:'4px 0',textDecoration:'none'}}>Home</a></li>
								<li><a href="/events" style={{color:'#bbb',display:'block',padding:'4px 0',textDecoration:'none'}}>Events</a></li>
								<li><a href="/gallery" style={{color:'#bbb',display:'block',padding:'4px 0',textDecoration:'none'}}>Gallery</a></li>
								<li><a href="/teams" style={{color:'#bbb',display:'block',padding:'4px 0',textDecoration:'none'}}>Teams</a></li>
								<li><a href="/contact" style={{color:'#bbb',display:'block',padding:'4px 0',textDecoration:'none'}}>Contact</a></li>
							</ul>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:'600',marginBottom:'12px'}}>Resources</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="https://yukti.mic.gov.in/" target="_blank" rel="noopener noreferrer" style={{color:'#bbb',display:'block',padding:'4px 0'}}>YUKTI</a></li>
								<li><a href="https://mic.gov.in/" target="_blank" rel="noopener noreferrer" style={{color:'#bbb',display:'block',padding:'4px 0'}}>MIC</a></li>
							</ul>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:'600',marginBottom:'12px'}}>Contact</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="/contact" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Contact Us</a></li>
								<li><a href="/teams" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Teams</a></li>
							</ul>
						</div>
					</div>
					<hr style={{border:0,borderTop:'1px solid #222',margin:'40px 0 24px 0'}} />
					<p style={{color:'#888',fontSize:'14px',margin:'32px 0 0 0'}}>&copy; {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}

export default Contact;
