// src/components/Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
        Our Photos
      </NavLink>
      <NavLink to="/letter" className={({ isActive }) => (isActive ? "active" : "")}>
        Love Letter
      </NavLink>
      <NavLink to="/proposal" className={({ isActive }) => (isActive ? "active" : "")}>
        Special Surprise ❤️
      </NavLink>
    </nav>
  );
}

export default Navigation;
