import React from 'react';
// import { HoverBorderGradient } from "../components/hover-border-gradient";
import { LuLinkedin } from "react-icons/lu";
// import { ButtonsCard } from "../components/tailwindcss-buttons.jsx";


const Homepage = () => {
  return (
    <div
      className="h-[70rem] w-full bg-black bg-dot-white/[0.5] bg-dot-black/[0.1] relative flex items-center justify-center ">
        
        <div className="home flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-40 pt-10 gap-8 text-white" id="home">
    <div className="home-content">
      <h3>Hello,</h3>
      <h1>I'm Krishnan</h1>
      <h3> A Passionate    <span > Software Developer</span></h3>
      <p> I am an aspiring Machine Learning engineer and a full-stack enthusiast, deeply passionate about using technology to solve real-world challenges. I aim to create impactful solutions that drive innovation</p>
      {/* <div className="socila-media">
        <a href="#"><LuLinkedin   className='aa'/></a>
        <a href="#"></a>
        <a href="#"></a>
      </div> */}
      {/* <a href="#" className='btn'>Download CV</a> */}
      <a href="/krishnan_resume_off_c.pdf" download className="animated-border-button">
  <span className="button-text">Download CV</span>
</a>

   
   
      
      {/* <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >   
        Aceternity UI
      </HoverBorderGradient> */}
 

    </div>
      <div className="home-img">
        <img src="images/ChatGPT Image Jul 25, 2025, 02_11_45 PM.png" alt="Krish" className='krish_img'/>
      </div>
   </div>
   </div>
  )
}

export default Homepage
