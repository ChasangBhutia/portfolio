import React from 'react'
import "./Projects.css"
import { motion } from "framer-motion"
import ProjectsData from '../../assets/ProjectsData'

const Projects = () => {
    return (
        <div id='projects' className='section'>
            <h1 className='section-heading'>Projects</h1>
            <section className="projectsContainer section-container flex-box">
                {ProjectsData.map((item, index) => {
                    return (
                        <motion.div initial={{scale:0.2, opacity:0}} whileInView={{scale:1,opacity:1}} transition={{ stiffness:50, duration:0.7}} viewport={{ once: false, amount: 0.4 }}  key={index} className="card">
                            <div className="imgBx" style={{backgroundImage:`url("${item.imgUrl}")`}}></div>
                            <div className="content">
                                <span className='name'>
                                    <p className='projectName'>{item.name}</p>
                                </span>
                                <p className="projectDes">{item.des}</p>
                                <section className="projectButtons flex-box">
                                    <a href={item.url} target='_blank'><button>View Demo</button></a>
                                    <a href={item.gitUrl} target='_blank'><button>Source Code</button></a>
                                </section>
                            </div>
                        </motion.div>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Projects