import React from 'react';
import { motion } from 'framer-motion';
import GameSection from '../components/GameSection';
import GameCard3D from '../components/GameCard3D';
import TacticalFrame from '../components/TacticalFrame';
import GunIcon from '../components/GunIcon';

const skillsetp = [
  { name: 'Python', image: '/images/pngwing.com (2).png' },
  { name: 'Machine Learning', image: '/images/pngwing.com (2).png' },
  { name: 'Deep Learning', image: '/images/pngwing.com (2).png' },
  { name: 'LLM', image: '/images/pngwing.com (2).png' },
];

const skilldb = [
  { name: 'TensorFlow', image: '/images/pngwing.com (2).png' },
  { name: 'RAG', image: '/images/pngwing.com (2).png' },
  { name: 'Generative AI', image: '/images/pngwing.com (2).png' },
  { name: 'MongoDB', image: '/images/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  { name: 'PostgreSQL', image: '/images/images.png' },
];

const skillfront = [
  { name: 'HTML', image: '/images/HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', image: '/images/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', image: '/images/pngegg.png' },
  { name: 'React.js', image: '/images/imagesrea.png' },
];

function SkillCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ transform: 'none', perspective: 'none' }}
    >
      <GameCard3D intensity={0} static={true}>
        <TacticalFrame badge="SKILL" intensity="subtle" showCrosshair={false}>
          <div className="skill-box flex items-center justify-between gap-4 p-4 md:p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-cyan-500/40 transition-all">
            <h3 className="name text-lg font-bold text-white">{program.name}</h3>
            <img src={program.image} alt={program.name} className="w-12 h-12 object-contain" />
          </div>
        </TacticalFrame>
      </GameCard3D>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <GameSection id="skills" level="05" title={<>My <span>Skills</span></>} bg="dark" className="!min-h-0 !h-full flex flex-col justify-center !pt-0 !pb-24">
      <div className="max-w-6xl mx-auto space-y-6 px-4 h-full overflow-y-auto custom-scroll py-8">
        <div>
          <motion.h3
            className="category-heading text-xl font-semibold text-center mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GunIcon size={24} className="text-cyan-400" animated={true} />
            Programming & <span>AI/ML</span>
          </motion.h3>
          <div className="skill-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsetp.map((item, i) => (
              <SkillCard key={i} program={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="category-heading text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GunIcon size={24} className="text-cyan-400" animated={true} />
            Front <span>End</span>
          </motion.h3>
          <div className="skill-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillfront.map((item, i) => (
              <SkillCard key={i} program={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="category-heading text-xl font-semibold text-center mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GunIcon size={24} className="text-cyan-400" animated={true} />
            AI Tools & <span>Databases</span>
          </motion.h3>
          <div className="skill-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skilldb.map((item, i) => (
              <SkillCard key={i} program={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </GameSection>
  );
};

export default Skills;
