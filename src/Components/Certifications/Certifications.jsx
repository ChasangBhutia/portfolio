import React from 'react'
import "./Certifications.css"
import CertificationsData from '../../assets/CertificationsData'

const Certifications = () => {
    return (
        <div id='certifications'>
            <h1>Certifications</h1>
            <section className="certificationsContainer flex-box">
                {CertificationsData.map((item, index) => {
                    return (
                        <section key={index} className='certBox flex-box'>
                            <img loading='lazy' src={item.imgUrl} alt="" />
                            <section className="certDes">
                                <h3>{item.name}</h3>
                                <p><strong>Provided by:</strong> {item.by}</p>
                            </section>
                            <a href={item.credentials} target='_blank'><button>Show Credentials...</button></a>
                        </section>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Certifications;