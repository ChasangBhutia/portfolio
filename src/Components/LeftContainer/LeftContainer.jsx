import React,{useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "framer-motion"

const LeftContainer = () => {

  const [isHover, setIsHover] = useState(false);

    return (
      <motion.section className="leftContainer" initial={{x:"-20vw",opacity:0}} whileInView={{x:"0vw", opacity:1}} transition={{type:"spring",stiffness:50, duration:2}} viewport={{once:false,amount:0.5}}>
        <p>Full-Stack Developer</p>
        <h1>Hello World! I'm</h1>
        <h1 className="name">Chasang T. Bhutia</h1>
        <p className="aboutMe">
        A web developer and designer dedicated to building intuitive, innovative, and detail-oriented digital products. My goal is to create experiences that feel both functional and inspiring.
        </p>
        <section className="heroButtons flex-box">
          <a href="/myCv.pdf" target="_blank"><button className="cvBtn" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {!isHover&&<span>Get CV</span>}
            {isHover&&<span className="flex-box download"><p>Download</p> <DownloadIcon/></span>}
            </button></a>
          <a href="#contact"><button className="contactBtn">Contact Me</button></a>
        </section>
      </motion.section>
    );
  };
  
  export default LeftContainer;