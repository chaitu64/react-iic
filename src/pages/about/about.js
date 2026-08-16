import React from "react";

import styles from './About.module.css';
function About() {
	return (
		<div className={styles.wrap}>

			<section className={styles['page-hero']}>
				<h1>About VVIT IIC</h1>
				<p>Fostering a culture of innovation and entrepreneurship at Vasireddy Venkatadri Institute of Technology through comprehensive programs, world-class infrastructure, and strategic partnerships.</p>
			</section>
			<section className={styles['content-section']}>
				<h2 className={styles['section-title']}>Our Mission & Vision</h2>
				<div className={styles['info-grid']}>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>V</span> Vision</h3>
						<p className={styles['text-block']}>To become a resourceful Venture Development Centre by supporting and assisting new-age innovators and entrepreneurial talents among the student community.</p>
					</div>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>M</span> Mission</h3>
						<ul>
							<li>Establishing Venture Development Centre with Pre-Incubation facilities</li>
							<li>Building contacts with Incubation Centers nationwide</li>
							<li>Creating sustainable Innovation, R&D, and Engineering ecosystem</li>
							<li>Aligning with the 'Startup India' flagship initiative</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={styles['content-section']} style={{ background: 'linear-gradient(135deg,rgba(107,91,168,0.05),rgba(244,162,56,0.03))', padding: '60px 40px', margin: 0 }}>
				<h2 className={styles['section-title']}>Our Achievements</h2>
				<div className={styles['stats-grid']}>
					<div className={styles['stat-card']}>
						<div className={styles['stat-number']}>Band-A</div>
						<div className={styles['stat-label']}>ARIIA Ranking 2020</div>
					</div>
					<div className={styles['stat-card']}>
						<div className={styles['stat-number']}>15+</div>
						<div className={styles['stat-label']}>State-of-the-art Labs</div>
					</div>
					<div className={styles['stat-card']}>
						<div className={styles['stat-number']}>690+</div>
						<div className={styles['stat-label']}>Journal Papers</div>
					</div>
					<div className={styles['stat-card']}>
						<div className={styles['stat-number']}>13</div>
						<div className={styles['stat-label']}>Patents Published</div>
					</div>
				</div>
			</section>
			<section className={styles['content-section']}>
				<h2 className={styles['section-title']}>Key Objectives</h2>
				<div className={styles['info-grid']}>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>🚀</span> Incubation</h3>
						<ul>
							<li>Establish Technology/Business Incubator/Accelerator</li>
							<li>Facilitate Venture Capital funding of minimum INR 1 Crore</li>
							<li>Support pre-incubation with networking capabilities</li>
						</ul>
					</div>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>💡</span> Innovation</h3>
						<ul>
							<li>Incubate 10+ innovative technology solutions</li>
							<li>Focus on Healthcare, Agriculture, Environment, Education</li>
							<li>Encourage prototype development and testing</li>
						</ul>
					</div>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>💰</span> Funding Support</h3>
						<ul>
							<li>Seed Grant up to INR 12 Lakhs per department</li>
							<li>Support for idea validation and market research</li>
							<li>Merit-based selection through Implementation Committee</li>
						</ul>
					</div>
					<div className={styles['info-card']}>
						<h3><span className={styles.icon}>🎓</span> Student Programs</h3>
						<ul>
							<li>Academic credits for entrepreneurship courses</li>
							<li>Mandatory apprenticeship schemes</li>
							<li>Semester breaks for startup development</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={styles['content-section']}>
				<h2 className={styles['section-title']}>World-Class Infrastructure</h2>
				<p className={styles['text-block']}>VVIT has established cutting-edge facilities to nurture innovation and provide hands-on experience with the latest technologies.</p>
				<div className={styles.timeline}>
					<div className={styles['timeline-item']}>
						<div className={styles['timeline-dot']}></div>
						<div className={styles['timeline-content']}>
							<div className={styles['timeline-year']}>2016</div>
							<p className={styles['timeline-text']}><strong>Siemens Centre of Excellence</strong> — Established under MoU with APSSDC, featuring over 15 state-of-the-art laboratories for advanced engineering education.</p>
						</div>
					</div>
					<div className={styles['timeline-item']}>
						<div className={styles['timeline-dot']}></div>
						<div className={styles['timeline-content']}>
							<div className={styles['timeline-year']}>2018</div>
							<p className={styles['timeline-text']}><strong>Google Code Labs</strong> — First-ever Google Developers CodeLabs in India, built with Google's design standards to promote coding excellence.</p>
						</div>
					</div>
					<div className={styles['timeline-item']}>
						<div className={styles['timeline-dot']}></div>
						<div className={styles['timeline-content']}>
							<div className={styles['timeline-year']}>2020</div>
							<p className={styles['timeline-text']}><strong>Pre-Incubation Center</strong> — Dedicated facilities for nurturing student projects across healthcare, agriculture, clean environment, and education sectors.</p>
						</div>
					</div>
					<div className={styles['timeline-item']}>
						<div className={styles['timeline-dot']}></div>
						<div className={styles['timeline-content']}>
							<div className={styles['timeline-year']}>Ongoing</div>
							<p className={styles['timeline-text']}><strong>Dassault Systems Lab & CM Skill Center</strong> — Advanced design, simulation facilities, and skill development programs for competitive advantage.</p>
						</div>
					</div>
				</div>
			</section>
			<section className={styles['content-section']} style={{ background: 'linear-gradient(135deg,rgba(46,42,143,0.03),rgba(107,91,168,0.02))', padding: '60px 40px', margin: 0 }}>
				<h2 className={styles['section-title']}>Strategic Partnerships</h2>
				<p className={styles['text-block']}>We collaborate with leading institutions and organizations to provide our students with world-class opportunities and resources.</p>
				<div className={styles['partners-grid']}>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>Google Inc. USA</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>Siemens India</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>Stanford University</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>ISB Hyderabad</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>Northeastern University</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>APSSDC</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>JNTUK</div></div>
					<div className={styles['partner-card']}><div className={styles['partner-name']}>Dassault Systems</div></div>
				</div>
			</section>
			<section className={styles['content-section']}>
				<h2 className={styles['section-title']}>Recognition & Rankings</h2>
				<div className={styles['text-block']}>
					<p>VVIT has achieved significant recognition for its innovation efforts at both national and state levels. The institute secured a prestigious position in the Atal Ranking of Institutions on Innovation Achievements (ARIIA) 2020, ranking in Band-A (6th-25th position) among private self-financed colleges across India.</p>
					<p style={{ marginTop: 16 }}>Out of 674 institutions that participated nationally, only 17 institutions from Andhra Pradesh received this honor, with VVIT being one of only three colleges from the state in its category. This recognition validates our commitment to fostering innovation and entrepreneurship.</p>
				</div>
			</section>

		</div>
	);
}

export default About;
