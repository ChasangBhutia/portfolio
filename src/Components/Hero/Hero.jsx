import React from 'react'
import "./Hero.css"
import SideMenu from '../SideMenu/SideMenu'
import Navbar from '../Navbar/Navbar'
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import HeroSkills from '../HeroSkills/HeroSkills'

const Hero = () => {
  return (
    <div className='hero'>
      
      <section className="heroMainContainer flex-box">
        <LeftContainer/>
        <RightContainer/>
      </section>
      <HeroSkills/>
      <hr />
    </div>
  )
}

export default Hero