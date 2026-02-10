import React from "react";
import { motion } from "framer-motion";
import GameCard3D from "../components/GameCard3D";
import TacticalFrame from "../components/TacticalFrame";
import GunIcon from "../components/GunIcon";

const projects = [
  {
    title: "AI Hospital Receptionist System",
    description: "Fully automated AI receptionist using Gemini API, Telegram Bot, and Google Sheets. Multi-channel communication, emergency handling, appointment booking, zero human intervention.",
    link: "https://github.com/krishnan1235/AI-Hospital-Receptionist",
    img: "images/Screenshot 2025-04-16 101234.png",
    tech: ["Gemini API", "Telegram Bot", "Google Sheets", "n8n", "JavaScript"],
  },
  {
    title: "AI-Powered Plant E-commerce | Greenhaven",
    description: "Full-stack e-commerce with MERN. AI disease detection (80%+ accuracy), RAG + ChromaDB, Gemini AI chatbot for personalized recommendations.",
    link: "https://github.com/krishnan1235/e-commerse-Greenhaven",
    img: "images/Screenshot 2025-04-16 100810.png",
    tech: ["MERN", "Python", "TensorFlow", "Gemini AI"],
  },
  {
    title: "Job Description Analyzer Agent",
    description: "AI platform for job analysis and skill extraction. Auto-suggests learning resources from GitHub/YouTube. JWT auth, PostgreSQL, analytics dashboard.",
    link: "https://github.com/krishnan1235/job-role-analysis-agent",
    img: "images/Your paragraph text.png",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini AI"],
  },
  {
    title: "YouTube Sentiment Analysis",
    description: "Analyzes YouTube watch history using sentiment polarity. NLTK and TextBlob for positive/negative/neutral sentiment from viewing patterns.",
    link: "https://github.com/Muthuraja997/Youtube-History-Analysis",
    img: "images/Your paragraph text.png",
    tech: ["Python", "NLTK", "TextBlob"],
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="project-section relative min-h-screen w-full flex flex-col pt-16 pb-32 px-4 sm:px-6 md:px-16 lg:px-20 overflow-x-hidden"
      style={{
        background: "transparent",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute -top-24 left-10 w-72 h-72 rounded-full bg-cyan-500/15 blur-[90px]" />
      <div className="absolute -bottom-24 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-[110px]" />
      <motion.span
        className="game-level font-mono text-cyan-500/60 text-xs tracking-[0.3em] uppercase block text-center mb-2"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        — Level 04 —
      </motion.span>
      <h2 className="heading project-heading text-center text-3xl md:text-4xl font-bold mb-10 md:mb-12 relative z-10 flex items-center justify-center gap-4">
        <GunIcon size={36} className="text-cyan-400" animated={true} />
        Latest <span>Projects</span>
      </h2>

      <div className="project-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            style={{ transform: 'none', perspective: 'none' }}
          >
            <GameCard3D href={project.link} intensity={0} static={true}>
              <TacticalFrame badge="REPO" intensity="normal" className="h-full">
                <div className="flex flex-col h-full min-h-[420px] p-5 md:p-6 rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)] transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <GunIcon size={20} className="text-cyan-400" animated={true} />
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed line-clamp-4 mb-4 flex-shrink-0">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-3 flex-shrink-0">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400">
                      View Repository →
                    </span>
                    <div className="rounded-xl overflow-hidden border border-white/10 h-36 flex-shrink-0">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="project-card-img w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </TacticalFrame>
            </GameCard3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
