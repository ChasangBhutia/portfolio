import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div id='contact' className='section'>
      <h1 className='section-heading'>Contact</h1>
      <div className="contactContainer section-container flex-box">
      <motion.section initial={{x:"-30vw", opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.4}} className="contactContainerLeft">
        <h2>Get in touch</h2>
        <form action="mailto:chasangtsering@gmail.com" method="POST" encType="text/plain" className="flex-box">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </motion.section>
      <motion.section className="contactContainerRight flex-box" initial={{x:"20vw", opacity:0}} whileInView={{x:"0vw",opacity:1}} transition={{type:"spring", stiffness:50, duration:1}} viewport={{once:false, amount:0.4}} >
        <section>
          <LocalPhoneIcon className='contactIcon' fontSize='large' sx={{color: '#47c0ec'}}/>
          <span>Phone</span>
          <p>(+91) 933 919 7277</p>
        </section>
        <section>
          <EmailIcon className='contactIcon' fontSize='large' sx={{color: '#47c0ec'}}/>
          <span>Email</span>
          <p>chasangtsering@gmail.com</p>
        </section>
        <section>
          <LocationOnIcon className='contactIcon' fontSize='large' sx={{color: '#47c0ec'}}/>
          <span>Address</span>
          <p>Jalandhar, Punjab 144411</p>
        </section>
      </motion.section>
      </div>
      <hr />
    </div>
  )
}

export default Contact