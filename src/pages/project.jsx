import React from "react";
import { PinContainer } from "../lib/3d-pin";

const projects = [
  {
    title: "GreenHaven",
    description: "E-commerce website for plant sales using React, Express, and MongoDB. It features user authentication, product listings, and a secure checkout system.",
    link: "https://github.com/krishnan1235/e-commerse-Greenhaven",
    img:"images/Screenshot 2025-04-16 100810.png"
  },
  {
    title: "Drowsiness Detection",
    description: "Drowsiness detection system using computer vision to track eye and head movements. It triggers real-time alerts to prevent accidents caused by driver fatigue    ",
    link: "https://github.com/krishnan1235/Drowsiness-Detection",
    img:"images/Screenshot 2025-04-16 101234.png"
  },
  {
    title: "YouTube History Sentiment Analysis",
    description: "Sentiment analysis platform to analyze YouTube watch history and categorize user preferences based on viewed content",
    link: "https://github.com/Muthuraja997/Youtube-History-Analysis",
    img:"images/Your paragraph text.png"
  },
  {
    title: "Stock price prediction",
    description: "Stock price prediction system using machine learning to analyze historical data. It forecasts future stock prices to assist in making informed investment decisions",
    link: "https://github.com/krishnan1235/stock-price-prediction",
    img:"images/Screenshot 2025-04-16 114735.png"
  },
  {
    title: "Online Voting System",
  description: "A secure and user-friendly online voting system designed to streamline the election process. It ensures voter authentication, real-time vote counting, and transparent results.",
  link: "https://github.com/krishnan1235/voting_system",
    img:"images/Voting-image-6-scaled.jpg"
  }
];

const Project = () => {
  return (
    
    <section className="project py-12 px-4" id="project">
      <h2 className="heading text-center text-3xl font-bold mb-8">
        Latest <span> Projects</span>
      </h2>

      <div className="project-container">
      {/* div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10"> */}
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
                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
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
