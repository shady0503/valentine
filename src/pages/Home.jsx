// src/pages/Home.js
import 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-container">
      <div className="welcome-message">
        <h1 className="title">Welcome My Love</h1>
        <p className="message">To a special place created just for you...</p>
        <div className="menu-cards">
          <Link to="/gallery" className="menu-card">
            <span className="card-icon">📸</span>
            <h3>Our Memories</h3>
            <p>Revisit our beautiful moments together</p>
          </Link>
          <Link to="/letter" className="menu-card">
            <span className="card-icon">💌</span>
            <h3>Love Letter</h3>
            <p>A special message from my heart</p>
          </Link>
          <Link to="/proposal" className="menu-card special">
            <span className="card-icon">💝</span>
            <h3>Special Surprise</h3>
            <p>Click when you are ready...</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
