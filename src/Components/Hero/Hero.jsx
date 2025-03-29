import React from 'react'
import "./Hero.css"
import "./Responsive.css"
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
import HeroSkills from '../HeroSkills/HeroSkills'

const Hero = () => {
  return (
    <div className='hero section'>
      
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