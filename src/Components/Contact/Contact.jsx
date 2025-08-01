import React, { useState } from 'react'
import { motion } from 'framer-motion'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const phoneNumber = "919339197277";
    const { name, email, message } = formData;

    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <div id='contact' className='section px-4 sm:px-8'>
      <h1 className='text-[6vw] sm:text-[2.5rem] font-semibold mb-20'>Contact</h1>

      <div className="flex flex-col-reverse justify-center items-center gap-6 sm:gap-10 md:flex-row mb-10">

        {/* Left */}
        <motion.section
          initial={{ x: "-30vw", opacity: 0 }}
          whileInView={{ x: "0vw", opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="bg-[#0b0b0b] p-4 sm:p-6 md:p-8 rounded-lg w-[90%] sm:w-[400px]"
        >
          <h2 className='text-2xl text-[#47c0ec] mb-4'>Get in touch</h2>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              className='bg-zinc-800 text-white rounded-md w-[90%] sm:w-[300px] h-12 px-3 text-base focus:outline-none'
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              className='bg-zinc-800 text-white rounded-md w-[90%] sm:w-[300px] h-12 px-3 text-base focus:outline-none'
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <textarea
              className='bg-zinc-800 text-white rounded-md w-[90%] sm:w-[300px] px-3 py-2 text-base h-32 resize-none focus:outline-none'
              name="message"
              placeholder="Write Message"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <button
              type="submit"
              className='bg-[#47c0ec] hover:bg-[#0e5169] hover:text-white w-[90%] sm:w-[300px] h-12 rounded-md font-medium transition duration-300'
            >
              Submit
            </button>
          </form>
        </motion.section>

        {/* Right */}
        <motion.section
          initial={{ x: "20vw", opacity: 0 }}
          whileInView={{ x: "0vw", opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col items-start justify-center gap-8 text-left text-sm sm:text-base"
        >
          <section className="w-[270px] sm:w-[300px]">
            <LocalPhoneIcon className='text-[#47c0ec] mr-2' fontSize='large' />
            <span className='font-semibold'>Phone</span>
            <p>(+91) 933 919 7277</p>
          </section>
          <section className="w-[270px] sm:w-[300px]">
            <EmailIcon className='text-[#47c0ec] mr-2' fontSize='large' />
            <span className='font-semibold'>Email</span>
            <p>chasangtsering@gmail.com</p>
          </section>
          <section className="w-[270px] sm:w-[300px]">
            <LocationOnIcon className='text-[#47c0ec] mr-2' fontSize='large' />
            <span className='font-semibold'>Address</span>
            <p>Jalandhar, Punjab 144411</p>
          </section>
        </motion.section>
      </div>
      <hr className='mt-10 border-zinc-600' />
    </div>
  )
}

export default Contact
