import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            padding: '40px',
            background: '#fff'
        }}>
            <h1 style={{ fontSize: '100px', fontWeight: '900', color: 'var(--orange, #F4A238)', margin: '0 0 20px 0', lineHeight: 1 }}>404</h1>
            <h2 style={{ fontSize: '32px', color: '#111', margin: '0 0 16px 0', fontWeight: '700' }}>Page Not Found</h2>
            <p style={{ color: '#666', fontSize: '18px', maxWidth: '500px', margin: '0 0 32px 0', lineHeight: '1.6' }}>
                Oops! Looks like you've wandered too far off the innovation track. The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" style={{
                background: 'var(--orange, #F4A238)',
                color: '#fff',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'transform 0.2s'
            }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
                Return to Homepage
            </Link>
        </div>
    );
}

export default PageNotFound;
