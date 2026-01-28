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
        <img src="/images/student-avatar-illustration-user-profile-icon-youth-simple-cartoon-portrait-vector-276205499.png" alt="Logo" />
      </a>


      {menuActive ? (
        <RxCross2 onClick={toggleMenu} className="menu-icon" />
      ) : (
        <FaBars onClick={toggleMenu} className="menu-icon" />
      )}


      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>  {/* This must be exactly #about */}
        <a href="#experience" onClick={toggleMenu}>Experience</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#education" onClick={toggleMenu}>Education</a>
        <a href="#project" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>

    </header>
  );
};

export default Navbar;
