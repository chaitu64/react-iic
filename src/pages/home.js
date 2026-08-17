import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function AnimatedTriangle({ src, alt }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, margin: "100px 0px" });
	const slices = 5; // Divide the image into 5 horizontal strips

	return (
		<div ref={ref} style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 4px 24px 0 rgba(46,42,143,0.08)', margin: '0 auto', display: 'block' }}>
			{/* Hidden base image to establish natural sizing and aspect ratio */}
			<img src={src} alt={alt} className={styles['animated-base']} style={{ width: '100%', height: 'auto', display: 'block', opacity: 0 }} />

			{/* Slices dropping in sequentially */}
			{Array.from({ length: slices }).map((_, i) => {
				const currentTop = (i / slices) * 100;
				const currentBottom = ((i + 1) / slices) * 100;

				return (
					<motion.img
						key={i}
						src={src}
						alt=""
						initial={{ opacity: 0, y: -40 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.4,
							delay: i * 0.1,
							ease: "easeOut"
						}}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							clipPath: `polygon(0% ${currentTop}%, 100% ${currentTop}%, 100% ${currentBottom}%, 0% ${currentBottom}%)`,
							willChange: 'transform, opacity',
							boxShadow: 'none',
							borderRadius: '0px'
						}}
					/>
				);
			})}
		</div>
	);
}



function AnimatedSection({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, margin: "50px 0px" });

	return (
		<motion.div
			ref={ref}
			className={className || undefined}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.4, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}

function Home() {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		// Show popup on every enter/refresh
		setShowPopup(true);
	}, []);

	useEffect(() => {
		if (showPopup) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [showPopup]);

	return (
		<div className={styles.wrap}>

			{showPopup && createPortal(
				<div className={styles['popup-overlay']} onClick={() => setShowPopup(false)}>
					<div className={styles['popup-content']} onClick={(e) => e.stopPropagation()}>
						<button className={styles['popup-close']} onClick={() => setShowPopup(false)}>×</button>
						<span className={styles['popup-badge']}>Ongoing Now</span>
						<h2 className={styles['popup-title']}>Smart India Hackathon 2026</h2>
						<img src="/images/poster.jpg" alt="SIH 2026" className={styles['popup-image']} onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=SIH+2026'; }} />
						<p className={styles['popup-desc']}>currently onging is SIH 2026. Participate and showcase your innovative skills!</p>
						<Link to="/events#sih2026" className={styles['popup-cta']} onClick={() => setShowPopup(false)}>
							View Event Details
						</Link>
					</div>
				</div>,
				document.body
			)}

			<section className={styles.hero} aria-label="Welcome to VVIT Innovation Council">
				<h1>Igniting Innovation at VVIT</h1>
				<p className={styles.subtitle}>
					Empowering students to transform ideas into reality. Join a vibrant community of creators, entrepreneurs, and problem-solvers shaping the future through technology and design.
				</p>

				<div className={styles['cta-group']}>
					<Link to="/events" className={styles.cta} aria-label="Explore Events">Explore Events</Link>
					<Link to="/contact" className={`${styles.cta} ${styles['cta-secondary']}`} aria-label="Join IIC">Join IIC</Link>
				</div>
			</section>

			<AnimatedSection className={styles['activities-strip']}>
				<h2 className={styles['activities-title']}><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Key Activities of IIC</Link></h2>
				<div className={styles['activities-row']}>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-clipboard-check`}></i></div>
						<div className={styles['act-label']}>Workshops</div>
					</Link>
					<Link to="/teams" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-person-rays`}></i></div>
						<div className={styles['act-label']}>Mentoring</div>
					</Link>
					<Link to="/events" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-lightbulb`}></i></div>
						<div className={styles['act-label']}>Idea Competitions</div>
					</Link>
					<Link to="/events" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-flask`}></i></div>
						<div className={styles['act-label']}>Hackathons</div>
					</Link>
					<Link to="/teams" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-users`}></i></div>
						<div className={styles['act-label']}>Team Building</div>
					</Link>
				</div>
			</AnimatedSection>

			<div className={styles.divider} role="separator" aria-hidden="true"></div>

			<AnimatedSection className={styles.about} id="about">
				<div className={styles['about-img']}>
					<img src="/images/IIC-Guided-Activities.png" alt="IIC Guided Activities Pyramid" />
				</div>
				<div className={styles['about-content']}>
					<div className={styles['about-label']}>Who We Are</div>
					<h2 id="about-title">A Catalyst for Creative Minds</h2>
					<p>The Institutions Innovation Council (IIC) is an initiative of the Ministry of Education (MoE), Government of India, launched in collaboration with the All India Council for Technical Education (AICTE) in 2018. Its aim is to systematically cultivate a culture of innovation and entrepreneurship within India's Higher Education Institutions (HEIs)</p>
					<p>We foster creativity, encourage experimentation, and support students in their journey from ideation to implementation.</p>
					<p>Our council organizes workshops, competitions, and mentoring sessions to nurture talent and drive impactful change.</p>
					<Link to="/teams" className={styles['cta-secondary']} style={{ padding: '10px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>Meet Our Team</Link>
				</div>
			</AnimatedSection>

			<AnimatedSection className={styles['impact-section']}>
				<div className={styles['impact-grid']}>
					<div className={styles['impact-item']}>
						<h3>500+</h3>
						<p>Students Impacted</p>
					</div>
					<div className={styles['impact-item']}>
						<h3>30+</h3>
						<p>Events Conducted</p>
					</div>
					<div className={styles['impact-item']}>
						<h3>10+</h3>
						<p>Startups Incubated</p>
					</div>
					<div className={styles['impact-item']}>
						<h3>5+</h3>
						<p>National Awards</p>
					</div>
				</div>
			</AnimatedSection>

			{/* Centered wide images */}
			<div className={styles['about-wide-image-center']}>
				<div className={styles['about-wide-image']}>
					<img src="/images/policy-image.png" alt="Policy Approach & Action Plan" style={{ imageRendering: 'high-quality', filter: 'contrast(1.05) saturate(1.05)' }} />
				</div>
			</div>
			<div className={styles['about-wide-image-center']}>
				<div className={styles['about-wide-image']}>
					<AnimatedTriangle src="/images/triangle.jpg" alt="National Innovation Contest" />
				</div>
			</div>


		</div>
	);
}

export default Home;