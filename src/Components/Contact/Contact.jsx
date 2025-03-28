import React from 'react'
import "./Contact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Contact</h1>
      <div className="contactContainer flex-box">
      <section className="contactContainerLeft">
        <h2>Get in touch</h2>
        <form action="mailto:chasangtsering@gmail.com" method="POST" encType="text/plain" className="flex-box">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className="contactContainerRight flex-box">
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
      </section>
      </div>
      <hr />
    </div>
  )
}

export default Contact