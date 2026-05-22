import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
function About() {
	return (
		<div className="wrap">
			<header>
				<div className="header-inner">
					<div className="brand">
						<img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
						<span>VVIT</span>
					</div>
					<nav id="main-nav">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
						<Link to="/calender">Calendar</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/teams">Teams</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/about" className="active">About</Link>
					</nav>
				</div>
			</header>
			<section className="page-hero">
				<h1>About VVIT IIC</h1>
				<p>Fostering a culture of innovation and entrepreneurship at Vasireddy Venkatadri Institute of Technology through comprehensive programs, world-class infrastructure, and strategic partnerships.</p>
			</section>
			<section className="content-section">
				<h2 className="section-title">Our Mission & Vision</h2>
				<div className="info-grid">
					<div className="info-card">
						<h3><span className="icon">V</span> Vision</h3>
						<p className="text-block">To become a resourceful Venture Development Centre by supporting and assisting new-age innovators and entrepreneurial talents among the student community.</p>
					</div>
					<div className="info-card">
						<h3><span className="icon">M</span> Mission</h3>
						<ul>
							<li>Establishing Venture Development Centre with Pre-Incubation facilities</li>
							<li>Building contacts with Incubation Centers nationwide</li>
							<li>Creating sustainable Innovation, R&D, and Engineering ecosystem</li>
							<li>Aligning with the 'Startup India' flagship initiative</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="content-section" style={{background:'linear-gradient(135deg,rgba(107,91,168,0.05),rgba(244,162,56,0.03))',padding:'60px 40px',margin:0}}>
				<h2 className="section-title">Our Achievements</h2>
				<div className="stats-grid">
					<div className="stat-card">
						<div className="stat-number">Band-A</div>
						<div className="stat-label">ARIIA Ranking 2020</div>
					</div>
					<div className="stat-card">
						<div className="stat-number">15+</div>
						<div className="stat-label">State-of-the-art Labs</div>
					</div>
					<div className="stat-card">
						<div className="stat-number">690+</div>
						<div className="stat-label">Journal Papers</div>
					</div>
					<div className="stat-card">
						<div className="stat-number">13</div>
						<div className="stat-label">Patents Published</div>
					</div>
				</div>
			</section>
			<section className="content-section">
				<h2 className="section-title">Key Objectives</h2>
				<div className="info-grid">
					<div className="info-card">
						<h3><span className="icon">🚀</span> Incubation</h3>
						<ul>
							<li>Establish Technology/Business Incubator/Accelerator</li>
							<li>Facilitate Venture Capital funding of minimum INR 1 Crore</li>
							<li>Support pre-incubation with networking capabilities</li>
						</ul>
					</div>
					<div className="info-card">
						<h3><span className="icon">💡</span> Innovation</h3>
						<ul>
							<li>Incubate 10+ innovative technology solutions</li>
							<li>Focus on Healthcare, Agriculture, Environment, Education</li>
							<li>Encourage prototype development and testing</li>
						</ul>
					</div>
					<div className="info-card">
						<h3><span className="icon">💰</span> Funding Support</h3>
						<ul>
							<li>Seed Grant up to INR 12 Lakhs per department</li>
							<li>Support for idea validation and market research</li>
							<li>Merit-based selection through Implementation Committee</li>
						</ul>
					</div>
					<div className="info-card">
						<h3><span className="icon">🎓</span> Student Programs</h3>
						<ul>
							<li>Academic credits for entrepreneurship courses</li>
							<li>Mandatory apprenticeship schemes</li>
							<li>Semester breaks for startup development</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="content-section">
				<h2 className="section-title">World-Class Infrastructure</h2>
				<p className="text-block">VVIT has established cutting-edge facilities to nurture innovation and provide hands-on experience with the latest technologies.</p>
				<div className="timeline">
					<div className="timeline-item">
						<div className="timeline-dot"></div>
						<div className="timeline-content">
							<div className="timeline-year">2016</div>
							<p className="timeline-text"><strong>Siemens Centre of Excellence</strong> — Established under MoU with APSSDC, featuring over 15 state-of-the-art laboratories for advanced engineering education.</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-dot"></div>
						<div className="timeline-content">
							<div className="timeline-year">2018</div>
							<p className="timeline-text"><strong>Google Code Labs</strong> — First-ever Google Developers CodeLabs in India, built with Google's design standards to promote coding excellence.</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-dot"></div>
						<div className="timeline-content">
							<div className="timeline-year">2020</div>
							<p className="timeline-text"><strong>Pre-Incubation Center</strong> — Dedicated facilities for nurturing student projects across healthcare, agriculture, clean environment, and education sectors.</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-dot"></div>
						<div className="timeline-content">
							<div className="timeline-year">Ongoing</div>
							<p className="timeline-text"><strong>Dassault Systems Lab & CM Skill Center</strong> — Advanced design, simulation facilities, and skill development programs for competitive advantage.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="content-section" style={{background:'linear-gradient(135deg,rgba(46,42,143,0.03),rgba(107,91,168,0.02))',padding:'60px 40px',margin:0}}>
				<h2 className="section-title">Strategic Partnerships</h2>
				<p className="text-block">We collaborate with leading institutions and organizations to provide our students with world-class opportunities and resources.</p>
				<div className="partners-grid">
					<div className="partner-card"><div className="partner-name">Google Inc. USA</div></div>
					<div className="partner-card"><div className="partner-name">Siemens India</div></div>
					<div className="partner-card"><div className="partner-name">Stanford University</div></div>
					<div className="partner-card"><div className="partner-name">ISB Hyderabad</div></div>
					<div className="partner-card"><div className="partner-name">Northeastern University</div></div>
					<div className="partner-card"><div className="partner-name">APSSDC</div></div>
					<div className="partner-card"><div className="partner-name">JNTUK</div></div>
					<div className="partner-card"><div className="partner-name">Dassault Systems</div></div>
				</div>
			</section>
			<section className="content-section">
				<h2 className="section-title">Recognition & Rankings</h2>
				<div className="text-block">
					<p>VVIT has achieved significant recognition for its innovation efforts at both national and state levels. The institute secured a prestigious position in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) 2020, ranking in Band-A (6th-25th position) among private self-financed colleges across India.</p>
					<p style={{marginTop:16}}>Out of 674 institutions that participated nationally, only 17 institutions from Andhra Pradesh received this honor, with VVIT being one of only three colleges from the state in its category. This recognition validates our commitment to fostering innovation and entrepreneurship.</p>
				</div>
			</section>
			<footer style={{background:'#111', color:'#fff', padding:'60px 0 0 0', marginTop:0}}>
				<div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
					<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'40px 24px'}}>
						<div>
							<h4 style={{fontSize:'20px',fontWeight:700,marginBottom:'16px'}}>VVIT IIC</h4>
							<p style={{color:'#bbb',lineHeight:1.7,fontSize:'15px'}}>Institution's Innovation Council (IIC) promotes innovation and entrepreneurship within academic institutions.</p>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Quick Links</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="/" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Home</a></li>
								<li><a href="/events" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Events</a></li>
								<li><a href="/about" style={{color:'#bbb',display:'block',padding:'4px 0'}}>About Us</a></li>
							</ul>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Resources</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="#" style={{color:'#bbb',display:'block',padding:'4px 0'}}>YUKTI</a></li>
								<li><a href="#" style={{color:'#bbb',display:'block',padding:'4px 0'}}>MIC</a></li>
							</ul>
						</div>
						<div>
							<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Contact</h5>
							<ul style={{listStyle:'none',padding:0,margin:0}}>
								<li><a href="#contact" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Contact Us</a></li>
								<li><a href="#" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Team</a></li>
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

export default About;
