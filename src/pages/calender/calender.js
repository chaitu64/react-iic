import React, { useState } from 'react';
import styles from './Calender.module.css';

function Calender() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const today = new Date();

	const events = [
		{
			date: 5,
			month: 7,
			year: 2026,
			title: 'Innovation Workshop',
			description:
				'Interactive session on innovation and creative problem solving.',
			type: 'Workshop'
		},
		{
			date: 10,
			month: 7,
			year: 2026,
			title: 'Startup Bootcamp',
			description:
				'Learn the fundamentals of building and launching a startup.',
			type: 'Bootcamp'
		},
		{
			date: 15,
			month: 7,
			year: 2026,
			title: 'Ideathon',
			description:
				'A collaborative event to develop innovative ideas and solutions.',
			type: 'Competition'
		},
		{
			date: 20,
			month: 7,
			year: 2026,
			title: 'Entrepreneurship Talk',
			description:
				'Guest session with an entrepreneur and industry expert.',
			type: 'Talk'
		},
		{
			date: 25,
			month: 7,
			year: 2026,
			title: 'IIC Community Meet',
			description:
				'Connect, collaborate and share ideas with the IIC community.',
			type: 'Community'
		}
	];

	const previousMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const nextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	const getEventForDate = (day) => {
		return events.find(
			(event) =>
				event.date === day &&
				event.month === month &&
				event.year === year
		);
	};

	const calendarDays = [];

	for (let i = 0; i < firstDay; i++) {
		calendarDays.push(null);
	}

	for (let day = 1; day <= daysInMonth; day++) {
		calendarDays.push(day);
	}

	const currentMonthEvents = events.filter(
		(event) => event.month === month && event.year === year
	);

	return (
		<main>

			{/* HERO */}
			<section className={styles.heroCalendar}>
				<div>
					<p className={styles.eyebrow}>IIC • VVITU</p>

					<h1>
						Event <span>Calendar</span>
					</h1>

					<p className={styles.heroText}>
						Track all IIC events, workshops, bootcamps,
						competitions, and community gatherings. Plan
						your participation in upcoming innovation
						initiatives.
					</p>
				</div>
			</section>


			{/* CALENDAR */}
			<section className={styles.calendarSection}>

				<div className={styles.calendarContainer}>

					{/* CALENDAR CARD */}
					<div className={styles.calendarCard}>

						<div className={styles.calendarHeader}>

							<div>
								<h2>
									{monthNames[month]} {year}
								</h2>

								<p>
									Explore upcoming IIC activities
								</p>
							</div>

							<div className={styles.calendarControls}>

								<button
									onClick={previousMonth}
									aria-label="Previous month"
								>
									‹
								</button>

								<button
									className={styles.todayButton}
									onClick={goToToday}
								>
									Today
								</button>

								<button
									onClick={nextMonth}
									aria-label="Next month"
								>
									›
								</button>

							</div>

						</div>


						{/* WEEK DAYS */}
						<div className={styles.weekdays}>
							{dayNames.map((day) => (
								<div key={day}>
									{day}
								</div>
							))}
						</div>


						{/* CALENDAR DAYS */}
						<div className={styles.calendarGrid}>

							{calendarDays.map((day, index) => {

								if (day === null) {
									return (
										<div
											key={`empty-${index}`}
											className={styles.emptyDay}
										/>
									);
								}

								const event = getEventForDate(day);

								const isToday =
									day === today.getDate() &&
									month === today.getMonth() &&
									year === today.getFullYear();

								return (
									<div
										key={day}
										className={`${styles.calendarDay} ${isToday ? styles.today : ''
											} ${event ? styles.hasEvent : ''
											}`}
									>

										<div className={styles.dayNumber}>
											{day}
										</div>

										<div className={styles.indicatorContainer}>
											{isToday && (
												<div
													className={styles.todayIndicator}
													title="Today"
												/>
											)}
											{event && (
												<div
													className={styles.eventIndicator}
													title={event.title}
												/>
											)}
										</div>

									</div>
								);
							})}

						</div>


						{/* LEGEND */}
						<div className={styles.legend}>

							<div>
								<span className={styles.todayDot}></span>
								Today
							</div>

							<div>
								<span className={styles.eventDot}></span>
								Event
							</div>

						</div>

					</div>


					{/* UPCOMING EVENTS */}
					<aside className={styles.eventsPanel}>

						<div className={styles.eventsPanelHeader}>

							<p>WHAT'S HAPPENING</p>

							<h2>Upcoming Events</h2>

							<span>
								{currentMonthEvents.length} scheduled activities
							</span>

						</div>


						<div className={styles.eventsList}>

							{currentMonthEvents.length > 0 ? (
								currentMonthEvents.map((event) => (
									<div
										className={styles.eventItem}
										key={`${event.date}-${event.title}`}
									>

										<div className={styles.eventDate}>

											<strong>
												{event.date}
											</strong>

											<span>
												{monthNames[event.month].slice(0, 3)}
											</span>

										</div>


										<div className={styles.eventDetails}>

											<span className={styles.eventType}>
												{event.type}
											</span>

											<h3>{event.title}</h3>

											<p>
												{event.description}
											</p>

										</div>

									</div>
								))
							) : (
								<div className={styles.emptyEvents}>
									<div className={styles.emptyIcon}>🗓️</div>
									<div className={styles.emptyText}>
										Currently no events scheduled for this month.
									</div>
								</div>
							)}

						</div>

					</aside>

				</div>

			</section>

		</main>
	);
}

export default Calender;
