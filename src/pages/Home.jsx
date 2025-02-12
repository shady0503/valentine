// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function Home() {
  const width = useWindowWidth();

  // Simple breakpoints
  const isMobile = width < 768;  // < 768px considered "mobile"
  const isSmallScreen = width < 480; // < 480px considered "very small" device

  // Container: if mobile, use 100% width; else use up to 1200px
  const containerStyle = {
    maxWidth: isMobile ? '100%' : '1200px',
    padding: '1rem',
    marginLeft: isMobile ? '15px' : '',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '70vh',
    height: '90vh',
  };

  const welcomeMessageStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const titleStyle = {
    marginBottom: '1rem',
    fontSize: isMobile ? '1.5rem' : '2rem',
  };

  const messageStyle = {
    fontSize: isMobile ? '1rem' : '1.1rem',
    marginBottom: '2rem',
    color: '#666',
  };

  // Menu cards container: use flex wrap, adjust gap
  const menuCardsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  };

  // Each card: fill width if on a very small screen, else 200px
  const menuCardStyle = {
    textDecoration: 'none',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    width: isSmallScreen ? '100%' : '200px',
    transition: 'transform 0.2s ease',
  };

  const cardIconStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
    display: 'block',
  };

  // For an extra highlight on the "special" card
  const specialStyle = {
    backgroundColor: '#ffe6e6',
  };

  // Optional hover effect for scaling
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'none';
  };

  return (
    <div className="container home-container" style={containerStyle}>
      <div className="welcome-message" style={welcomeMessageStyle}>
        <h1 className="title" style={titleStyle}>
          Welcome My Love
        </h1>
        <p className="message" style={messageStyle}>
          To a special place created just for you...
        </p>
        <div className="menu-cards" style={menuCardsStyle}>
          <Link
            to="/gallery"
            className="menu-card"
            style={menuCardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="card-icon" style={cardIconStyle}>📸</span>
            <h3>Our Memories</h3>
            <p>Revisit our beautiful moments together</p>
          </Link>

          <Link
            to="/letter"
            className="menu-card"
            style={menuCardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="card-icon" style={cardIconStyle}>💌</span>
            <h3>Love Letter</h3>
            <p>A special message from my heart</p>
          </Link>

          <Link
            to="/proposal"
            className="menu-card special"
            style={{ ...menuCardStyle, ...specialStyle }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="card-icon" style={cardIconStyle}>💝</span>
            <h3>Special Surprise</h3>
            <p>Click when you are ready...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
