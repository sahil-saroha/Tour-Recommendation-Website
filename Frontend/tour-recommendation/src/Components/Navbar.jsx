import React, { useState } from 'react';
import '../index.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">TravelMate</div>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="/">Home</a>
        <a href="/tours">Tours</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
