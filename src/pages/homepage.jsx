import React from 'react';
// import { HoverBorderGradient } from "../components/hover-border-gradient";
import { LuLinkedin } from "react-icons/lu";
// import { ButtonsCard } from "../components/tailwindcss-buttons.jsx";


const Homepage = () => {
  return (
   <div className="home" id="home">
    <div className="home-content">
      <h3>Hi,</h3>
      <h1>I'm Krishnan</h1>
      <h3>And I'm a <span >Software Developer</span></h3>
      <p>I’m an aspiring AIML engineer and a full-stack enthusiast passionate about solving real-world problems through technology</p>
      {/* <div className="socila-media">
        <a href="#"><LuLinkedin   className='aa'/></a>
        <a href="#"></a>
        <a href="#"></a>
      </div> */}
      {/* <a href="#" className='btn'>Download CV</a> */}
      <button className="animated-border-button">Download CV</button>

   
   
      
      {/* <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >   
        Aceternity UI
      </HoverBorderGradient> */}
 

    </div>
      <div className="home-img">
        <img src="/images/644617.png" alt="Krish" className='krish_img'/>
      </div>
   </div>
  )
}

export default Homepage
