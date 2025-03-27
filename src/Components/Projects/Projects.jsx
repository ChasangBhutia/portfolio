import React from 'react'
import "./Projects.css"
import ProjectsData from '../../assets/ProjectsData'

const Projects = () => {
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <section className="projectsContainer flex-box">
                {ProjectsData.map((item, index) => {
                    return (
                        <div key={index} className="card">
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
                        </div>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Projects