import React, { useEffect, useState } from 'react';
import styles from './Events.module.css';

/* =========================
   LIVE EVENT
========================= */

const LIVE_EVENT = {
  image: 'https://vspgdcjylvxjdgaugjwq.supabase.co/storage/v1/object/public/gallery/SIH2026/Screenshot%202026-08-21%20161227_imgupscaler.ai_General_4K.jpg',
  registrationLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSfkqOn1rGzMeCQbjd0n6bO1KlhuayRpWkLEg48iVYa8trcsYA/closedform'
};

/* =========================
   PAST EVENTS
========================= */

const PAST_EVENTS = [
  /* ---------- HACKATHONS ---------- */

  {
    id: 'h1',
    category: 'Hackathons',
    title: 'SIH 2024',
    image: '/events/hackathons/sih2024.jpeg',
    date: '2024',
    description:
      'Smart India Hackathon 2024, a platform where students worked on innovative solutions for real-world problem statements.'
  },
  {
    id: 'h2',
    category: 'Hackathons',
    title: 'SIH 2025',
    image: '/events/hackathons/sih2025.jpeg',
    date: '2025',
    description:
      'Smart India Hackathon 2025 encouraged students to collaborate, innovate, and develop technology-driven solutions.'
  },

  /* ---------- IDEATHONS ---------- */


  {
    id: 'i4',
    category: 'Ideathons',
    title: 'Inter-Institutional Startup Competition',
    image: '/events/ideathons/iiscideathon.jpeg',
    date: '2023',
    description:
      'An inter-institutional competition focused on startup ideas, innovation, entrepreneurship, and collaboration among students.'
  },
  {
    id: 'i5',
    category: 'Ideathons',
    title: 'Innovate It',
    image: '/events/ideathons/innovateit_ideathon.jpeg',
    date: '2022',
    description:
      'An ideathon conducted to discover and encourage innovative student ideas with the potential to solve real-world problems.'
  },

  /* ---------- TECHNICAL EVENTS ---------- */

  {
    id: 't1',
    category: 'Technical Events',
    title: 'Invention Through Innovation',
    image: '/events/technicalevents/te1.jpeg',
    date: '2023',
    description:
      'An innovation-focused event that encouraged students to explore creative ideas, inventions, and practical solutions.'
  },
  {
    id: 't2',
    category: 'Technical Events',
    title: 'Innovation Experience',
    image: '/events/technicalevents/te2.jpeg',
    date: '2022',
    description:
      'A multi-event innovation experience featuring activities such as Marketing Magics, Scavenger Hunt, Stock Wars, and other creative challenges.'
  },
  {
    id: 't3',
    category: 'Technical Events',
    title: 'Innovation Intramurals',
    image: '/events/technicalevents/te3.jpeg',
    description:
      'A two-day intramural event featuring innovation-based activities, mathematics, ideas, and engaging student challenges.'
  },
  {
    id: 't4',
    category: 'Technical Events',
    title: 'Mind Mashrims',
    image: '/events/technicalevents/te4.jpeg',
    description:
      'A technical and creative event designed to challenge students through engaging activities and innovative thinking.'
  },
  {
    id: 't5',
    category: 'Technical Events',
    title: 'Stock Wars',
    image: '/events/technicalevents/te5.jpeg',
    description:
      'A technical event related to stock markets, where participants explored investment strategies and decision-making.'
  },
  {
    id: 't6',
    category: 'Technical Events',
    title: 'Innovation Hunt',
    image: '/events/technicalevents/te6.jpeg',
    description:
      'An innovation-based event focused on exploring the journey from innovative ideas and investment towards entrepreneurship.'
  },
  {
    id: 't7',
    category: 'Technical Events',
    title: 'Recall Masters',
    image: '/events/technicalevents/te7.jpeg',
    description:
      'A challenging event designed to test participants’ memory, recall ability, observation, and quick thinking.'
  },
  {
    id: 't8',
    category: 'Technical Events',
    title: 'Memory Wizards',
    image: '/events/technicalevents/te8.jpeg',
    description:
      'An engaging memory-based competition that challenged students to demonstrate their recall and observation skills.'
  },
  {
    id: 't9',
    category: 'Technical Events',
    title: 'Techmania',
    image: '/events/technicalevents/te9.jpeg',
    description:
      'A technical event bringing together students through technology, innovation, creativity, and exciting challenges.'
  }
];

/* =========================
   COMPONENT
========================= */

function Events() {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filters = [
    'All Events',
    'Hackathons',
    'Ideathons',
    'Technical Events'
  ];

  const filteredEvents =
    activeFilter === 'All Events'
      ? [...PAST_EVENTS].sort((a, b) => {
        const dateA = a.date ? parseInt(a.date) : -Infinity;
        const dateB = b.date ? parseInt(b.date) : -Infinity;
        return dateB - dateA;
      })
      : [...PAST_EVENTS]
        .filter((event) => event.category === activeFilter)
        .sort((a, b) => {
          const dateA = a.date ? parseInt(a.date) : -Infinity;
          const dateB = b.date ? parseInt(b.date) : -Infinity;
          return dateB - dateA;
        });

  /* =========================
     HASH SCROLL
  ========================= */

  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(
        window.location.hash.slice(1)
      );

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <main>

        {/* ================= HERO ================= */}

        <div className={styles['hero-events']}>
          <h1>Events</h1>

          <p>
            Explore the latest activities, competitions, workshops,
            and innovation initiatives of IIC VVITU.
          </p>
        </div>

        {/* ================= LIVE EVENT ================= */}

        <section id="ongoing">

          <div className={styles['section-header']}>
            <h2>Live Event</h2>
            <div className={styles['section-line']} />
          </div>

          <div className={styles['live-event-wrapper']}>

            <div className={styles['live-poster']}>

              {/* LIVE - TOP LEFT */}

              <div className={styles['live-badge']}>
                <span className={styles.dot}></span>
                LIVE
              </div>

              {/* ONGOING - TOP RIGHT */}

              <div className={styles['status-badge']}>
                ONGOING
              </div>

              <img
                src={LIVE_EVENT.image}
                alt="Live IIC Event"
              />

            </div>

            <a
              href={LIVE_EVENT.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['register-btn']}
            >
              Registrations Closed
            </a>

          </div>

        </section>

        {/* ================= PAST EVENTS ================= */}

        <section id="past">

          <div className={styles['section-header']}>
            <h2>Past Events</h2>
            <div className={styles['section-line']} />
          </div>

          {/* ================= FILTERS ================= */}

          <div className={styles['event-filters']}>

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`${styles['filter-btn']} ${activeFilter === filter
                    ? styles.active
                    : ''
                  }`}
              >
                {filter}
              </button>
            ))}

          </div>

          {/* ================= EVENT IMAGES ================= */}

          <div className={styles['poster-grid']}>

            {filteredEvents.map((event) => (

              <button
                type="button"
                className={styles['poster-card']}
                key={event.id}

                aria-label={`View details for ${event.title}`}
              >

                <div className={styles['completed-badge']}>
                  COMPLETED
                </div>

                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                />

              </button>

            ))}

          </div>

        </section>

      </main>

      {/* ================= EVENT DETAILS MODAL ================= */}

      {selectedEvent && (

        <div
          className={styles['event-modal-overlay']}
          onClick={() => setSelectedEvent(null)}
        >

          <div
            className={styles['event-modal']}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className={styles['modal-close']}
              onClick={() => setSelectedEvent(null)}
              aria-label="Close"
            >
              ×
            </button>

            <div className={styles['modal-image']}>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
              />
            </div>

            <div className={styles['modal-content']}>

              <span className={styles['modal-category']}>
                {selectedEvent.category}
              </span>

              <h2>{selectedEvent.title}</h2>

              <p>
                {selectedEvent.description}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Events;