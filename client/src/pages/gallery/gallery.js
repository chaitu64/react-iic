import React, { useState, useEffect, useCallback } from "react";
import { 
	Calendar, 
	Image as ImageIcon, 
	ChevronLeft, 
	ChevronRight, 
	X, 
	ArrowRight,
	Sparkles
} from "lucide-react";
import styles from './Gallery.module.css';

const galleryData = [
	{
		id: "gallery-1",
		category: "bootcamp",
		title: "IIC Activities & Innovation Bootcamp",
		date: "Oct 30, 2021",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211030_140219.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211117_113131.jpg"
		]
	},
	{
		id: "gallery-2",
		category: "workshop",
		title: "Student Startup & Prototyping Meet",
		date: "Nov 17, 2021",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211117_113131.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg"
		]
	},
	{
		id: "gallery-3",
		category: "hackathon",
		title: "Innovation Meetup & Hackathon 2024",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_440a1463.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_c861f92e.jpg"
		]
	},
	{
		id: "gallery-4",
		category: "hackathon",
		title: "Code Sprint & Hackathon Highlights",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_440a1463.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg"
		]
	},
	{
		id: "gallery-5",
		category: "summit",
		title: "Tech Ideation & Innovation Summit",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.40_c861f92e.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c3b41748.jpg"
		]
	},
	{
		id: "gallery-6",
		category: "summit",
		title: "Future of Tech Leadership Summit",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c3b41748.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c872376b.jpg"
		]
	},
	{
		id: "gallery-7",
		category: "workshop",
		title: "Founders Talk & Startup Incubation",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.25_c872376b.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.26_978bafab.jpg"
		]
	},
	{
		id: "gallery-8",
		category: "workshop",
		title: "Product Engineering & Mentorship",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.22.26_978bafab.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211030_140219.jpg"
		]
	},
	{
		id: "gallery-9",
		category: "summit",
		title: "Regional Innovation & Community Outreach",
		date: "Mar 13, 2024",
		images: [
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/20211030_140219.jpg",
			"https://pgoezyvozcnkfiwrknmx.supabase.co/storage/v1/object/public/Gallery/WhatsApp%20Image%202024-03-13%20at%2020.17.02_a7338a25.jpg"
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
	const [localGalleryData] = useState(galleryData);
	const [loading] = useState(false);
	const [filter, setFilter] = useState("all");
	const [modal, setModal] = useState({ open: false, event: null, photoIdx: 0 });

	const filteredGallery =
		filter === "all"
			? localGalleryData
			: localGalleryData.filter((item) => item.category === filter);

	const openModal = useCallback((event, photoIdx = 0) => {
		setModal({ open: true, event, photoIdx });
	}, []);

	const closeModal = useCallback(() => {
		setModal({ open: false, event: null, photoIdx: 0 });
	}, []);

	const nextPhoto = useCallback(() => {
		if (!modal.event) return;
		setModal((m) => ({
			...m,
			photoIdx: (m.photoIdx + 1) % m.event.images.length
		}));
	}, [modal.event]);

	const prevPhoto = useCallback(() => {
		if (!modal.event) return;
		setModal((m) => ({
			...m,
			photoIdx: (m.photoIdx - 1 + m.event.images.length) % m.event.images.length
		}));
	}, [modal.event]);

	// Keyboard navigation for the modal
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!modal.open) return;
			if (e.key === "Escape") closeModal();
			if (e.key === "ArrowRight") nextPhoto();
			if (e.key === "ArrowLeft") prevPhoto();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [modal.open, nextPhoto, prevPhoto, closeModal]);

	// Lock body scroll when modal is open
	useEffect(() => {
		if (modal.open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [modal.open]);

	return (
		<div className={styles.wrap}>
			<main>
				{/* Hero Section */}
				<div className={styles['hero-gallery']}>
					<div className={styles['hero-badge']}>
						<Sparkles size={16} />
						<span>Visual Highlights</span>
					</div>
					<h1>Event Gallery</h1>
					<p>
						Explore the highlights from our past events, workshops, and community gatherings. Witness the innovation and collaboration that define IIC.
					</p>
				</div>

				{/* Filter Buttons */}
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

				{/* Gallery Grid */}
				<div className={styles['gallery-wrapper']}>
					{loading ? (
						<div className={styles['loading-state']}>
							Loading Gallery Data... <i className="fa-solid fa-circle-notch fa-spin"></i>
						</div>
					) : (
						<div className={styles['grid-container']}>
							{filteredGallery.map((item, idx) => {
								const totalImages = item.images ? item.images.length : 0;
								const coverImage = item.images && item.images[0] ? item.images[0] : "";

								return (
									<div
										className={styles['gallery-card']}
										key={item.id || idx}
										onClick={() => openModal(item, 0)}
									>
										{/* Left Side: Clean Image Poster */}
										<div className={styles['card-poster']}>
											<img 
												src={coverImage} 
												alt={item.title} 
												loading="lazy" 
												className={styles['poster-img']}
											/>
											
											{/* Top Right Photo Count Badge */}
											{totalImages > 1 && (
												<div className={styles['count-badge']}>
													<ImageIcon size={13} />
													<span>{totalImages} Photos</span>
												</div>
											)}
										</div>

										{/* Right Side: Clean Minimal Details */}
										<div className={styles['card-content']}>
											<div className={styles['card-details-top']}>
												<div className={styles['card-header']}>
													<div className={styles['date-wrapper']}>
														<Calendar size={14} className={styles['date-icon']} />
														<span>{item.date}</span>
													</div>
													<span className={styles['card-category-tag']}>
														{item.category}
													</span>
												</div>

												<h3 className={styles['card-title']}>
													{item.title}
												</h3>
											</div>

											{/* Action Footer */}
											<div className={styles['card-footer']}>
												<button 
													className={styles['action-btn']}
													onClick={(e) => {
														e.stopPropagation();
														openModal(item, 0);
													}}
												>
													<span>Explore Gallery</span>
													<ArrowRight size={16} className={styles['btn-arrow']} />
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>

				{/* Numbers & Stats Banner */}
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

			{/* Interactive Lightbox / Full Poster Modal */}
			{modal.open && modal.event && (
				<div 
					className={styles['modal-backdrop']} 
					onClick={closeModal}
					role="dialog"
					aria-modal="true"
				>
					<div 
						className={styles['modal-box']} 
						onClick={(e) => e.stopPropagation()}
					>
						{/* Close button */}
						<button 
							className={styles['modal-close-btn']} 
							onClick={closeModal}
							aria-label="Close modal"
						>
							<X size={20} />
						</button>

						{/* Modal Stage: Full High-Res Poster View */}
						<div className={styles['modal-stage']}>
							<img 
								className={styles['modal-main-img']} 
								src={modal.event.images[modal.photoIdx]} 
								alt={modal.event.title} 
							/>

							{/* Previous and Next Navigation Arrows on Modal */}
							{modal.event.images.length > 1 && (
								<>
									<button 
										className={`${styles['modal-arrow']} ${styles['modal-arrow-left']}`} 
										onClick={prevPhoto}
										aria-label="Previous photo"
									>
										<ChevronLeft size={26} />
									</button>
									<button 
										className={`${styles['modal-arrow']} ${styles['modal-arrow-right']}`} 
										onClick={nextPhoto}
										aria-label="Next photo"
									>
										<ChevronRight size={26} />
									</button>
								</>
							)}

							{/* Photo index counter pill on modal */}
							<div className={styles['modal-counter-pill']}>
								{modal.photoIdx + 1} / {modal.event.images.length}
							</div>
						</div>

						{/* Modal Footer with Thumbnail Strip & Info */}
						<div className={styles['modal-footer-info']}>
							{modal.event.images.length > 1 && (
								<div className={styles['modal-thumbnails-bar']}>
									{modal.event.images.map((imgUrl, tIdx) => (
										<button
											key={tIdx}
											className={`${styles['modal-thumb-btn']} ${modal.photoIdx === tIdx ? styles['modal-thumb-active'] : ''}`}
											onClick={() => setModal((m) => ({ ...m, photoIdx: tIdx }))}
											aria-label={`View photo ${tIdx + 1}`}
										>
											<img src={imgUrl} alt={`Thumbnail ${tIdx + 1}`} />
										</button>
									))}
								</div>
							)}

							<div className={styles['modal-text-content']}>
								<div className={styles['modal-top-row']}>
									<div className={styles['modal-tags']}>
										<span className={styles['modal-category']}>
											{modal.event.category}
										</span>
										<span className={styles['modal-date']}>
											<Calendar size={13} />
											{modal.event.date}
										</span>
									</div>
								</div>
								<h3 className={styles['modal-title']}>{modal.event.title}</h3>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Gallery;
