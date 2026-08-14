import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <div className="header-inner">
                <div className="brand">
                    <img src="/images/VVITULogo_Final.png" alt="VVIT Logo" />
                    <span>VVITU</span>
                </div>
                <button className="nav-toggle" aria-label="Open navigation" aria-controls="main-nav" aria-expanded="false">
                    <i className="fa fa-bars"></i>
                </button>
                <nav id="main-nav">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/calender">Calendar</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
