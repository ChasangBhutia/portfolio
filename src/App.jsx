import "./App.css"
import React from 'react'
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SideMenu from "./Components/SideMenu/SideMenu";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";


const App = () => {
  return (
    <div className="app">
      <SideMenu />
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App;