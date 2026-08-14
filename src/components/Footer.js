import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer style={{ background: '#111', color: '#fff', padding: '60px 0 0 0', marginTop: 0 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <div className="footer-grid">
                    <div>
                        <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>VVIT IIC</h4>
                        <p style={{ color: '#bbb', lineHeight: '1.7', fontSize: '15px' }}>
                            Institution's Innovation Council (IIC) promotes innovation and entrepreneurship within academic institutions.
                        </p>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px' }}>Quick Links</h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><Link to="/" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Home</Link></li>
                            <li><Link to="/events" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Events</Link></li>
                            <li><Link to="/gallery" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Gallery</Link></li>
                            <li><Link to="/teams" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Teams</Link></li>
                            <li><Link to="/contact" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px' }}>Resources</h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><a href="https://yukti.mic.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>YUKTI</a></li>
                            <li><a href="https://mic.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>MIC</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px' }}>Contact</h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li><Link to="/contact" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li><Link to="/teams" style={{ color: '#bbb', display: 'block', padding: '4px 0', textDecoration: 'none' }}>Teams</Link></li>
                        </ul>
                    </div>
                </div>
                <hr style={{ border: 0, borderTop: '1px solid #222', margin: '40px 0 24px 0' }} />
                <p style={{ color: '#888', fontSize: '14px', margin: '32px 0 0 0', paddingBottom: '32px' }}>
                    &copy; {new Date().getFullYear()} Institution's Innovation Council. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
