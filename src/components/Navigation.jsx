import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  // Base styling for the navigation wrapper
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    gap: '2rem', // space between links
  };

  // A base style for all NavLink items
  const linkBaseStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    transition: 'color 0.2s ease-in-out',
  };

  return (
    <nav style={navStyle}>
      {/* Home Link */}
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          ...linkBaseStyle,
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'crimson' : linkBaseStyle.color,
        })}
      >
        Home
      </NavLink>

      {/* Our Photos Link */}
      <NavLink
        to="/gallery"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'crimson' : linkBaseStyle.color,
        })}
      >
        Our Photos
      </NavLink>

      {/* Love Letter Link */}
      <NavLink
        to="/letter"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'crimson' : linkBaseStyle.color,
        })}
      >
        Love Letter
      </NavLink>

      {/* Special Surprise Link */}
      <NavLink
        to="/proposal"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'crimson' : linkBaseStyle.color,
        })}
      >
        Special Surprise ❤️
      </NavLink>
    </nav>
  );
}

export default Navigation;
