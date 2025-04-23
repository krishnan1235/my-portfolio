import { useEffect } from 'react';
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
  // Initialize AOS when the app is mounted
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // duration for the animation effect
  }, []);

  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Skills />
      <Project />
      <Contact/>
      {/* <DotBackgroundDemo /> */}
    </>
  );
}

export default App;
