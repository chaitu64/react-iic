import React from "react";
import { Link } from "react-router-dom";
import "./Teams.css";

const teamData = {
	stats: { members: 35, departments: 7, events: 100 },
	team: [
		{
			section: "IIC Co-ordinators",
			icon: "🎓",
			description:
				"Our faculty coordinators provide academic guidance and institutional support, bridging the gap between innovation initiatives and curriculum integration. They ensure IIC's alignment with educational objectives while fostering an entrepreneurial ecosystem.",
			reverse: false,
			members: [
				{ name: "Dr. Y. Madhavi Rani", role: "Faculty Coordinator", bio: "Guides innovation and entrepreneurship initiatives.", initials: "YMR" },
				{ name: "Dr. A. Anil", role: "Faculty Coordinator", bio: "Supports curriculum integration and student mentorship.", initials: "AA" },
				{ name: "Dr. S. Suresh", role: "Faculty Coordinator", bio: "Facilitates institutional partnerships and R&D.", initials: "SS" }
			]
		},
		{
			section: "IIC Presidents",
			icon: "👑",
			description:
				"Student leaders who spearhead IIC activities and represent the innovation council. They coordinate between various teams, drive strategic initiatives, and ensure effective execution of all programs while maintaining a vibrant entrepreneurial culture on campus.",
			reverse: true,
			members: [
				{ name: "Pavan Kumar", role: "President", bio: "Leads council and strategic initiatives.", initials: "PK" },
				{ name: "Jaya Gopal", role: "President", bio: "Coordinates team activities and outreach.", initials: "JG" },
				{ name: "Sravani", role: "President", bio: "Ensures vibrant entrepreneurial culture.", initials: "S" }
			]
		},
		{
			section: "Public Relations",
			icon: "🤝",
			description:
				"Our PR team builds and maintains relationships with external stakeholders, media, industry partners, and alumni. They manage IIC's public image, coordinate outreach programs, and create strategic partnerships that enhance our institution's innovation ecosystem.",
			reverse: false,
			members: [
				{ name: "Pranav", role: "PR Lead", bio: "Manages public image and outreach.", initials: "PN" },
				{ name: "Jaya Gopal", role: "PR Member", bio: "Coordinates media and alumni relations.", initials: "JG" },
				{ name: "Bhavya", role: "PR Member", bio: "Supports stakeholder engagement.", initials: "BM" },
				{ name: "Sravani", role: "PR Member", bio: "Handles event communications.", initials: "S" },
				{ name: "Yashwanth", role: "PR Member", bio: "Creates strategic partnerships.", initials: "YU" },
				{ name: "Kiran", role: "PR Member", bio: "Manages outreach programs.", initials: "KN" }
			]
		},
		{
			section: "Web Designing",
			icon: "💻",
			description:
				"The web designing team develops and maintains IIC's digital infrastructure. They create user-friendly websites, design interfaces, implement features, ensure responsive design, and provide technical solutions that enhance online user experience and accessibility.",
			reverse: false,
			members: [
				{ name: "Chaitanya", role: "Web Lead", bio: "Develops and maintains digital infrastructure.", initials: "CC" },
				{ name: "Jaya Harsha", role: "Web Member", bio: "Designs interfaces and features.", initials: "JH" },
				{ name: "Sravani", role: "Web Member", bio: "Ensures responsive design.", initials: "S" },
				{ name: "Vamsi", role: "Web Member", bio: "Enhances user experience.", initials: "V" }
			]
		},
		{
			section: "Events",
			icon: "🎉",
			description:
				"The events team conceptualizes and executes all IIC programs including hackathons, workshops, competitions, and seminars. They handle logistics, vendor coordination, participant management, and ensure every event creates memorable learning experiences that inspire innovation.",
			reverse: true,
			members: [
				{ name: "Vamsi", role: "Events Lead", bio: "Conceptualizes and executes programs.", initials: "VC" },
				{ name: "Pavan Kumar", role: "Events Member", bio: "Handles logistics and coordination.", initials: "PK" },
				{ name: "Sravani", role: "Events Member", bio: "Manages participant experience.", initials: "SS" },
				{ name: "Vijay", role: "Events Member", bio: "Ensures memorable events.", initials: "VP" },
				{ name: "Chaitanya", role: "Events Member", bio: "Supports event planning.", initials: "CVB" }
			]
		}
	]
};

function Teams() {
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
					</nav>
				</div>
			</header>
			<main>
				<div className="hero-teams">
					<h1>IIC Teams 2025</h1>
					<p>Meet the passionate faculty and student teams driving innovation, entrepreneurship, and impactful events at VVIT IIC.</p>
					<div className="hero-stats">
						<div className="stat-item">
							<span className="stat-number">{teamData.stats.members}</span>
							<span className="stat-label">Team Members</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">{teamData.stats.departments}</span>
							<span className="stat-label">Departments</span>
						</div>
						<div className="stat-item">
							<span className="stat-number">{teamData.stats.events}+</span>
							<span className="stat-label">Events Organized</span>
						</div>
					</div>
				</div>
				{teamData.team.map((section, idx) => (
					<div className="team-section" key={section.section}>
						<div className={"section-intro" + (section.reverse ? " reverse" : "") }>
							<div className="section-icon">{section.icon}</div>
							<div className="section-text">
								<h2>{section.section}</h2>
								<p>{section.description}</p>
							</div>
						</div>
						<div className={section.section.includes("President") ? "team-grid leadership" : "team-grid"}>
							{section.members.map((member) => (
								<div className="member-card" key={member.name}>
									<div className="member-avatar">{member.initials}</div>
									<div className="member-name">{member.name}</div>
									<div className="member-role">{member.role}</div>
									<div className="member-bio">{member.bio}</div>
								</div>
							))}
						</div>
					</div>
				))}
			</main>
			<footer style={{background:'#111', color:'#fff', padding:'60px 0 0 0', marginTop:0}}>
				<div className="footer-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'40px 24px',maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
					<div>
						<h4 style={{fontSize:'20px',fontWeight:700,marginBottom:'16px'}}>VVIT IIC</h4>
						<p style={{color:'#bbb',lineHeight:1.7,fontSize:'15px'}}>Institution's Innovation Council (IIC) promotes innovation and entrepreneurship within academic institutions.</p>
					</div>
					<div>
						<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Quick Links</h5>
						<ul style={{listStyle:'none',padding:0,margin:0}}>
							<li><a href="/" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Home</a></li>
							<li><a href="/events" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Events</a></li>
							<li><a href="/gallery" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Gallery</a></li>
							<li><a href="/teams" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Teams</a></li>
							<li><a href="/contact" style={{color:'#bbb',display:'block',padding:'4px 0'}}>Contact</a></li>
						</ul>
					</div>
					<div>
						<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Resources</h5>
						<ul style={{listStyle:'none',padding:0,margin:0}}>
							<li><span style={{color:'#bbb',display:'block',padding:'4px 0'}}>Coming Soon</span></li>
						</ul>
					</div>
					<div>
						<h5 style={{fontSize:'15px',fontWeight:600,marginBottom:'12px'}}>Contact</h5>
						<ul style={{listStyle:'none',padding:0,margin:0}}>
							<li><span style={{color:'#bbb',display:'block',padding:'4px 0'}}>info@vvit.edu.in</span></li>
							<li><span style={{color:'#bbb',display:'block',padding:'4px 0'}}>+91 12345 67890</span></li>
						</ul>
					</div>
				</div>
				<hr style={{border:0,borderTop:'1px solid #222',margin:'40px 0 24px 0'}} />
				<p style={{color:'#888',fontSize:'14px',margin:'32px 0 0 0'}}>&copy; {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default Teams;
