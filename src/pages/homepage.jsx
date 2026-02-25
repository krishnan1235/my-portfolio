import React from "react";
import { motion } from "framer-motion";
import CodeTyping from "../components/CodeTyping";
import GameCard3D from "../components/GameCard3D";
import TacticalFrame from "../components/TacticalFrame";
import GunIcon from "../components/GunIcon";
import CodingBoyHero from "../components/CodingBoyHero";

const Homepage = () => {
  return (
    <div
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden homepage-bg"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-[#0a0a0f] to-purple-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[length:32px_32px]" />

      <div
        className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px] opacity-50"
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-500/15 blur-[100px] opacity-40"
      />

      <div className="home flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-12 lg:px-20 pt-10 md:pt-0 pb-20 md:pb-0 gap-6 md:gap-16 lg:gap-40 text-white relative z-10">

        {/* LEFT SIDE - Cyberpunk Circle Photo */}
        <div
          className="home-img relative flex-shrink-0 order-1 md:order-1 flex justify-center w-full md:w-auto"
        >
          <TacticalFrame badge="ONLINE" showCrosshair intensity="strong" noAnimate className="inline-block">
            <div className="relative">
              {/* Outer ring - static */}
              <div
                className="absolute -inset-3 rounded-full opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, #22d3ee 15%, transparent 30%, #8338ec 50%, transparent 65%, #22d3ee 80%, transparent 100%)",
                }}
              />

              {/* Inner glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl" />

              {/* Main circle frame */}
              <GameCard3D className="relative" intensity={10} static={true}>
                <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/70 shadow-[0_0_50px_rgba(34,211,238,0.25),0_0_100px_rgba(34,211,238,0.1)]">
                  <img
                    src="/images/krishnan_t.png"
                    alt="Krishnan"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </GameCard3D>

              {/* Scan line effect */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                style={{ background: "linear-gradient(transparent 50%, rgba(34,211,238,0.03) 50%)", backgroundSize: "100% 4px" }}
              />
            </div>
          </TacticalFrame>
        </div>

        {/* RIGHT SIDE - Content */}
        <div
          className="home-content flex flex-col items-center text-center md:items-start md:text-left max-w-2xl order-2 md:order-2 w-full"
        >
          {/* Greeting */}
          <div className="flex items-center gap-2 sm:gap-3 text-cyan-400 font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase mb-3 md:mb-4">
            <GunIcon size={20} className="text-cyan-400" animated={false} />
            <span className="font-semibold">&gt; Hello, I'm</span>
          </div>

          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Krishnan
          </h1>

          {/* Enhanced Terminal */}
          <div className="w-full max-w-2xl mb-3 md:mb-4 mx-auto">
            <div className="relative">
              {/* Terminal outer glow */}
              <div className="absolute -inset-1 bg-cyan-500/15 rounded-2xl blur-xl" />

              {/* Terminal frame */}
              <div className="relative border-2 border-cyan-500/50 rounded-xl md:rounded-2xl overflow-hidden bg-black/90 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.15),inset_0_0_60px_rgba(34,211,238,0.03)]">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3.5 bg-gradient-to-r from-cyan-900/50 via-purple-900/40 to-cyan-900/50 border-b-2 border-cyan-500/40">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                      <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
                      <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-cyan-400 font-bold tracking-wide">TERMINAL</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="hidden sm:inline-block px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-300 border border-cyan-500/50 rounded-lg font-bold">
                      CODE
                    </span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg font-bold flex items-center gap-1 sm:gap-1.5">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="px-3 pb-3 pt-1 sm:px-4 sm:pb-4 md:px-6 md:pb-6 md:pt-2 overflow-hidden">
                  {/* Static prompt */}
                  <div className="font-mono text-xs sm:text-sm md:text-base mb-1 text-left">
                    <span className="text-purple-400 mr-2 sm:mr-4">❯</span>
                    <span className="text-gray-500">~/krishnan</span>
                    <span className="text-cyan-400 ml-1 sm:ml-2">$</span>
                  </div>

                  {/* Typing code */}
                  <div className="space-y-3">
                    <CodeTyping
                      lines={[
                        'import { Code, Innovation } from "krishnan.dev";',
                        '',
                        'const dev = {',
                        '  name: "Krishnan",',
                        '  role: "AIML Engineer",',
                        '  skills: ["Python", "ML", "GenAI"],',
                        '  leetcode: "350+"',
                        '};',
                        '',
                        'while (dev.isLearning) {',
                        '  dev.code();',
                        '  dev.innovate();',
                        '}',
                        'console.log("🚀 Building the Future");',
                      ]}
                      speed={50}
                      pauseAfter={3000}
                    />
                  </div>
                </div>

                {/* Terminal footer */}
                <div className="px-3 py-2 sm:px-5 sm:py-2.5 border-t-2 border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono text-cyan-500/80 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500 animate-pulse" />
                    ~/krishnan/portfolio
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4 max-w-xl text-slate-200/90"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-slate-100 to-purple-300">
              Building AI-powered solutions and full-stack applications
            </span>
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/krishnan_resume_off_c.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-xl font-semibold text-white overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <GunIcon size={18} className="text-white" animated={false} />
              <span className="text-white text-sm sm:text-base">Download CV</span>
              <span className="text-white">↓</span>
            </span>
          </motion.a>
        </div>
      </div>

      {/* 3D Coding Boy Widget — visible on md and above */}
      <motion.div
        className="hidden md:block absolute bottom-[-40px] left-[-80px] md:w-[360px] md:h-[340px] lg:w-[440px] lg:h-[440px] pointer-events-none z-20 rounded-full overflow-hidden"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 76%)',
          maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 76%)',
        }}
        animate={{ opacity: [0.78, 1, 0.82], scale: [0.985, 1, 0.99] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_45%_55%,rgba(34,211,238,0.36),transparent_60%)] blur-[18px]" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_60%_70%,rgba(168,85,247,0.24),transparent_66%)] blur-[20px]" />
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[85px]" />
      </motion.div>
      <CodingBoyHero className="hidden md:block absolute bottom-[-10px] left-[-60px] md:w-[420px] md:h-[340px] lg:w-[580px] lg:h-[430px] pointer-events-none z-30 opacity-95 drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]" />
    </div>
  );
};

export default Homepage;
