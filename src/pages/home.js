import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
	return (
		<div className="wrap">
			<header>
				<div className="header-inner">
					<div className="brand">
						<img src="\images\VVITULogo_Final.png" alt="VVIT Logo" />
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

			<section className="hero" aria-label="Welcome to VVIT Innovation Council">
				<h1>Igniting Innovation at VVIT</h1>
				<p className="subtitle">
					Empowering students to transform ideas into reality. Join a vibrant community of creators, entrepreneurs, and problem-solvers shaping the future through technology and design.
				</p>
					<div className="cta-group">
						<Link to="/events" className="cta" aria-label="Explore Events">Explore Events</Link>
						<Link to="/contact" className="cta cta-secondary" aria-label="Join IIC">Join IIC</Link>
					</div>
			</section>

			<section className="activities-strip">
				  <h2 className="activities-title"><Link to="/gallery" style={{color:'inherit',textDecoration:'none'}}>Key Activities of IIC</Link></h2>
				<div className="activities-row">
					<Link to="/gallery" className="activity-item" style={{textDecoration:'none'}}>
						<div className="act-icon"><i className="fa-solid fa-clipboard-check"></i></div>
						<div className="act-label">Workshops</div>
					</Link>
					<Link to="/gallery" className="activity-item" style={{textDecoration:'none'}}>
						<div className="act-icon"><i className="fa-solid fa-person-rays"></i></div>
						<div className="act-label">Mentoring</div>
					</Link>
					<Link to="/gallery" className="activity-item" style={{textDecoration:'none'}}>
						<div className="act-icon"><i className="fa-solid fa-lightbulb"></i></div>
						<div className="act-label">Idea Competitions</div>
					</Link>
					<Link to="/gallery" className="activity-item" style={{textDecoration:'none'}}>
						<div className="act-icon"><i className="fa-solid fa-flask"></i></div>
						<div className="act-label">Hackathons</div>
					</Link>
					<Link to="/gallery" className="activity-item" style={{textDecoration:'none'}}>
						<div className="act-icon"><i className="fa-solid fa-users"></i></div>
						<div className="act-label">Team Building</div>
					</Link>
				</div>
			</section>

			<div className="divider" role="separator" aria-hidden="true"></div>

			<section className="about" id="about">
				<div className="about-img">
					<img src="/images/IIC-Guided-Activities.png" alt="IIC Guided Activities Pyramid" />
				</div>
				<div className="about-content">
					<div className="about-label">Who We Are</div>
					<h2 id="about-title">A Catalyst for Creative Minds</h2>
					<p>The Institutions Innovation Council (IIC) is an initiative of the Ministry of Education (MoE), Government of India, launched in collaboration with the All India Council for Technical Education (AICTE) in 2018. Its aim is to systematically cultivate a culture of innovation and entrepreneurship within India's Higher Education Institutions (HEIs)</p>
					<p>We foster creativity, encourage experimentation, and support students in their journey from ideation to implementation.</p>
					<p>Our council organizes workshops, competitions, and mentoring sessions to nurture talent and drive impactful change.</p>
					<a href="/teams" className="cta-secondary" style={{padding:'10px 24px',borderRadius:'50px',textDecoration:'none',fontWeight:600}}>Meet Our Team</a>
				</div>
			</section>

			<section className="impact-section">
				<div className="impact-grid">
					<div className="impact-item">
						<h3>500+</h3>
						<p>Students Impacted</p>
					</div>
					<div className="impact-item">
						<h3>30+</h3>
						<p>Events Conducted</p>
					</div>
					<div className="impact-item">
						<h3>10+</h3>
						<p>Startups Incubated</p>
					</div>
					<div className="impact-item">
						<h3>5+</h3>
						<p>National Awards</p>
					</div>
				</div>
			</section>

			{/* Centered wide images */}
			<div className="about-wide-image-center">
				<div className="about-wide-image">
					<img src="/images/policy-image.png" alt="Policy Approach & Action Plan" />
				</div>
			</div>
			<div className="about-wide-image-center">
				<div className="about-wide-image">
					<img src="/images/triangle.jpg" alt="National Innovation Contest" />
				</div>
			</div>

			<footer style={{background:'#111',color:'#fff',padding:'60px 0 0 0',marginTop:0}}>
				<div style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
					<div className="footer-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'40px 24px'}}>
						{/* Footer content can be added here */}
					</div>
					<hr style={{border:0,borderTop:'1px solid #222',margin:'40px 0 24px 0'}} />
					<p style={{color:'#888',fontSize:'14px',margin:'32px 0 0 0'}}>&copy; {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}

export default Home;