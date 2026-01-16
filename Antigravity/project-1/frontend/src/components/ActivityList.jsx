import React, { useState, useEffect } from 'react';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);
    const [newActivity, setNewActivity] = useState('');

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = () => {
        fetch('http://localhost:5000/api/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.error(err));
    };

    const addActivity = (e) => {
        e.preventDefault();
        if (!newActivity) return;

        fetch('http://localhost:5000/api/activities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newActivity })
        })
            .then(res => res.json())
            .then(data => {
                setActivities([data, ...activities]);
                setNewActivity('');
            })
            .catch(err => console.error(err));
    };

    const toggleActivity = (id) => {
        fetch(`http://localhost:5000/api/activities/${id}`, { method: 'PATCH' })
            .then(res => res.json())
            .then(updated => {
                setActivities(activities.map(a => a._id === id ? updated : a));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="glass" style={{ padding: '2rem' }}>
            <h2 className="gradient-text">My Activities</h2>

            <form onSubmit={addActivity} style={{ margin: '2rem 0', display: 'flex', gap: '1rem' }}>
                <input
                    type="text"
                    value={newActivity}
                    onChange={(e) => setNewActivity(e.target.value)}
                    placeholder="New activity..."
                    style={{
                        flex: 1,
                        padding: '0.8rem',
                        borderRadius: '8px',
                        border: '1px solid #334155',
                        background: '#1e293b',
                        color: 'white'
                    }}
                />
                <button type="submit" className="btn-primary">Add</button>
            </form>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activities.map(activity => (
                    <li key={activity._id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '1rem',
                        borderRadius: '8px',
                        borderLeft: activity.status === 'completed' ? '4px solid var(--primary-green)' : '4px solid transparent'
                    }}>
                        <span style={{
                            textDecoration: activity.status === 'completed' ? 'line-through' : 'none',
                            color: activity.status === 'completed' ? 'var(--text-secondary)' : 'var(--text-primary)'
                        }}>
                            {activity.name}
                        </span>
                        <button
                            onClick={() => toggleActivity(activity._id)}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--primary-green)',
                                color: 'var(--primary-green)',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem'
                            }}
                        >
                            {activity.status === 'completed' ? 'Undo' : 'Done'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;
