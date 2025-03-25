import "./App.css"
import React from 'react'
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import SideMenu from "./Components/SideMenu/SideMenu";
import About from "./Components/About/About";

const App = () => {
  return (
    <div className="app">
      <SideMenu />
      <Navbar/>
      
    </div>
  )
}

export default App;