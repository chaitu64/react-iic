import React from 'react';
import { Link } from 'react-router-dom';
import './Calender.css';
function Calender() {
	return (
		<div className="wrap">
			<header>
				<div className="header-inner">
					<div className="brand">
						<img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
						<span>VVITU</span>
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
				<div className="hero-calendar">
					<h1>Event Calendar</h1>
					<p>Track all IIC events, workshops, bootcamps, and community gatherings. Plan your participation in upcoming innovation initiatives.</p>
				</div>
				<div className="calendar-placeholder">
					{/* Replace this with your interactive calendar component */}
					Calendar UI coming soon...
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
								<li><a href="/" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Home</a></li>
								<li><a href="/events" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Events</a></li>
								<li><a href="/teams" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Team</a></li>
								<li><a href="/contact" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Contact</a></li>
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
								<li><a href="/teams" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Team</a></li>
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

export default Calender;
