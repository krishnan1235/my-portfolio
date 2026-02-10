  import React from 'react';
  import { motion } from 'framer-motion';
  import GameSection from '../components/GameSection';
  import GameCard3D from '../components/GameCard3D';
  import CodeTyping from '../components/CodeTyping';
  import TerminalWindow from '../components/TerminalWindow';
  import GunIcon from '../components/GunIcon';

  const About = () => {
    return (
      <GameSection id="about" level="01" compact className="flex flex-col justify-center pb-10 md:pb-2">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-24 px-4 sm:px-6 md:px-10 relative w-full max-w-[1200px] mx-auto">
          <motion.div
            className="about-img relative w-full lg:w-[50%] flex justify-center flex-shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl -z-10" />
              <motion.img
                src="/images/krishnan_t.png"
                alt="Krishnan"
                className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.3)] aspect-square"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="about-content relative z-10 w-full lg:flex-1 max-w-5xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            style={{ transform: 'none', perspective: 'none' }}
          >
            <div className="bg-black/70 border border-cyan-500/20 rounded-2xl p-3 md:p-4 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.18)]">
              <div className="flex items-center gap-2 mb-2">
                <GunIcon size={20} className="text-cyan-400" />
                <h2
                  className="text-left mb-0 text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Me</span>
                </h2>
              </div>
              <div className="static-content text-[10px] md:text-[12px]">
                <p className="font-mono text-cyan-300/90 text-xs mb-2">&gt; role = "AI Engineer"</p>
                <TerminalWindow badge="SKILLS" className="mb-3">
                  <CodeTyping
                    lines={[
                      '// Python • AI • DSA',
                      '// Full‑stack & MLOps',
                      '// LeetCode 350+'
                    ]}
                    className="text-[10px] md:text-[12px]"
                    speed={50}
                  />
                </TerminalWindow>
                <p className="text-xs md:text-sm text-slate-200/60 leading-snug mb-2">
                  I am an AI Engineer pursuing a B.Tech in Artificial Intelligence and Machine Learning, with strong expertise in Python and Data Structures & Algorithms (350+ LeetCode).
                </p>
                <p className="text-xs md:text-sm text-slate-200/85 leading-snug mb-3">
                  I build complete AI-powered products — from data pipelines and machine learning models to RAG systems, LLM agents, and full-stack applications. I enjoy turning complex ideas into impactful, real-world solutions using Generative AI and Deep Learning.
                </p>
              </div>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-500/40"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <GunIcon size={20} className="text-white" animated={true} />
                <span>Let's Connect</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </GameSection>
    );
  };

  export default About;
