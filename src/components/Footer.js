import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
    return (
        <footer className="footer sm:footer-horizontal custom-footer" style={{ background: '#111', color: '#fff', padding: '60px 40px', marginTop: 0 }}>
            <aside className="footer-aside">
                <img src="/images/IIC.png" alt="IIC Logo" style={{ height: '80px', width: 'auto', display: 'block', objectFit: 'contain' ,alignItems:'left',justifyContent:'left',marginLeft:'0',marginRight:'auto'}} />
                <p style={{ marginTop: '16px', lineHeight: '1.6', color: '#bbb' }}>
                    {/* <strong style={{ color: '#fff', fontSize: '18px' }}>VVIT IIC</strong> */}
                    <br />
                    Institution's Innovation Council
                    <br />
                    Promoting entrepreneurship since 2018
                </p>
                <p style={{ color: '#666', fontSize: '14px', marginTop: '16px' }}>
                    &copy; {new Date().getFullYear()} VVITU IIC. All rights reserved.
                </p>
            </aside>
            <nav className="footer-nav">
                <h6 className="footer-title">Quick Links</h6>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/events" className="link link-hover">Events</Link>
                <Link to="/gallery" className="link link-hover">Gallery</Link>
                <Link to="/teams" className="link link-hover">Teams</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </nav>
            <nav className="footer-nav">
                <h6 className="footer-title">Resources</h6>
                <a href="https://yukti.mic.gov.in/" target="_blank" rel="noopener noreferrer" className="link link-hover">YUKTI Database</a>
                <a href="https://mic.gov.in/" target="_blank" rel="noopener noreferrer" className="link link-hover">MoE Innovation Cell</a>
            </nav>
            <nav className="footer-nav">
                <h6 className="footer-title">Contact</h6>
                <Link to="/contact" className="link link-hover">Get in touch</Link>
                <Link to="/teams" className="link link-hover">Meet the board</Link>
                <Link to="/contact" className="link link-hover">Help & Support</Link>
            </nav>
        </footer>
    );
}

export default Footer;
