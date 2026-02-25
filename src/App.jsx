import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import './App.css';

// import Navbar from "./components/navbar";
import DockNav from "./components/DockNav";

import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Skills from './pages/skills.jsx';
import Experience from './pages/experience.jsx';
import Project from "./pages/project.jsx";
import Education from "./pages/education.jsx";
import Contact from "./pages/contact.jsx";
import CityBackground from "./components/CityBackground";

const ensureMeta = (name, content) => {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const ensureCanonical = (href) => {
  if (!href) return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const ensureJsonLd = (id, data) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const baseTitle = 'Krishnan T';
    const sectionTitles = {
      home: baseTitle,
      about: `About — ${baseTitle}`,
      skills: `Skills — ${baseTitle}`,
      experience: `Experience — ${baseTitle}`,
      education: `Education — ${baseTitle}`,
      project: `Projects — ${baseTitle}`,
      contact: `Contact — ${baseTitle}`,
    };

    const title = sectionTitles[activeSection] || baseTitle;
    document.title = title;

    ensureMeta(
      'description',
      'Krishnan T — AI/ML Engineer portfolio. Projects in Machine Learning, GenAI, RAG systems, and full-stack development.'
    );

    const canonical = `${window.location.origin}/#${activeSection}`;
    ensureCanonical(canonical);

    ensureJsonLd('person-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Krishnan T',
      jobTitle: 'AI/ML Engineer',
      url: window.location.origin,
      image: `${window.location.origin}/images/krishnan_t.png`,
    });
  }, [activeSection]);

  // Initialize loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // AOS.init({ duration: 1000, once: true });

    return () => clearTimeout(timer);
  }, []);

  // Loader screen with themed animation
  if (isLoading) {
    return (
      <div className="relative flex items-center justify-center h-screen bg-[#050510] overflow-hidden" id="loader">
        <div className="absolute inset-0 bg-[radial-gradient(#1d4ed840_1px,transparent_1px)] bg-[length:26px_26px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-black to-purple-900/30" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center gap-6"
        >
          <div className="w-24 h-24 rounded-full border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.5)] bg-black/60">
            <span className="text-xs font-mono text-cyan-300 tracking-[0.2em] uppercase">AIML</span>
          </div>
          <div className="w-56 h-1.5 rounded-full bg-cyan-900/50 overflow-hidden border border-cyan-500/40">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <p className="font-mono text-xs md:text-sm text-cyan-200/80 tracking-[0.35em] uppercase">
            Initializing&nbsp;Neon&nbsp;City&nbsp;Systems
          </p>
        </motion.div>
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Homepage />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'project': return <Project />;
      case 'contact': return <Contact />;
      default: return <Homepage />;
    }
  };

  // Actual content
  return (
    <div
      className={`min-h-screen w-full bg-[#050505] overflow-x-hidden relative font-sans text-white ${activeSection === 'home' || activeSection === 'about'
        ? 'overflow-y-auto md:overflow-hidden md:h-screen'
        : 'overflow-y-auto'
        }`}
    >

      {/* 3D Sphere Background — visible on ALL pages */}
      <div className="absolute inset-0 z-0">
        <CityBackground opacity={activeSection === 'home' ? 1 : 0.5} />
      </div>

      {/* Darker overlay for non-home pages — keeps them mostly black */}
      {activeSection !== 'home' && (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
          <div className="absolute inset-0 z-0 pointer-events-none bg-black/10" />
        </>
      )}

      {/* Main Content Area - Scrollable Container with game-style transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9,
            rotateX: -8,
            filter: 'blur(12px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            y: -40,
            scale: 0.9,
            rotateX: 8,
            filter: 'blur(12px)',
          }}
          transition={{
            duration: 0.55,
            ease: [0.19, 1, 0.22, 1],
          }}
          className={`min-h-screen w-full overflow-x-hidden relative z-10 custom-scroll pb-24 ${activeSection === 'home' || activeSection === 'about'
            ? 'overflow-y-auto md:overflow-hidden md:h-screen md:pb-0'
            : 'overflow-y-auto'
            }`}
          style={{ transformOrigin: '50% 50%' }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Iconic Navigation Dock */}
      <DockNav activeSection={activeSection} setActiveSection={setActiveSection} />

    </div>
  );
}

export default App;
