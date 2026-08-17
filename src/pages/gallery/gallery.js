import React, { useState } from "react";

import styles from './Gallery.module.css';

const galleryData = [
	{
		id: "sih2025",
		category: "hackathon",
		title: "SIH Hackathon",
		date: "Sept 24, 2025",
		description:
			"The Institution's Innovation Council at VVIT University successfully organized Smart India Hackathon 2025. This national-level event provided a platform for students to demonstrate their technical prowess and entrepreneurial spirit.",
		images: [
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
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
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1515187029136-1c3905436df7?auto=format&fit=crop&q=80&w=800"
		]
	},
	{
		id: "pitch2025",
		category: "workshop",
		title: "Tech Talks",
		date: "Nov 17, 2025",
		description:
			"From student to founder! Our students received invaluable mentorship from the host MR.Dileep Sajja who broke down the importance of entrepreneurship and shared the essential strategies needed to build a business from scratch.",
		images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"]
	},
	{
		id: "idea2025",
		category: "bootcamp",
		title: "Incubation Visit",
		date: "May 25, 2025",
		description:
			"VVIT IIC organized a field visit to Vignan TBI, providing students with a practical understanding of the incubation process. The session focused on bridging the gap between academic learning and real-world startup strategies.",
		images: [
			"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=800",
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
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
	const [galleryData, setGalleryData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("all");
	const [modal, setModal] = useState({ open: false, event: null, photoIdx: 0 });

	React.useEffect(() => {
		fetch('http://localhost:5000/api/gallery')
			.then(res => res.json())
			.then(data => {
				// Access the precise 'galleryImages' array returned by our new Bucket controller!
				setGalleryData(data.galleryImages || []);
				setLoading(false);
			})
			.catch(err => {
				console.error("Failed to fetch gallery", err);
				setGalleryData(galleryData); // Fallback to raw constant on fail
				setLoading(false);
			});
	}, []);

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
						<div className={styles['marquee-container']}>
							{[1, 2, 3, 4, 5, 6].map((groupIndex) => (
								<div className={styles['marquee-content']} aria-hidden={groupIndex > 1} key={groupIndex}>
									{filteredGallery.map((item, idx) => (
										<div
											className={styles['gallery-item']}
											key={item.id || idx}
											onClick={() => openModal(item)}
										>
											<img src={item.images && item.images[0] ? item.images[0] : ""} alt={item.title} />
											<div className={styles['gallery-overlay']}>
												<div className={styles['overlay-title']}>{item.title}</div>
												<div className={styles['overlay-meta']}>{item.date}</div>
											</div>
										</div>
									))}
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
					<div className={styles['modal-content']} style={{ position: 'relative', maxWidth: '100vw', width: '90vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
						<button className={styles['modal-close']} style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', color: '#2E2A8F', fontSize: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }} onClick={closeModal}>&times;</button>
						<img className={styles['modal-image']} src={modal.event.images[modal.photoIdx]} alt={modal.event.title} style={{ width: '100%', height: '60vh', objectFit: 'contain', background: '#000' }} />
						<div className={styles['modal-info']} style={{ padding: '20px 30px', background: '#fff', color: '#222', borderTop: '4px solid #F4A238' }}>
							<div className={styles['modal-header-row']} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
								<h3 className={styles['modal-title']} style={{ fontSize: 24, fontWeight: 700, color: '#2E2A8F', margin: 0 }}>{modal.event.title}</h3>
								<span className={styles['photo-counter']} style={{ fontSize: 13, background: '#eee', padding: '4px 10px', borderRadius: 12, color: '#555', fontWeight: 600 }}>{modal.photoIdx + 1} / {modal.event.images.length}</span>
							</div>
							<p className={styles['modal-date']} style={{ fontSize: 14, color: '#F4A238', fontWeight: 600, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1 }}>{modal.event.date}</p>
							<p className={styles['modal-description']} style={{ fontSize: 15, color: '#6b6b6b', lineHeight: 1.6, margin: 0 }}>{modal.event.description}</p>
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
