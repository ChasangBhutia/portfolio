import React, { useState } from 'react'
import { motion } from "framer-motion"


const About = () => {

  const myImage = "https://res.cloudinary.com/dzjspl6ws/image/upload/v1753198248/myImg_bkpowa.png";
  const [activeSection, setActiveSection] = useState("aboutMe");


  return (
    <div id='about' className='text-center py-10'>
      <h1 className='text-[6vw] font-semibold mb-10 sm:text-[2.5rem]'>About</h1>
      <section className="flex flex-col items-center gap-3 lg:flex-row lg:gap-3 lg:justify-center lg:items-start lg:mb-20 lg:h-90">
        <motion.section className="flex flex-col items-center w-full px-10 lg:w-60 lg:px-0 lg:gap-3" initial={{ x: "-20vw", opacity: 0 }} whileInView={{ x: "0vw", opacity: 1 }} transition={{ type: "spring", stiffness: 50, duration: 1 }} viewport={{ once: false, amount: 0.4 }}>
          <img className='rounded-[100%] h-[25vw] w-[25vw] mb-2 sm:w-40 sm:h-40' loading='lazy' src={myImage} alt="my images" />
          <div className="flex gap-1 w-full sm:w-130 lg:flex-col lg:w-full lg:gap-3">
            <button className={`${activeSection === "aboutMe" && "bg-blue-400 text-black"} h-10 w-1/3 lg:w-full rounded-lg text-[3.5vw] font-semibold sm:text-[18px]`} onClick={() => setActiveSection("aboutMe")}>About Me</button>
            <button className={`${activeSection === "education" && "bg-blue-400 text-black"} h-10 w-1/3 lg:w-full rounded-lg text-[3.5vw] font-semibold sm:text-[18px]`} onClick={() => setActiveSection("education")}>Education</button>
            <button className={`${activeSection === "hobbies" && "bg-blue-400 text-black"} h-10 w-1/3 lg:w-full rounded-lg text-[3.5vw] font-semibold sm:text-[18px]`} onClick={() => setActiveSection("hobbies")}>Hobbies</button>

          </div>
        </motion.section >
        {activeSection === "aboutMe" && <motion.section className="bg-[#0b0b0b] mx-10 lg:mx-2 text-left p-2 mb-10 lg:mb-0 sm:w-130 xl:w-170 xl:p-5" initial={{ x: "30vw", opacity: 0 }} whileInView={{ x: "0vw", opacity: 1 }} transition={{ type: "spring", stiffness: 50, duration: 1 }} viewport={{ once: false, amount: 0.4 }}>
          <h2 className='text-[4vw] mb-5 sm:text-[20px] lg:text-[25px]'>Summary . . .</h2>
          <p className="text-[15px] xl:text-[18px]">Hi, I'm <span className='text-blue-400'>Chasang Tsering Bhutia</span>, a passionate <span className='text-blue-400'>Web Developer</span> who loves building web applications. I specialize in front-end development with React.js, HTML, CSS, and JavaScript, while also diving into back-end technologies to grow as a <span className="text-blue-400">full-stack developer</span>. I enjoy learning new technologies and turning complex challenges into simple, <span className="text-blue-400">user-friendly solutions</span>. Clean, efficient code and smooth user experiences are always my priorities. Outside of coding, you’ll find me exploring tech trends, attending meetups, or working on personal projects. I’m always open to collaborating on exciting ideas — <span className="text-blue-400">feel free to reach out!</span></p>
        </motion.section>}
        {activeSection === "education" && <motion.section className="bg-[#0b0b0b] mx-10 lg:mx-2 text-left p-2 mb-10 lg:mb-0 sm:w-130 xl:w-170 xl:p-5" initial={{ x: "30vw", opacity: 0 }} whileInView={{ x: "0vw", opacity: 1 }} transition={{ type: "spring", stiffness: 50, duration: 1 }} viewport={{ once: false, amount: 0.4 }}>
          <h2 className='text-[4vw] mb-5 sm:text-[20px] lg:text-[25px]'>Education . . .</h2>
          <section>
            <p className='text-[15px] xl:text-[18px] text-blue-400'>-Bachelor of Technology in Computer Science and Engineering</p>
            <p className='text-[15px] xl:text-[18px]'>Lovely Professional University, Punjab : 2022-2026</p>
            <ul className='ml-5 text-[15px] xl:text-[18px] mb-5'>
              <li>Focused on full-stack web development, data structures & algorithms, and software engineering</li>
              <li>Building projects using React.js, Node.js, and the MERN stack.</li>
            </ul>
            <p className='text-[15px] xl:text-[18px] text-blue-400'>-Higher Secondary Education</p>
            <p className='text-[15px] xl:text-[18px]'>St. Milarepa Academy: 2010-2022</p>
            <ul className="ml-5 text-[15px] xl:text-[18px] mb-5">
              <li>Stream: Science(Physics, Math, Chemistry, Biology)</li>
            </ul>
            <p className='text-[15px] xl:text-[18px] text-blue-400'>-Secondary Education</p>
            <p className='text-[15px] xl:text-[18px]'>St. Milarepa Academy: 2019-2020</p>
          </section>
        </motion.section>}
        {activeSection === "hobbies" && <motion.section className="bg-[#0b0b0b] mx-10 lg:mx-2 text-left p-2 mb-10 lg:mb-0 sm:w-130 xl:w-170 xl:p-5" initial={{ x: "30vw", opacity: 0 }} whileInView={{ x: "0vw", opacity: 1 }} transition={{ type: "spring", stiffness: 50, duration: 1 }} viewport={{ once: false, amount: 0.4 }}>
          <h2 className='text-[4vw] mb-5 sm:text-[20px] lg:text-[25px]'>Hobbies . . .</h2>
          <ul className='flex flex-col gap-2'>
            <li className='text-[15px] xl:text-[18px]'><span className="text-blue-400">Coding & Problem-Solving:</span> I enjoy building projects, solving DSA problems, and constantly improving my programming skills.</li>
            <li className='text-[15px] xl:text-[18px]'><span className="text-blue-400">Reading Tech Blogs & Exploring New Frameworks:</span> Passionate about staying updated with the latest trends in web development and technology.</li>
            <li className='text-[15px] xl:text-[18px]'><span className="text-blue-400">Fitness & Workout:</span> Consistent with daily workouts, focusing on both physical health and mental clarity.</li>
            <li className='text-[15px] xl:text-[18px]'><span className="text-blue-400">Sports — Especially Football:</span> I’m passionate about sports, with football being my favorite. Whether it’s playing on the field or playing on mobile(games), football keeps me energized and inspired.</li>
          </ul>
        </motion.section>}
      </section>
      <hr />
    </div>
  )
}

export default About