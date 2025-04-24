import React from 'react'

const About = () => {
  return (
//     <div className="h-[70rem] w-full bg-black relative flex items-center justify-center overflow-hidden">
 
//   <div className="absolute inset-0 border-4 border-white opacity-30 animate-borderGlow"></div>

 
//   <div className="absolute inset-0 bg-gradient-to-r from-[#000] to-[#fff] opacity-15 z-0 animate-slowGlow"></div>


//   <div className="z-10 text-white text-5xl font-semibold text-center">
//     <h1>Embrace the Minimalistic Future</h1>
//     <p className="mt-4 text-xl">A fusion of simplicity and elegance in a black and white world.</p>
//   </div>
// </div>

//     <div className="h-[70rem] w-full bg-black relative flex items-center justify-center overflow-hidden">
  
//   <div className="absolute inset-0 bg-gradient-to-r from-[#ff0080] to-[#00b3b3] opacity-30 z-0 animate-glow"></div>


//   <div className="absolute inset-0 bg-gradient-to-r from-[#00fff7] to-[#ff00e6] opacity-30 rounded-full animate-particleEffect"></div>

  
//   <div className="z-10 text-white text-4xl font-extrabold flex items-center justify-center">
//     <div className="text-center">
//       <h1>Welcome to the Future ✨</h1>
//       <p className="mt-4 text-lg">Explore the unseen with the glow of technology.</p>
//     </div>
//   </div>
// </div>

<div className="about flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen px-6 md:px-20 pt-10 bg-[var(--second-bg-color)]">
    <div className="about-img">
    <img src="images/644617.png" alt=""></img>
    </div>
    <div className="about-content">
    <h2 className="heading">About<span> Me</span></h2>
    <h3>Software Developer</h3>
    <p>I am a B.Tech student specializing in Artificial Intelligence and
Machine Learning, passionate about building innovative and scalable
software solutions. With a strong foundation in Python, SQL, and
front-end technologies like React,I am eager to collaborate with
dynamic teams, contribute to impactful projects, and apply my
software development expertise to real-world challenges.

    </p>
    <a href="#" className='btn'>Read More</a>
    </div>
    </div>
  )
}

export default About