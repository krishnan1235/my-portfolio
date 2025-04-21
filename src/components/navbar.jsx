import React from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className='header'>
      
      <a href="#" className='logo'><img src="public/images/644617.png" alt=""/></a>
      <FaBars id="menu-bar" />

      <nav className='navbar'>
        <a href="#home" className='active'>Home</a> 
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a> 

      </nav>
    
    </div>
    
    </>
  );
}

export default Navbar