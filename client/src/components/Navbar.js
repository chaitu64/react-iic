import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

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


    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="header-inner">
                <div className="brand">
                    <img src="/images/VVITULogo_Final.png" alt="VVITU Logo" />
                    <img src="/images/IIC.png" alt="IIC Logo" />
                </div>

                <div className="nav-right">
                    <nav id="main-nav" className={menuOpen ? 'open' : ''}>
                        <Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/events" className={currentPath === '/events' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Events</Link>
                        <Link to="/calender" className={currentPath === '/calender' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Calendar</Link>
                        <Link to="/gallery" className={currentPath === '/gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Gallery</Link>
                        <Link to="/teams" className={currentPath === '/teams' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Teams</Link>
                        <Link
                            to="/challenge"
                            className={`nav-live-link ${currentPath === '/challenge' ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                            title="Challenge is LIVE NOW — Click to view details and teams"
                            aria-label="Challenge - Live Now"
                        >
                            <span className="live-indicator" aria-hidden="true">
                                <span className="live-ping"></span>
                                <span className="live-dot"></span>
                            </span>
                            <span className="live-label">Challenge</span>
                            <span className="live-tag">LIVE</span>
                        </Link>
                        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</Link>
                    </nav>


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
