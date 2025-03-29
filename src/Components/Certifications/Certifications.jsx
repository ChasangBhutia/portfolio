import React from 'react'
import "./Certifications.css"
import { motion } from "framer-motion" 
import CertificationsData from '../../assets/CertificationsData'

const Certifications = () => {
    return (
        <div id='certifications'>
            <h1>Certifications</h1>
            <section className="certificationsContainer flex-box">
                {CertificationsData.map((item, index) => {
                    return (
                        <motion.section initial={{x:"-20vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{duration:0.5}} viewport={{once:false, amount:0.5}} key={index} className='certBox flex-box'>
                            <img loading='lazy' src={item.imgUrl} alt="" />
                            <section className="certDes">
                                <h3>{item.name}</h3>
                                <p><strong>Provided by:</strong> {item.by}</p>
                            </section>
                            <a href={item.credentials} target='_blank'><button>Show Credentials...</button></a>
                        </motion.section>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Certifications;