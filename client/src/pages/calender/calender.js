import React, { useState } from 'react';
import styles from './Calender.module.css';
import events from '../../eventsdata/events.json';

function Calender() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [showYearSelector, setShowYearSelector] = useState(false);

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

	const previousMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const nextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const yearOptions = Array.from(
		new Set([year, ...events.map((event) => event.year)])
	).sort((a, b) => a - b);

	const selectYear = (selectedYear) => {
		setCurrentDate(new Date(selectedYear, 0, 1));
		setShowYearSelector(false);
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

								<div className={styles.yearSelector}>

									<button
										className={styles.yearSelectorButton}
										onClick={() =>
											setShowYearSelector(
												!showYearSelector
											)
										}
										aria-haspopup="listbox"
										aria-expanded={showYearSelector}
									>
										<span>{year}</span>
										<svg
											width="10"
											height="10"
											viewBox="0 0 10 10"
											aria-hidden="true"
										>
											<path
												d="M1 3l4 4 4-4"
												fill="none"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</button>

									{showYearSelector && (
										<>
											<div
												className={styles.yearSelectorOverlay}
												onClick={() =>
													setShowYearSelector(false)
												}
											/>
											<div
												className={styles.yearOptions}
												role="listbox"
											>
												{yearOptions.map((optionYear) => (
													<button
														key={optionYear}
														className={`${styles.yearOption} ${
															optionYear === year
																? styles.yearOptionActive
																: ''
														}`}
														onClick={() =>
															selectYear(
																optionYear
															)
														}
													>
														{optionYear}
													</button>
												))}
											</div>
										</>
									)}

								</div>

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
											{isToday && !event && (
												<div
													className={styles.todayIndicator}
													title="Today"
												/>
											)}
											{event && !isToday && (
												<div
													className={styles.eventIndicator}
													title={event.title}
												/>
											)}
											{isToday && event && (
												<div
													className={styles.bothIndicator}
													title={`Today · ${event.title}`}
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


					{/* EVENTS OF THE MONTH */}
					<aside className={styles.eventsPanel}>

						<div className={styles.eventsPanelHeader}>

							<div className={styles.eventsPanelHeaderTop}>

								<p>WHAT'S HAPPENING</p>

								<span className={styles.countPill}>
									{currentMonthEvents.length}
								</span>

							</div>

							<h2>Events of the Month</h2>

							<p className={styles.eventsSubtext}>
								{currentMonthEvents.length} scheduled activities
								this month
							</p>

						</div>


						<div className={styles.eventsList}>

							{currentMonthEvents.length > 0 ? (
								currentMonthEvents.map((event) => (
									<div
										className={styles.eventItem}
										key={`${event.date}-${event.title}`}
									>

										<div className={styles.eventDate}>

											<span className={styles.eventMonth}>
												{monthNames[event.month].slice(0, 3)}
											</span>

											<strong className={styles.eventDay}>
												{event.date}
											</strong>

										</div>


										<div className={styles.eventDetails}>

											<h3>{event.title}</h3>

										</div>

									</div>
								))
							) : (
								<div className={styles.emptyEvents}>
									<div className={styles.emptyIcon}>🗓️</div>
									<div className={styles.emptyText}>
										No events scheduled for this month.
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
