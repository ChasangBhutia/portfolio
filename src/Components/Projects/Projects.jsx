import React, { useState } from 'react'
import { motion } from "framer-motion"
import ProjectsData from '../../assets/ProjectsData'

const Projects = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div id='projects' className='section'>
            <h1 className='text-[6vw] font-semibold mb-10 sm:text-[2.5rem]'>Projects</h1>
            <section className="projectsContainer section-container flex justify-center flex-wrap gap-10 text-left xl:px-30">
                {ProjectsData.map((item, index) => {
                    return (
                        <motion.div className='relative flex flex-col gap-2 overflow-hidden rounded-lg z-90 w-70' initial={{ scale: 0.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ stiffness: 50, duration: 0.7 }} viewport={{ once: false, amount: 0.4 }} key={index}>
                            <section onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <img src={item.imgUrl} alt="" className='h-40 w-full mb-2' />
                                <h2 className='font-semibold text-[20px]'>{item.name}</h2>
                                {hoveredIndex === index && <section className='absolute top-0 z-99 bg-[rgba(0,0,0,0.8)] h-40 p-2'>
                                    <h3 className='font-semibold'>Description:</h3>
                                    <p>{item.des}</p>
                                </section>}
                                <section className='flex gap-2 items-center mb-1 text-[13px]'><h2>Tech Used:</h2> {item.techUsed.map((imgUrl, i) => {
                                    return (
                                        <img key={i} className="h-7" src={imgUrl} alt="" />
                                    )
                                })}</section>
                            </section>
                            <section className='flex gap-1 w-full h-10'>
                                <a className='w-1/2' href={item.url}>
                                    <button className='w-full h-full hover:bg-blue-800 hover:text-white bg-blue-400 text-black'>View Demo</button>
                                </a>
                                <a className='w-1/2' href={item.gitUrl}>
                                    <button style={{ borderRadius: '0px 0px 10px 0px' }} className='w-full h-full text-blue-400 hover:text-black border border-blue-400 hover:bg-blue-400 text-black duration-600'>Source Code</button>
                                </a>
                            </section>

                        </motion.div>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Projects