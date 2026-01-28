import React from "react";
import { motion } from "framer-motion";
import Typing from "../components/Typing";
import CodeTyping from "../components/CodeTyping";
import GameCard3D from "../components/GameCard3D";
import TacticalFrame from "../components/TacticalFrame";
import GunIcon from "../components/GunIcon";
import TerminalWindow from "../components/TerminalWindow";
import GunBackground from "../components/GunBackground";

const Homepage = () => {
  return (
    <div
      className="h-auto md:min-h-[100vh] w-full relative flex items-center justify-center overflow-hidden homepage-bg"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-[#0a0a0f] to-purple-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[length:32px_32px]" />
      
      {/* Static gun background */}
      <GunBackground />

      <motion.div
        className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px]"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-500/15 blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="home flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-16 lg:px-24 pt-24 md:pt-16 gap-10 md:gap-16 text-white relative z-10">
        <motion.div
          className="home-content flex flex-col items-start md:items-start text-left md:text-left max-w-2xl"
          initial={{ opacity: 0, x: -80, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-cyan-400 font-mono text-sm md:text-base tracking-widest uppercase mb-3"
          >
            <GunIcon size={24} className="text-cyan-400" animated={true} />
            <span className="font-semibold">&gt; Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="cyber-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4 tracking-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <Typing phrases={["Krishnan", "Developer", "Coder"]} speed={90} pause={1600} />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            <TerminalWindow badge="CODE" className="max-w-xl">
              <CodeTyping
                lines={[
                  'const role = "AIML Engineer";',
                  'await build().ship();',
                  '// ML • Full-Stack • GenAI',
                  'weapon.load("Python"); weapon.fire();',
                ]}
                speed={45}
                pauseAfter={2200}
              />
            </TerminalWindow>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Building AI-powered solutions and full-stack applications. Passionate about ML, GenAI, and turning ideas into impact.
          </motion.p>

          <motion.a
            href="/krishnan_resume_off_c.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white overflow-hidden border border-cyan-500/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <GunIcon size={20} className="text-white" animated={true} />
              <span>Download CV</span>
              <span className="text-sm">↓</span>
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          className="home-img relative flex-shrink-0"
          initial={{ opacity: 0, x: 80, rotateY: 8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1200 }}
        >
          <TacticalFrame badge="ONLINE" showCrosshair intensity="strong" noAnimate className="inline-block">
            <GameCard3D className="relative" intensity={14}>
              <div className="hero-photo-cyber relative">
                <div className="hero-photo-glow" />
                <div className="hero-photo-border" />
                <motion.img
                  src="images/ChatGPT Image Jul 25, 2025, 02_11_45 PM.png"
                  alt="Krishnan"
                  className="hero-photo-img relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </GameCard3D>
          </TacticalFrame>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
