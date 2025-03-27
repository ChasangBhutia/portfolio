import React from 'react'
import "./Skills.css"
import {TechnicalSkillsData,ToolsData} from '../../assets/SkillsData'

const Skills = () => {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <section className="skillsContainer flex-box">
                <aside className="technicalSkills">
                    <h2>Technical Skills</h2>
                    <section className='technicalSkillsContainer flex-box'>
                        {TechnicalSkillsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><img loading='lazy' src={item.imgUrl} alt="" height="80px" width="80px"/></abbr>
                            )
                        })}
                    </section>
                </aside>
                <aside className="tools">
                    <h2>Tools</h2>
                    <section className='toolsSkillsContainer flex-box'>
                        {ToolsData.map((item, index) => {
                            return (
                                <abbr key={index} title={item.name}><img loading='lazy' src={item.imgUrl} alt="" height="80px" width="80px"/></abbr>
                            )
                        })}
                    </section>
                </aside>
            </section>
            <hr />
        </div>
    )
}

export default Skills