import React from 'react'

const About = () => {
  return (
    <div
      className="about flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen px-6 md:px-20 pt-10 bg-[var(--second-bg-color)]"
      id="about"
    >
      <div className="about-img">
        <img src="images/644617.png" alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About<span> Me</span>
        </h2>
        <h3>Software Developer</h3>
        <p>
          I am a B.Tech student specializing in Artificial Intelligence and
          Machine Learning, passionate about building innovative and scalable
          software solutions...
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </div>
  )
}

export default About
