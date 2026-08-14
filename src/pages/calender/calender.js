import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Calender.module.css';
function Calender() {
	return (
		<div className={styles.wrap}>
			

			<main>
				<div className={styles['hero-calendar']}>
					<h1>Event Calendar</h1>
					<p>Track all IIC events, workshops, bootcamps, and community gatherings. Plan your participation in upcoming innovation initiatives.</p>
				</div>
				<div className={styles['calendar-placeholder']}>
					{/* Replace this with your interactive calendar component */}
					Calendar UI coming soon...
				</div>
			</main>

			
		</div>
	);
}

export default Calender;
