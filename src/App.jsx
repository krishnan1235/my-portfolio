import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import './App.css';

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Skills from './pages/skills.jsx';
import Experience from './pages/experience.jsx';
import Project from "./pages/project.jsx";
import Education from "./pages/education.jsx";
import Contact from "./pages/contact.jsx";
import CityBackground from "./components/CityBackground";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS + loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    AOS.init({ duration: 1000, once: true });

    return () => clearTimeout(timer);
  }, []);

  // Loader screen
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[var(--bg-color)] text-[var(--text-color)]" id="loader">
        <div className="p-4 rounded-full border-4 border-white shadow-[0_0_40px_10px_#00ff00] animate-pulse">
          <img
            src="/images/pxfuel.jpg"
            alt="Loading..."
            className="w-52 h-52 rounded-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Actual content
  return (
    <>
      <Navbar />
      <Homepage />
      {/* CityBackground rendered ONCE for all non-homepage sections */}
      <div className="relative">
        <CityBackground opacity={0.4} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
