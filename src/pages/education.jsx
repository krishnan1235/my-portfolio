import React from 'react';
import { motion } from 'framer-motion';
import GameSection from '../components/GameSection';
import GameCard3D from '../components/GameCard3D';
import GunIcon from '../components/GunIcon';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    school: 'Sri Shakthi Institute of Engineering and Technology',
    location: 'Coimbatore, India',
    duration: '2020 - 2026',
    score: 'CGPA: 8.47/10',
  },
  {
    id: 2,
    degree: 'High School Certificate',
    school: 'The Leaders Matric Hr. Sec. School',
    location: 'Karaikudi, India',
    duration: '2020 - 2022',
    score: 'State Board — 84.66%',
  },
  {
    id: 3,
    degree: 'SSLC',
    school: 'MRP Matriculation School',
    location: 'Alagapuri, India',
    duration: '2019 - 2020',
    score: 'State Board — 93%',
  },
];

const Education = () => {
  return (
    <GameSection id="education" level="02" title={<>My <span>Education</span></>} bg="dark" className="!min-h-0 !h-full flex flex-col justify-center !pt-0 !pb-24">
      <div className="education-container relative max-w-4xl mx-auto h-full overflow-y-auto custom-scroll px-4 py-8">
        <div className="timeline-line absolute left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent top-0" />
        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`education-item relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-6`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ transform: 'none', perspective: 'none' }}
            >
              <div className="timeline-dot absolute left-6 md:left-1/2 w-3 h-3 bg-cyan-500 rounded-full border-4 border-[#0a0a0f] z-10 md:-translate-x-1/2" />
              <GameCard3D
                className={`education-card w-full md:w-[48%] p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition-all ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                  }`}
                intensity={0}
                static={true}
              >
                <div className="education-header static-content">
                  <div className="flex items-center gap-2 mb-2">
                    <GunIcon size={16} className="text-cyan-400" animated={true} />
                    <p className="font-mono text-cyan-400/90 text-sm font-semibold">// education[{index + 1}]</p>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{edu.school}</p>
                  <p className="text-gray-500 text-sm mb-1">{edu.location}</p>
                  <p className="text-gray-500 text-sm italic mb-1">{edu.duration}</p>
                  <p className="text-gray-300 text-sm font-medium">{edu.score}</p>
                </div>
              </GameCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </GameSection>
  );
};

export default Education;
