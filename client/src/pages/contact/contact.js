import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Contact.module.css';
function Contact() {
	return (
		<div className={styles.wrap}>


			<main>
				<div className={styles['hero-contact']}>
					<h1>Get In Touch</h1>
					<p>Have questions about IIC? Want to collaborate or participate in our programs? We'd love to hear from you. Reach out through any channel below.</p>
				</div>

				<div className={styles['contact-container']}>
					<div className={styles['contact-info']}>
						<h2>Contact Information</h2>
						<div className={styles['info-group']}>
							<div className={styles['info-label']}>Email</div>
							<div className={styles['info-content']}>
								<a href="mailto:iicVVITU@VVITU.net">iicVVITU@VVITU.net</a><br />
							</div>
						</div>
						<div className={styles['info-group']}>
							<div className={styles['info-label']}>Phone</div>
							<div className={styles['info-content']}>
								<a href="tel:+919392042226">+91 93920 42226</a><br />
								<a href="tel:+919490343393">+91 94903 43393</a>
							</div>
						</div>
						<div className={styles['info-group']}>
							<div className={styles['info-label']}>Office Location</div>
							<div className={styles['info-content']}>
								Institution's Innovation Council<br />
								VVITU University<br />
								Namburu<br />
								India
							</div>
						</div>
						<div className={styles['info-group']}>
  <div className={styles['info-label']}>Follow Us</div>

  <div className={styles['social-links']}>

    <a
      href="https://www.linkedin.com/in/iic-VVITU-624755321/"
      className={`${styles['social-link']} ${styles.linkedin}`}
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://www.instagram.com/iic_VVITU/"
      className={`${styles['social-link']} ${styles.instagram}`}
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>

  </div>
</div>
						<div className={styles['info-group']}>
							<div className={styles['info-label']}>Quick Links</div>
							<div className={styles['info-content']}>
								<Link to="/events">View Events</Link><br />
								<Link to="/gallery">Event Gallery</Link><br />
								<Link to="/teams">Meet the Team</Link>
							</div>
						</div>
					</div>
					<div className={styles['map-section']}>
						<div className={styles['map-title']}>
							<h2>Visit Us</h2>
							<p>Located at VVITU University in Namburu, our innovation hub is easily accessible and equipped with modern facilities for collaboration and innovation.</p>
						</div>
						<div className={styles['map-container']}>
							<iframe
								src="https://maps.google.com/maps?q=Vasireddy%20Venkatadri%20Institute%20of%20Technology%2C%20Nambur&t=&z=15&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="VVITU University Map"
							></iframe>
						</div>
					</div>
				</div>
			</main>


		</div>
	);
}

export default Contact;
