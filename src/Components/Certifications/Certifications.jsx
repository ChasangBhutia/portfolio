import { motion } from "framer-motion" 
import CertificationsData from '../../assets/CertificationsData'

const Certifications = () => {
    return (
        <div id='certifications' className='section'>
            <h1 className='text-[6vw] font-semibold mb-20 sm:text-[2.5rem]'>Certifications</h1>
            <section className="flex flex-wrap justify-center gap-10 mb-30"> 
                {CertificationsData.map((item, index) => {
                    return (
                        <motion.section className='shadow-[-2px_2px_10px_#60A5FA] flex flex-col items-center justify-between gap-2 w-85 p-2 rounded-md' initial={{x:"-20vw",opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{duration:0.5}} viewport={{once:false, amount:0.5}} key={index}>
                            <img className='h-50 w-80 rounded-md' loading='lazy' src={item.imgUrl} alt="certificate Image" />
                            <section className="text-left w-full">
                                <h3>{item.name}</h3>
                                <p><strong>Provided by:</strong> {item.by}</p>
                            </section>
                            <a className="w-full h-10" href={item.credentials} target='_blank'><button className="bg-blue-400 hover:bg-blue-800 hover:text-white w-full h-full rounded-md text-black font-[500]">Show Credentials...</button></a>
                        </motion.section>
                    )
                })}
            </section>
            <hr />
        </div>
    )
}

export default Certifications;