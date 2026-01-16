import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/quote')
            .then(res => res.json())
            .then(data => setQuote(data))
            .catch(err => console.error('Error fetching quote:', err));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 className="gradient-text">Welcome Back!</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Track your progress and stay motivated.</p>
            </header>

            {/* Stats/Hero Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="glass" style={{ padding: '2rem' }}>
                    <h3>Today's Focus</h3>
                    <p style={{ fontSize: '1.2rem' }}>Complete Frontend Setup</p>
                </div>

                <div className="glass" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,204,255,0.1))' }}>
                    <h3>Progress</h3>
                    <div style={{ background: 'rgba(255,255,255,0.1)', height: '10px', borderRadius: '5px', marginTop: '1rem' }}>
                        <div style={{ background: 'var(--gradient-main)', width: '75%', height: '100%', borderRadius: '5px' }}></div>
                    </div>
                    <p style={{ marginTop: '0.5rem', textAlign: 'right' }}>75%</p>
                </div>
            </div>

            {/* Quote Section */}
            <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3>Quote of the Day</h3>
                {quote ? (
                    <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', margin: '2rem 0' }}>
                        "{quote.text}"
                        <footer style={{ marginTop: '1rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>— {quote.author}</footer>
                    </blockquote>
                ) : (
                    <p>Loading inspiration...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
