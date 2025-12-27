import React from "react";
import { PinContainer } from "../lib/3d-pin";

const projects = [
  {
    title: "EcomRAG",
    description: "E-commerce platform enhancement with Retrieval-Augmented Generation (RAG). Enables smart product search, order tracking, and cart insights using MongoDB data with natural language generation for personalized shopping assistance.",
    link: "https://github.com/krishnan1235/EcomRAG",
    img:"images/Screenshot 2025-04-16 100810.png"
  },
  {
    title: "AI Hospital Receptionist",
    description: "AI-powered hospital receptionist system using advanced NLP and machine learning to assist patients with appointments, queries, and hospital services through intelligent conversational interface.",
    link: "https://github.com/krishnan1235/AI-Hospital-Receptionist",
    img:"images/Screenshot 2025-04-16 101234.png"
  },
  {
    title: "Job Role Analysis Agent",
    description: "Intelligent job role analysis system that leverages AI to analyze job descriptions, match candidates, and provide insights on role requirements and market trends.",
    link: "https://github.com/krishnan1235/job-role-analysis-agent",
    img:"images/Your paragraph text.png"
  },
  {
    title: "GreenHaven",
    description: "E-commerce website for plant sales using React, Express, and MongoDB. Features user authentication, product listings, and a secure checkout system. Deployed on Vercel.",
    link: "https://github.com/krishnan1235/e-commerse-Greenhaven",
    img:"images/Screenshot 2025-04-16 100810.png"
  },
  {
    title: "Stock Price Prediction",
    description: "Stock price prediction system using machine learning to analyze historical data. Forecasts future stock prices using advanced ML algorithms to assist in making informed investment decisions.",
    link: "https://github.com/krishnan1235/stock-price-prediction",
    img:"images/Screenshot 2025-04-16 114735.png"
  },
  {
    title: "Drowsiness Detection",
    description: "Drowsiness detection system using computer vision to track eye and head movements. Triggers real-time alerts to prevent accidents caused by driver fatigue.",
    link: "https://github.com/krishnan1235/Drowsiness-Detection",
    img:"images/Screenshot 2025-04-16 101234.png"
  }
];

const Project = () => {
  return (
    <section 
      className="w-full py-16 px-4 overflow-hidden "
      id="project"
      style={{
        background: `
          radial-gradient(#fff 1px, transparent 1px), 
    radial-gradient(#ffcad4 1px, transparent 1px)
        `,
        backgroundColor: "#0006",
        backgroundPosition: "0 0, 25px 25px",
        backgroundSize: "50px 50px",
        position: "relative",
        zIndex: 1,
        // animation:"moveDots 5s infinite linear"
      }}
    >
      <h2 className="heading text-center text-3xl font-bold mb-8">
        Latest <span> Projects</span>
      </h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <PinContainer key={index} title={project.link} href={project.link}>
            <div className="project-box">
              <div className="flex flex-col p-6 gap-4 tracking-tight text-slate-100/50 w-[26rem] h-[26rem] bg-black/20 rounded-xl">
                <h3 className="text-xl font-bold text-slate-100">
                  {project.title}
                </h3>
                <p className="text-lg font-medium text-slate-400">
                  {project.description}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer"></a>
                <img src={project.img} alt="" className="pimg" />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Project;
