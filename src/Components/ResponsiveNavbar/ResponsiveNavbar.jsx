import React, { useState } from 'react'
import './ResponsiveNavbar.css'


const ResponsiveNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
}

export default ResponsiveNavbar
