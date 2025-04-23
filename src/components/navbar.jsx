import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="public/images/644617.png" alt="Logo" />
      </a>

      {/* Toggle between hamburger and close icons */}
      {menuActive ? (
        <RxCross2 onClick={toggleMenu} className="menu-icon" />
      ) : (
        <FaBars onClick={toggleMenu} className="menu-icon" />
      )}

      {/* Navigation Links */}
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#project" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
