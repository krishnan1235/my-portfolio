import React from 'react';
import { motion } from 'framer-motion';
import GameSection from '../components/GameSection';
import GameCard3D from '../components/GameCard3D';
import CodeTyping from '../components/CodeTyping';
import TerminalWindow from '../components/TerminalWindow';
import GunIcon from '../components/GunIcon';

const About = () => {
  return (
    <GameSection id="about" level="01" bg="dark" className="about-section">
      <div className="about flex flex-col md:flex-row justify-center items-center gap-10 min-h-[80vh] px-4 md:px-12 relative">
        <motion.div
          className="about-img relative"
          initial={{ opacity: 0, x: -60, rotateY: -12 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          style={{ perspective: 1000 }}
        >
          <GameCard3D className="relative" intensity={10}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl -z-10" />
            <motion.img
              src="/images/krishnan_t.png"
              alt="Krishnan"
              className="w-[35vw] max-w-[380px] rounded-2xl border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </GameCard3D>
        </motion.div>

        <motion.div
          className="about-content relative z-10 max-w-2xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          style={{ transform: 'none', perspective: 'none' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <GunIcon size={24} className="text-cyan-400" />
            <h2 className="heading text-left md:text-left mb-0">
              About <span>Me</span>
            </h2>
          </div>
          <div className="static-content">
            <p className="font-mono text-cyan-400/80 text-sm mb-4">&gt; role = &quot;AI Engineer&quot;</p>
            <TerminalWindow badge="SKILLS" className="mb-4">
              <CodeTyping
                lines={[
                  '// Python • AI • DSA • LeetCode 300+',
                  'stack.push("ML"); stack.push("GenAI");',
                  'weapon.aim("Full-Stack"); weapon.fire();'
                ]}
                speed={55}
                pauseAfter={1800}
              />
            </TerminalWindow>
            <h3 className="text-xl font-semibold text-white mt-6 mb-4">AI Engineer</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am an AI Engineer currently pursuing B.Tech in Artificial Intelligence and Machine Learning.
              I have strong proficiency in Python, AI, Data Structures & Algorithms, and have solved 300+
              problems on LeetCode to strengthen my problem-solving skills.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              I specialize in Machine Learning, Generative AI, and Deep Learning, building full-stack
              applications with AI-powered features. My expertise includes RAG systems, NLP-based
              solutions, transformer models, and computer vision applications.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Hands-on experience in front-end (React.js, HTML, CSS, JavaScript) and full-stack
              development, creating scalable applications that integrate AI to solve real-world problems.
            </p>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-500/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <GunIcon size={20} className="text-white" animated={true} />
            <span>Let's Connect</span>
          </motion.a>
        </motion.div>
      </div>
    </GameSection>
  );
};

export default About;
