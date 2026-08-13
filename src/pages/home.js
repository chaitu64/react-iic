import styles from './Home.module.css';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div className={styles.wrap}>


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

			<section className={styles['activities-strip']}>
				<h2 className={styles['activities-title']}><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Key Activities of IIC</Link></h2>
				<div className={styles['activities-row']}>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-clipboard-check`}></i></div>
						<div className={styles['act-label']}>Workshops</div>
					</Link>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-person-rays`}></i></div>
						<div className={styles['act-label']}>Mentoring</div>
					</Link>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-lightbulb`}></i></div>
						<div className={styles['act-label']}>Idea Competitions</div>
					</Link>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-flask`}></i></div>
						<div className={styles['act-label']}>Hackathons</div>
					</Link>
					<Link to="/gallery" className={styles['activity-item']} style={{ textDecoration: 'none' }}>
						<div className={styles['act-icon']}><i className={`fa-solid fa-users`}></i></div>
						<div className={styles['act-label']}>Team Building</div>
					</Link>
				</div>
			</section>

			<div className={styles.divider} role="separator" aria-hidden="true"></div>

			<section className={styles.about} id="about">
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
			</section>

			<section className={styles['impact-section']}>
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
			</section>

			{/* Centered wide images */}
			<div className={styles['about-wide-image-center']}>
				<div className={styles['about-wide-image']}>
					<img src="/images/policy-image.png" alt="Policy Approach & Action Plan" />
				</div>
			</div>
			<div className={styles['about-wide-image-center']}>
				<div className={styles['about-wide-image']}>
					<img src="/images/triangle.jpg" alt="National Innovation Contest" />
				</div>
			</div>


		</div>
	);
}

export default Home;