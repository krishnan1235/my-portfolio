import { useState } from 'react'

import './App.css'
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage.jsx";
import About from "./pages/about.jsx";
import Skills from './pages/skills.jsx';
import { DotBackgroundDemo } from './pages/DotBackgroundDemo.jsx';
// import { Navbar } from 'react-bootstrap';

function App() {

  return (
    <>
    <Navbar/>
    <Homepage/>
    <About/>
    <Skills/>
  <DotBackgroundDemo/>
     </>
  )
}

export default App
