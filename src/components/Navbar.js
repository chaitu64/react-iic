import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const [query, setQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Initialize theme from localStorage or system preference
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        } else {
            setIsDarkMode(false);
            document.body.classList.remove('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('app-theme', 'light');
            setIsDarkMode(false);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('app-theme', 'dark');
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const q = query.toLowerCase();
        if (!q) return;

        if (q.includes('event') || q.includes('hackathon') || q.includes('workshop')) {
            navigate('/events');
        } else if (q.includes('gallery') || q.includes('photo')) {
            navigate('/gallery');
        } else if (q.includes('team') || q.includes('president') || q.includes('member') || q.includes('faculty')) {
            navigate('/teams');
        } else if (q.includes('contact') || q.includes('join') || q.includes('touch')) {
            navigate('/contact');
        } else if (q.includes('calendar') || q.includes('upcoming') || q.includes('date')) {
            navigate('/calender');
        } else {
            navigate('/gallery');
        }
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="header-inner">
                <div className="brand">
                    <img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
                    <img src="/images/IIC.png" alt="IIC Logo" />
                </div>

                <div className="nav-right">
                    <nav id="main-nav" className={menuOpen ? 'open' : ''}>
                        <Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/events" className={currentPath === '/events' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Events</Link>
                        <Link to="/calender" className={currentPath === '/calender' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Calendar</Link>
                        <Link to="/gallery" className={currentPath === '/gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Gallery</Link>
                        <Link to="/teams" className={currentPath === '/teams' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Teams</Link>
                        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>

                    <div className="nav-search-container" style={{ display: 'flex', alignItems: 'center' }}>
                        <form onSubmit={handleSearch} className="nav-search-form">
                            <input
                                type="text"
                                className="nav-search-input"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button type="submit" className="nav-search-button" aria-label="Search">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </form>
                        <button
                            className="theme-toggle-btn"
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    <button 
                        className="nav-toggle" 
                        aria-label="Open navigation" 
                        aria-controls="main-nav" 
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
