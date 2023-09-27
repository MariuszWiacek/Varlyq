// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; 
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Logo */}
      <div className="navbar-brand" style={{ width: '15%' }}>
        <img src={logo} alt="Logo" height="30" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-nav" style={{ width: '85%' }}>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item separator">&gt;</li>
        <li className="nav-item">
          <Link to="/documents">Basic Information</Link>
        </li>
        <li className="nav-item separator">&gt;</li>
        <li className="nav-item">
          <Link to="/factilities">Factilities</Link>
        </li>
        <li className="nav-item separator">&gt;</li>
        <li className="nav-item">
          <Link to="/insurance">Insurance</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
