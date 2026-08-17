import React, { useState } from "react";

import styles from './Gallery.module.css';

const galleryData = [
	{
		id: "gallery-1",
		category: "bootcamp",
		title: "IIC Activities 2021",
		date: "Oct 30, 2021",
		description: "A look back at our earliest innovation bootcamps and student gatherings that sparked the foundation for our current entrepreneurial ecosystem.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211030_140219.jpg"]
	},
	{
		id: "gallery-2",
		category: "workshop",
		title: "Student Startup Meet",
		date: "Nov 17, 2021",
		description: "An incredible session focused on rapid prototyping and startup ideas from our creative minds.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211117_113131.jpg"]
	},
	{
		id: "gallery-3",
		category: "hackathon",
		title: "Innovation Meetup 2024",
		date: "Mar 13, 2024",
		description: "Teams engaged in a fast-paced problem-solving environment, brainstorming digital solutions and pushing boundaries.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg"]
	},
	{
		id: "gallery-4",
		category: "hackathon",
		title: "Hackathon Highlight",
		date: "Mar 13, 2024",
		description: "Another brilliant moment captured from the high-energy problem-solving session.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg"]
	},
	{
		id: "gallery-5",
		category: "summit",
		title: "Tech Ideation Session",
		date: "Mar 13, 2024",
		description: "Interactive session focusing on ideation strategies and bringing software concepts to life.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_440a1463.jpg"]
	},
	{
		id: "gallery-6",
		category: "summit",
		title: "Tech Innovation Highlight",
		date: "Mar 13, 2024",
		description: "Sharing breakthrough thoughts and modern web technologies with the community.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_c861f92e.jpg"]
	},
	{
		id: "gallery-7",
		category: "workshop",
		title: "Founders Talk",
		date: "Mar 13, 2024",
		description: "Mentorship and guidance talk aimed at bridging the gap between academic projects and real-world startup incubation.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c3b41748.jpg"]
	},
	{
		id: "gallery-8",
		category: "workshop",
		title: "Mentorship Discussion",
		date: "Mar 13, 2024",
		description: "A deep dive into essential strategies for building resilient tech products.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c872376b.jpg"]
	},
	{
		id: "gallery-9",
		category: "summit",
		title: "Community Outreach",
		date: "Mar 13, 2024",
		description: "Celebrating our rapidly growing ecosystem of student builders and creators.",
		images: ["https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.26_978bafab.jpg"]
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
	const [localGalleryData] = useState(galleryData);
	const [loading] = useState(false);
	const [filter, setFilter] = useState("all");
	const [modal, setModal] = useState({ open: false, event: null, photoIdx: 0 });

	// Backend fetch removed to allow manual URL insertion via the 'galleryData' array above.

	const filteredGallery =
		filter === "all"
			? localGalleryData
			: localGalleryData.filter((item) => item.category === filter);

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
		<div className={styles.wrap}>

			<main>
				<div className={styles['hero-gallery']}>
					<h1>Event Gallery</h1>
					<p>
						Explore the highlights from our past events, workshops, and community gatherings. Witness the innovation and collaboration that define IIC.
					</p>
				</div>
				<div className={styles['filter-container']}>
					{filterOptions.map((opt) => (
						<button
							key={opt.value}
							className={`${styles['filter-btn']} ${filter === opt.value ? styles['active'] : ""}`}
							onClick={() => setFilter(opt.value)}
						>
							{opt.label}
						</button>
					))}
				</div>
				<div className={styles['gallery-wrapper']}>
					{loading ? (
						<div style={{ textAlign: 'center', padding: '100px', fontSize: '18px', color: '#666' }}>
							Loading Gallery Data... <i className="fa-solid fa-circle-notch fa-spin"></i>
						</div>
					) : (
						<div className={styles['grid-container']}>
							{filteredGallery.map((item, idx) => (
								<div
									className={styles['gallery-item']}
									key={item.id || idx}
									onClick={() => openModal(item)}
								>
									<img src={item.images && item.images[0] ? item.images[0] : ""} alt={item.title} loading="lazy" />
									<div className={styles['gallery-overlay']}>
										<div className={styles['overlay-title']}>{item.title}</div>
										<div className={styles['overlay-meta']}>{item.date}</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
				<section className={styles['gallery-stats']}>
					<h2>IIC by the Numbers</h2>
					<div className={styles['stats-grid']}>
						<div className={styles['stat-item']}>
							<h3>50+</h3>
							<p>Photos Captured</p>
						</div>
						<div className={styles['stat-item']}>
							<h3>12</h3>
							<p>Events Hosted</p>
						</div>
						<div className={styles['stat-item']}>
							<h3>500+</h3>
							<p>Participants</p>
						</div>
						<div className={styles['stat-item']}>
							<h3>100%</h3>
							<p>Innovation Impact</p>
						</div>
					</div>
				</section>
			</main>

			{/* Modal for gallery images */}
			{modal.open && (
				<div className={styles.modal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', inset: 0, background: 'rgba(10,10,30,0.95)', zIndex: 1000 }}>
					<div className={styles['modal-content']} style={{ position: 'relative', maxWidth: '100vw', width: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', background: 'var(--card-bg)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
						<button className={styles['modal-close']} style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, background: 'var(--nav-bg)', border: 'none', borderRadius: '50%', color: 'var(--navy)', fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }} onClick={closeModal}>&times;</button>
						<img className={styles['modal-image']} src={modal.event.images[modal.photoIdx]} alt={modal.event.title} style={{ width: '100%', height: '60vh', objectFit: 'contain', background: '#000' }} />
						<div className={styles['modal-info']} style={{ padding: '20px 30px', background: 'var(--card-bg)', color: 'inherit', borderTop: '4px solid var(--orange)' }}>
							<div className={styles['modal-header-row']} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
								<h3 className={styles['modal-title']} style={{ fontSize: 24, fontWeight: 700, color: 'var(--navy)', margin: 0 }}>{modal.event.title}</h3>
								<span className={styles['photo-counter']} style={{ fontSize: 13, background: 'var(--border)', padding: '4px 10px', borderRadius: 12, color: 'var(--muted)', fontWeight: 600 }}>{modal.photoIdx + 1} / {modal.event.images.length}</span>
							</div>
							<p className={styles['modal-date']} style={{ fontSize: 14, color: 'var(--orange)', fontWeight: 600, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>{modal.event.date}</p>
							<p className={styles['modal-description']} style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{modal.event.description}</p>
						</div>
						{modal.event.images.length > 1 && (
							<>
								<button className={`${styles['modal-nav']} ${styles['modal-prev']}`} style={{ position: 'absolute', top: '50%', left: 30, transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#2E2A8F', fontSize: 24, width: 50, height: 50, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }} onClick={prevPhoto}>&lt;</button>
								<button className={`${styles['modal-nav']} ${styles['modal-next']}`} style={{ position: 'absolute', top: '50%', right: 30, transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', color: '#2E2A8F', fontSize: 24, width: 50, height: 50, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }} onClick={nextPhoto}>&gt;</button>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default Gallery;
