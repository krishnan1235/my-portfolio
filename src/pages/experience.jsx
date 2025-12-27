import React from 'react';

const Experience = () => {
  // Experience data - Update this with your LinkedIn experience
  // Format: Add your work experiences, internships, or notable projects here
  const experiences = [
    // Example structure - replace with your actual experience
    // {
    //   id: 1,
    //   title: "Software Developer Intern",
    //   company: "Company Name",
    //   location: "City, Country",
    //   duration: "Month Year - Present", // or "Month Year - Month Year"
    //   description: [
    //     "Key responsibility or achievement 1",
    //     "Key responsibility or achievement 2",
    //     "Key responsibility or achievement 3"
    //   ],
    //   technologies: ["React", "Node.js", "MongoDB", "Express"]
    // },
    
    // TODO: Add your experiences from LinkedIn here
    // Copy your experiences from LinkedIn profile and format them like above
  ];
  
  // If no experiences added yet, show a message
  if (experiences.length === 0) {
    return (
      <section 
        className="experience-section w-full py-16 px-4 bg-[var(--bg-color)]"
        id="experience"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="heading text-center text-4xl font-bold mb-12">
            My <span>Experience</span>
          </h2>
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl mb-4">Experience section coming soon!</p>
            <p className="text-sm">Update this section in <code className="bg-[var(--second-bg-color)] px-2 py-1 rounded">src/pages/experience.jsx</code></p>
            <p className="text-sm mt-2">Add your work experiences, internships, or projects from LinkedIn.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="experience-section w-full py-16 px-4 bg-[var(--bg-color)]"
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="heading text-center text-4xl font-bold mb-12">
          My <span>Experience</span>
        </h2>

        <div className="experience-container relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--main-color)] to-transparent"></div>

          <div className="experience-list space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-8`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[var(--main-color)] rounded-full border-4 border-[var(--bg-color)] z-10"></div>

                {/* Experience card */}
                <div className={`experience-card w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                } bg-[var(--second-bg-color)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="experience-header mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-[var(--main-color)] text-lg font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                    <p className="text-gray-500 text-sm italic">{exp.duration}</p>
                  </div>

                  <ul className="experience-description space-y-2 mb-4">
                    {exp.description.map((point, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start">
                        <span className="text-[var(--main-color)] mr-2">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="technologies flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-tag px-3 py-1 bg-[var(--main-color)]/20 text-[var(--main-color)] rounded-full text-xs font-medium border border-[var(--main-color)]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

