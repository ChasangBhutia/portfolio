import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./About.css"
import myImage from "../../assets/myImg.png"


const About = () => {

  const [activeSection, setActiveSection] = useState("aboutMe");

  const buttonClickedStyle = {
    background:"var(--primary-color)",
    color:"black",
  }

  return (
    <div id='about' className='section'>
      <h1 className='section-heading'>About</h1>
      <section className="aboutContainer section-container flex-box">
        <motion.section initial={{x:"-20vw",opacity:0}} whileInView={{x:"0vw",opacity:1}}  transition={{type:"spring",stiffness:50, duration:1}} viewport={{once:false, amount:0.4}} className="imageBox flex-box">
          <img loading='lazy' src={myImage} alt="" className='myAboutImage' />
          <div className="aboutButtons flex-box">
          <button style={activeSection==="aboutMe" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("aboutMe")}>About Me</button>
          <button style={activeSection==="education" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("education")}>Education</button>
          <button style={activeSection==="hobbies" ? buttonClickedStyle:{}} onClick={()=>setActiveSection("hobbies")}>Hobbies</button>
        
          </div>
         </motion.section>
        {activeSection==="aboutMe" && <motion.section initial={{x:"30vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.4}} className="aboutDesContainer">
          <h2>Summary . . .</h2>
        <p className="summary">Hi, I’m <span className='primary-color'>Chasang Tsering Bhutia</span>, a passionate <span className='primary-color'>Web Developer</span> who loves building web applications. I specialize in front-end development with React.js, HTML, CSS, and JavaScript, while also diving into back-end technologies to grow as a <span className="primary-color">full-stack developer</span>. I enjoy learning new technologies and turning complex challenges into simple, <span className="primary-color">user-friendly solutions</span>. Clean, efficient code and smooth user experiences are always my priorities. Outside of coding, you’ll find me exploring tech trends, attending meetups, or working on personal projects. I’m always open to collaborating on exciting ideas — <span className="primary-color">feel free to reach out!</span></p>
        </motion.section>}
        {activeSection==="education" && <motion.section initial={{x:"30vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring",stiffness:50,duration:1}} viewport={{once:false, amount:0.4}} className="aboutDesContainer">
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
        </motion.section>}
        {activeSection==="hobbies" && <motion.section initial={{x:"30vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring",stiffness:50,duration:1}} viewport={{once:false, amount:0.4}} className="aboutDesContainer">
          <h2>Hobbies . . .</h2>
          <ul className="hobbies">
            <li><span className="primary-color">Coding & Problem-Solving:</span> I enjoy building projects, solving DSA problems, and constantly improving my programming skills.</li>
            <li><span className="primary-color">Reading Tech Blogs & Exploring New Frameworks:</span> Passionate about staying updated with the latest trends in web development and technology.</li>
            <li><span className="primary-color">Fitness & Workout:</span> Consistent with daily workouts, focusing on both physical health and mental clarity.</li>
            <li><span className="primary-color">Sports — Especially Football:</span> I’m passionate about sports, with football being my favorite. Whether it’s playing on the field or playing on mobile(games), football keeps me energized and inspired.</li>
          </ul>
        </motion.section>}
      </section>
      <hr />
    </div>
  )
}

export default About