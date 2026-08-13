import React from "react";
import { Link } from "react-router-dom";
import styles from './Teams.module.css';

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
		<div className={styles.wrap}>
			
			<main>
				<div className={styles['hero-teams']}>
					<h1>IIC Teams 2025</h1>
					<p>Meet the passionate faculty and student teams driving innovation, entrepreneurship, and impactful events at VVIT IIC.</p>
					<div className={styles['hero-stats']}>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.members}</span>
							<span className={styles['stat-label']}>Team Members</span>
						</div>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.departments}</span>
							<span className={styles['stat-label']}>Departments</span>
						</div>
						<div className={styles['stat-item']}>
							<span className={styles['stat-number']}>{teamData.stats.events}+</span>
							<span className={styles['stat-label']}>Events Organized</span>
						</div>
					</div>
				</div>
				{teamData.team.map((section, idx) => (
					<div className={styles['team-section']} key={section.section}>
						<div className={"section-intro" + (section.reverse ? " reverse" : "") }>
							<div className={styles['section-icon']}>{section.icon}</div>
							<div className={styles['section-text']}>
								<h2>{section.section}</h2>
								<p>{section.description}</p>
							</div>
						</div>
						<div className={section.section.includes("President") ? "team-grid leadership" : "team-grid"}>
							{section.members.map((member) => (
								<div className={styles['member-card']} key={member.name}>
									<div className={styles['member-avatar']}>{member.initials}</div>
									<div className={styles['member-name']}>{member.name}</div>
									<div className={styles['member-role']}>{member.role}</div>
									<div className={styles['member-bio']}>{member.bio}</div>
								</div>
							))}
						</div>
					</div>
				))}
			</main>
			
		</div>
	);
}

export default Teams;
