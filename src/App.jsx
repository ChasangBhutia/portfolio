import "./App.css"
import React from 'react'
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SideMenu from "./Components/SideMenu/SideMenu";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/Certifications/Certifications";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;