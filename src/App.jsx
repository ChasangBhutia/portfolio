import "./App.css"
import React from 'react'
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SideMenu from "./Components/SideMenu/SideMenu";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/Certifications/Certifications";


const App = () => {
  return (
    <div className="app">
      <SideMenu />
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
    </div>
  )
}

export default App;