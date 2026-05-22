import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryData = [
	{
		id: "sih2025",
		category: "hackathon",
		title: "SIH Hackathon",
		date: "Sept 24, 2025",
		description:
			"The Institution's Innovation Council at VVIT University successfully organized Smart India Hackathon 2025. This national-level event provided a platform for students to demonstrate their technical prowess and entrepreneurial spirit.",
		images: [
			"/images/sih.png",
			"/images/sih2.png",
			"/images/sih3.png",
			"/images/sih4.png"
		]
	},
	{
		id: "coding2025",
		category: "hackathon",
		title: "Innovate it",
		date: "Oct 15, 2025",
		description:
			"Held on October 15th, 'INNOVATE-IT' was a dedicated ideation platform designed to foster the entrepreneurial spirit. Student teams of 2-3 members showcased their problem-solving skills, presenting unique concepts under the theme 'Ignite Ideas, Inspire Action.'",
		images: [
			"/images/inoit.png",
			"/images/inoit2.png",
			"/images/inoit3.png"
		]
	},
	{
		id: "pitch2025",
		category: "workshop",
		title: "Tech Talks",
		date: "Nov 17, 2025",
		description:
			"From student to founder! Our students received invaluable mentorship from the host MR.Dileep Sajja who broke down the importance of entrepreneurship and shared the essential strategies needed to build a business from scratch.",
		images: ["/images/techtalk.png"]
	},
	{
		id: "idea2025",
		category: "bootcamp",
		title: "Incubation Visit",
		date: "May 25, 2025",
		description:
			"VVIT IIC organized a field visit to Vignan TBI, providing students with a practical understanding of the incubation process. The session focused on bridging the gap between academic learning and real-world startup strategies.",
		images: [
			"/images/incu1.png",
			"/images/incu2.png",
			"/images/incu3.png"
		]
	}
];

const filterOptions = [
	{ label: "All Events", value: "all" },
	{ label: "Hackathons", value: "hackathon" },
	{ label: "Workshops", value: "workshop" },
	{ label: "Bootcamp", value: "bootcamp" },
	{ label: "Summit", value: "summit" }
];

function Gallery() {
	const [filter, setFilter] = useState("all");
	const [modal, setModal] = useState({ open: false, event: null, photoIdx: 0 });

	const filteredGallery =
		filter === "all"
			? galleryData
			: galleryData.filter((item) => item.category === filter);

	const openModal = (event) => {
		setModal({ open: true, event, photoIdx: 0 });
	};
	const closeModal = () => setModal({ open: false, event: null, photoIdx: 0 });
	const nextPhoto = () => {
		if (!modal.event) return;
		setModal((m) => ({
			...m,
			photoIdx: (m.photoIdx + 1) % m.event.images.length
		}));
	};
	const prevPhoto = () => {
		if (!modal.event) return;
		setModal((m) => ({
			...m,
			photoIdx: (m.photoIdx - 1 + m.event.images.length) % m.event.images.length
		}));
	};

	return (
		<div className="wrap">
			<header>
				<div className="header-inner">
					<div className="brand">
						<img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
						<span>VVIT</span>
					</div>
					<nav id="main-nav">
						<a href="/">Home</a>
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
				<div className="hero-gallery">
					<h1>Event Gallery</h1>
					<p>
						Explore the highlights from our past events, workshops, and community gatherings. Witness the innovation and collaboration that define IIC.
					</p>
				</div>
				<div className="filter-container">
					{filterOptions.map((opt) => (
						<button
							key={opt.value}
							className={"filter-btn" + (filter === opt.value ? " active" : "")}
							onClick={() => setFilter(opt.value)}
						>
							{opt.label}
						</button>
					))}
				</div>
				<div className="gallery-grid">
					{filteredGallery.map((item) => (
						<div
							className="gallery-item"
							key={item.id}
							onClick={() => openModal(item)}
						>
							<img src={item.images[0]} alt={item.title} />
							<div className="gallery-overlay">
								<div className="overlay-title">{item.title}</div>
								<div className="overlay-meta">{item.date}</div>
							</div>
						</div>
					))}
				</div>
				<section className="gallery-stats">
					<h2>IIC by the Numbers</h2>
					<div className="stats-grid">
						<div className="stat-item">
							<h3>50+</h3>
							<p>Photos Captured</p>
						</div>
						<div className="stat-item">
							<h3>12</h3>
							<p>Events Hosted</p>
						</div>
						<div className="stat-item">
							<h3>500+</h3>
							<p>Participants</p>
						</div>
						<div className="stat-item">
							<h3>100%</h3>
							<p>Innovation Impact</p>
						</div>
					</div>
				</section>
			</main>
			<footer style={{background:'#111', color:'#fff', padding:'60px 0 0 0', marginTop:0}}>
				<div className="footer-grid" style={{maxWidth:'1200px',margin:'0 auto',padding:'0 24px'}}>
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
				</div>
			</footer>
			{/* Modal for gallery images */}
			{modal.open && (
				<div className="modal" style={{display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',inset:0,background:'rgba(10,10,30,0.95)',zIndex:1000}}>
					<div className="modal-content" style={{position:'relative',maxWidth:'100vw',width:'90vw',maxHeight:'90vh',display:'flex',flexDirection:'column',background:'#fff',borderRadius:'16px',overflow:'hidden',boxShadow:'0 25px 50px -12px rgba(0,0,0,0.5)'}}>
						<button className="modal-close" style={{position:'absolute',top:20,right:20,width:40,height:40,background:'rgba(255,255,255,0.9)',border:'none',borderRadius:'50%',color:'#2E2A8F',fontSize:28,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1001}} onClick={closeModal}>&times;</button>
						<img className="modal-image" src={modal.event.images[modal.photoIdx]} alt={modal.event.title} style={{width:'100%',height:'60vh',objectFit:'contain',background:'#000'}} />
						<div className="modal-info" style={{padding:'20px 30px',background:'#fff',color:'#222',borderTop:'4px solid #F4A238'}}>
							<div className="modal-header-row" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:8}}>
								<h3 className="modal-title" style={{fontSize:24,fontWeight:700,color:'#2E2A8F',margin:0}}>{modal.event.title}</h3>
								<span className="photo-counter" style={{fontSize:13,background:'#eee',padding:'4px 10px',borderRadius:12,color:'#555',fontWeight:600}}>{modal.photoIdx + 1} / {modal.event.images.length}</span>
							</div>
							<p className="modal-date" style={{fontSize:14,color:'#F4A238',fontWeight:600,margin:'0 0 12px',textTransform:'uppercase',letterSpacing:1}}>{modal.event.date}</p>
							<p className="modal-description" style={{fontSize:15,color:'#6b6b6b',lineHeight:1.6,margin:0}}>{modal.event.description}</p>
						</div>
						{modal.event.images.length > 1 && (
							<>
								<button className="modal-nav modal-prev" style={{position:'absolute',top:'50%',left:30,transform:'translateY(-50%)',background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',color:'#2E2A8F',fontSize:24,width:50,height:50,borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1001}} onClick={prevPhoto}>&lt;</button>
								<button className="modal-nav modal-next" style={{position:'absolute',top:'50%',right:30,transform:'translateY(-50%)',background:'rgba(255,255,255,0.2)',border:'1px solid rgba(255,255,255,0.3)',color:'#2E2A8F',fontSize:24,width:50,height:50,borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1001}} onClick={nextPhoto}>&gt;</button>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Gallery;
