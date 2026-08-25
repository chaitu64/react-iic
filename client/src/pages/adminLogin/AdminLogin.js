import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './adminLogin.module.css';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch("http://localhost:5000/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAdmin', 'true');
                navigate('/sih2026'); // Redirects back to the SIH page
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Server error. Ensure backend is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <h2>Admin Authentication</h2>
                <form onSubmit={handleLogin} className={styles.form}>
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.inputGroup}>
                        <label>Admin Email ID</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                        {loading ? 'Authenticating...' : 'Login securely'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
