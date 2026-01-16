import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'activities', label: 'Activities', icon: '✅' },
    ];

    return (
        <div className="glass" style={{
            width: '250px',
            margin: '1rem',
            padding: '1.5rem',
            height: 'calc(100vh - 2rem)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h2 className="gradient-text" style={{ marginBottom: '2rem' }}>Productivity</h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            background: activeTab === item.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            padding: '1rem',
                            borderRadius: '8px',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1rem'
                        }}
                    >
                        <span>{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
