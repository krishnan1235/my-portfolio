import React from 'react'

const About = () => {
  return (
    <div
      className="about flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen px-6 md:px-20 pt-10 bg-[var(--second-bg-color)]"
      id="about"
    >
      <div className="about-img">
        <img src="images/ChatGPT Image Jul 25, 2025, 02_11_45 PM.png" alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About<span> Me</span>
        </h2>
        <h3>Software Developer & ML Engineer</h3>
        <p>
          I am a B.Tech student specializing in Artificial Intelligence and
          Machine Learning, passionate about building innovative and scalable
          software solutions. With expertise in full-stack development and AI/ML,
          I have worked on projects spanning from e-commerce platforms to intelligent
          AI agents. I love solving complex problems and creating impactful solutions
          that make a difference.
        </p>
        <p>
          My recent work includes developing RAG (Retrieval-Augmented Generation) systems,
          AI-powered applications, and full-stack web solutions. I'm always eager to learn
          new technologies and take on challenging projects that push the boundaries of
          what's possible.
        </p>
        <a href="#contact" className="btn">
          Let's Connect
        </a>
      </div>
    </div>
  )
}

export default About
