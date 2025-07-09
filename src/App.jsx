import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import './App.css';

import Navbar from "./components/navbar";
import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Skills from './pages/skills.jsx';
import { DotBackgroundDemo } from './pages/DotBackgroundDemo.jsx';
import Project from "./pages/project.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true); // ✅ FIXED

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
      <div className="flex items-center justify-center h-screen bg-black text-white" id="loader">
      <div className="p-4 rounded-full border-4 border-white shadow-[0_0_40px_10px_#00ff00] animate-pulse">
        <img
          src="/images/pxfuel.jpg"  // ✅ Ensure it's inside public/images/
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
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
