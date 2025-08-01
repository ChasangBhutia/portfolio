import React from 'react'
import { motion } from "framer-motion"

import {TechnicalSkillsData,ToolsData} from '../../assets/SkillsData'


const Skills = () => {
    return (
        <div id='skills' className='text-center py-10 px-10 md:px-0 lg:px-10 xl:px-30'>
            <h1 className='text-[6vw] font-semibold mb-10 sm:text-[2.5rem]'>Skills</h1>
            <section className="text-left flex flex-col mb-30 gap-6 items-center sm:px-10 md:flex-row md:items-start md:gap-1">
                <motion.aside className='ml-12 w-full' initial={{x:"-30vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.5}}>
                    <h2 className='text-[4vw] mb-3 sm:text-[20px]'>Technical Skills</h2>
                    <section className='flex flex-wrap gap-10'>
                        {TechnicalSkillsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><motion.img whileHover={{filter:'grayscale(0)', scale: 1.5}} transition={{duration:0.7}} className='grayscale h-15 w-15' loading='lazy' src={item.imgUrl} alt="icon"/></abbr>
                            )
                        })}
                    </section>
                </motion.aside>
                <motion.aside className='ml-12 w-full' initial={{x:"20vw", opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.5}}>
                    <h2 className='text-[4vw] mb-3 sm:text-[20px]'>Tools</h2>
                    <section className='flex flex-wrap gap-10'>
                        {ToolsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><motion.img whileHover={{filter:'grayscale(0)',  scale: 1.5}} transition={{duration:1}} className='grayscale h-15 w-15' loading='lazy' src={item.imgUrl} alt="icon"/></abbr>
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