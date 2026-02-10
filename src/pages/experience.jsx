import React from 'react';
import { motion } from 'framer-motion';
import GameSection from '../components/GameSection';
import GameCard3D from '../components/GameCard3D';
import GunIcon from '../components/GunIcon';
import TerminalWindow from '../components/TerminalWindow';

const experiences = [
  {
    id: 1,
    title: 'Software Developer Intern',
    company: 'Ziffity Solutions',
    location: 'Chennai, Tamil Nadu, India',
    duration: 'Nov 2025 - Present',
    description: [
      'Working on AI-powered projects implementing MCP (Model Context Protocol) for enhanced model interactions',
      'Developing multistep reasoning systems to solve complex AI problems and improve decision-making processes',
      'Building intelligent chatbots with advanced NLP capabilities for customer interaction and support',
      'Training and fine-tuning ML models for various applications, optimizing performance and accuracy',
      'Implementing full-stack AI solutions with modern technologies and best practices',
    ],
    technologies: ['Python', 'AI', 'MCP', 'Machine Learning', 'NLP', 'Chatbot Development', 'Model Training', 'FastAPI'],
  },
];

const Experience = () => {
  return (
    <GameSection id="experience" level="03" title={<>My <span>Experience</span></>} bg="dark" className="flex flex-col justify-center pb-24">
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
            style={{ transform: 'none', perspective: 'none' }}
          >
            <GameCard3D
              className="experience-card w-full p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] transition-all"
              intensity={0}
              static={true}
            >
              <div className="static-content">
                <div className="flex items-center gap-2 mb-3">
                  <GunIcon size={18} className="text-cyan-400" animated={true} />
                  <p className="font-mono text-cyan-400/90 text-sm font-semibold">// experience[{index + 1}]</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {exp.title}
                </h3>
                <p className="text-cyan-400 text-lg font-semibold mb-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.location}</p>
                <p className="text-gray-500 text-sm italic mb-4">{exp.duration}</p>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GameCard3D>
          </motion.div>
        ))}
      </div>
    </GameSection>
  );
};

export default Experience;
