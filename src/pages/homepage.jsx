import React from "react";
import { motion } from "framer-motion";
import CodeTyping from "../components/CodeTyping";
import GameCard3D from "../components/GameCard3D";
import TacticalFrame from "../components/TacticalFrame";
import GunIcon from "../components/GunIcon";
import GunBackground from "../components/GunBackground";
import CodingBoyWidget from "../components/CodingBoyWidget";

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

      <div
        className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-cyan-500/20 blur-[80px] opacity-50"
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-500/15 blur-[100px] opacity-40"
      />

      <div className="home flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-12 lg:px-20 pt-24 md:pt-16 gap-16 md:gap-40 lg:gap-60 text-white relative z-10">

        {/* LEFT SIDE - Cyberpunk Circle Photo */}
        <div
          className="home-img relative flex-shrink-0 order-2 md:order-1"
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
                <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-cyan-500/70 shadow-[0_0_50px_rgba(34,211,238,0.25),0_0_100px_rgba(34,211,238,0.1)]">
                  <img
                    src="/images/krishnan_t.png"
                    alt="Krishnan"
                    className="w-full h-full object-cover"
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
          className="home-content flex flex-col items-start text-left max-w-2xl order-1 md:order-2"
        >
          {/* Greeting - Static */}
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm md:text-base tracking-widest uppercase mb-4">
            <GunIcon size={24} className="text-cyan-400" animated={false} />
            <span className="font-semibold">&gt; Hello, I'm</span>
          </div>

          {/* Name - Static */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight text-[var(--text-color)]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Krishnan
          </h1>

          {/* Role - Static */}
          {/* <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6 font-mono">
            Developer
          </p> */}

          {/* Enhanced Terminal - Bigger with Typing Effect */}
          <div className="w-full max-w-2xl mb-8">
            <div className="relative">
              {/* Terminal outer glow */}
              <div className="absolute -inset-1 bg-cyan-500/15 rounded-2xl blur-xl" />

              {/* Terminal frame */}
              <div className="relative border-2 border-cyan-500/50 rounded-2xl overflow-hidden bg-black/90 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.15),inset_0_0_60px_rgba(34,211,238,0.03)]">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-cyan-900/50 via-purple-900/40 to-cyan-900/50 border-b-2 border-cyan-500/40">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    </div>
                    <span className="font-mono text-sm text-cyan-400 font-bold tracking-wide">TERMINAL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-300 border border-cyan-500/50 rounded-lg font-bold">
                      CODE
                    </span>
                    <span className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Terminal content with typing effect */}
                <div className="px-4 pb-4 pt-1 md:px-6 md:pb-6 md:pt-2 overflow-hidden">
                  {/* Line 1 - Static prompt */}
                  <div className="font-mono text-sm md:text-base mb-1">
                    <span className="text-purple-400 mr-4">❯</span>
                    <span className="text-gray-500">~/krishnan</span>
                    <span className="text-cyan-400 ml-2">$</span>
                  </div>

                  {/* Typing code effect */}
                  <div className="space-y-3">
                    <CodeTyping
                      lines={[
                        'import { Code, Innovation } from "krishnan.dev";',
                        '',
                        'const dev = {',
                        '  name: "Krishnan",',
                        '  role: "AIML Engineer",',
                        '  skills: ["Python", "ML", "GenAI"],',
                        '  leetcode: "300+"',
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
                <div className="px-5 py-2.5 border-t-2 border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-500/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    ~/krishnan/portfolio
                  </span>

                </div>
              </div>
            </div>
          </div>

          {/* Static description text */}
          <p
            className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Building AI-powered solutions and full-stack applications
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/krishnan_resume_off_c.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <GunIcon size={20} className="text-white" animated={false} />
              <span className="text-white">Download CV</span>
              <span className="text-white">↓</span>
            </span>
          </motion.a>
        </div>
      </div>

      {/* 3D Coding Boy Widget - only on homepage */}
      <CodingBoyWidget />
    </div>
  );
};

export default Homepage;
