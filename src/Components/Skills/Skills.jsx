import React from 'react'
import { motion } from "framer-motion"
import "./Skills.css"
import {TechnicalSkillsData,ToolsData} from '../../assets/SkillsData'


const Skills = () => {
    return (
        <div id='skills' className='section'>
            <h1 className='section-heading'>Skills</h1>
            <section className="skillsContainer section-container flex-box">
                <motion.aside initial={{x:"-30vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.5}} className="technicalSkills">
                    <h2>Technical Skills</h2>
                    <section className='technicalSkillsContainer flex-box'>
                        {TechnicalSkillsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><img loading='lazy' src={item.imgUrl} alt="" height="80px" width="80px"/></abbr>
                            )
                        })}
                    </section>
                </motion.aside>
                <motion.aside initial={{x:"10vw", opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.5}} className="tools">
                    <h2>Tools</h2>
                    <section className='toolsSkillsContainer flex-box'>
                        {ToolsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><img loading='lazy' src={item.imgUrl} alt="" height="80px" width="80px"/></abbr>
                            )
                        })}
                    </section>
                </motion.aside>
            </section>
            <hr />
        </div>
    )
}

export default Skills