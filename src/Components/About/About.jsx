import React, { useState } from 'react'
import "./About.css"
import myImage from "../../assets/myImg.png"
import { colors } from '@mui/material';

const About = () => {

  const [activeSection, setActiveSection] = useState("aboutMe");

  const buttonClickedStyle = {
    background:"var(--primary-color)",
    color:"black",
  }

  return (
    <div id='about'>
      <h1>About</h1>
      <section className="aboutContainer flex-box">
        <section className="imageBox flex-box">
          <img loading='lazy' src={myImage} alt="" className='myAboutImage' />
          <div className="aboutButtons flex-box">
          <button style={activeSection==="aboutMe" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("aboutMe")}>About Me</button>
          <button style={activeSection==="education" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("education")}>Education</button>
          <button style={activeSection==="hobbies" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("hobbies")}>Hobbies</button>
        
          </div>
         </section>
        {activeSection==="aboutMe" && <section className="aboutDesContainer">
          <h2>Summary . . .</h2>
        <p className="summary">Hi, I’m Chasang Tsering Bhutia, a passionate Web Developer who loves building web applications. I specialize in front-end development with React.js, HTML, CSS, and JavaScript, while also diving into back-end technologies to grow as a full-stack developer. I enjoy learning new technologies and turning complex challenges into simple, user-friendly solutions. Clean, efficient code and smooth user experiences are always my priorities. Outside of coding, you’ll find me exploring tech trends, attending meetups, or working on personal projects. I’m always open to collaborating on exciting ideas — feel free to reach out!</p>
        </section>}
        {activeSection==="education" && <section className="aboutDesContainer">
          <h2>Education . . .</h2>
          <section className="education">
            <p className='stream primary-color'>-Bachelor of Technology in Computer Science and Engineering</p>
            <p className='uni'>Lovely Professional University, Punjab : 2022-2026</p>
            <ul className='outcomes'>
              <li>Focused on full-stack web development, data structures & algorithms, and software engineering</li>
              <li>Building projects using React.js, Node.js, and the MERN stack.</li>
              </ul>
            <p className='stream primary-color'>-Higher Secondary Education</p>
            <p className='uni'>St. Milarepa Academy: 2010-2022</p>
            <ul className="outcomes">
              <li>Stream: Science(Physics, Math, Chemistry, Biology)</li>
            </ul>
            <p className='stream primary-color'>-Secondary Education</p>
            <p className='uni'>St. Milarepa Academy: 2019-2020</p>
          </section>
        </section>}
        {activeSection==="hobbies" && <section className="aboutDesContainer">
          <h2>Hobbies . . .</h2>
          <ul className="hobbies">
            <li><span className="primary-color">Coding & Problem-Solving:</span> I enjoy building projects, solving DSA problems, and constantly improving my programming skills.</li>
            <li><span className="primary-color">Reading Tech Blogs & Exploring New Frameworks:</span> Passionate about staying updated with the latest trends in web development and technology.</li>
            <li><span className="primary-color">Fitness & Workout:</span> Consistent with daily workouts, focusing on both physical health and mental clarity.</li>
            <li><span className="primary-color">Sports — Especially Football:</span> I’m passionate about sports, with football being my favorite. Whether it’s playing on the field or playing on mobile(games), football keeps me energized and inspired.</li>
          </ul>
        </section>}
      </section>
      <hr />
    </div>
  )
}

export default About