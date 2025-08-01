import {useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "framer-motion"

const LeftContainer = () => {

  const [isHover, setIsHover] = useState(false);

    return (
      <motion.section className="w-full h-full text-white text-center flex flex-col gap-1 items-center justify-between md:text-left md:gap-2 md:items-start md:w-1/2" initial={{x:"-20vw",opacity:0}} whileInView={{x:"0vw", opacity:1}} transition={{type:"spring",stiffness:50, duration:2}} viewport={{once:false,amount:0.5}}>
        <p className="text-[2.8vw] md:text-[20px]">Full-Stack Developer</p>
        <h1 className="text-[5vw] font-bold leading-tight md:text-[2.5rem] lg:text-[3rem]" style={{fontFamily: "Poppins"}}>Hello World! I'm <span className="text-blue-400 block">Chasang T. Bhutia</span></h1>
        <p className="tracking-wider text-[13px] w-[90vw] sm:w-[70vw] md:w-full lg:text-[18px]">
        A web developer and designer dedicated to building intuitive, innovative, and detail-oriented digital products. My goal is to create experiences that feel both functional and inspiring.
        </p>
        <section className="flex justify-center gap-1 w-full mt-3 text-black md:w-full lg:justify-start">
          <a href="/cvNew.pdf" target="_blank" className=""><button className="bg-blue-400 w-[20vw] h-10 xl:h-15 xl:text-[20px] xl:font-normal rounded-md text-[2.5vw] sm:text-sm font-semibold lg:w-50" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {!isHover&&<span>Get CV</span>}
            {isHover&&<span className="flex items-center justify-center gap-2"><p>Download</p> <DownloadIcon/></span>}
            </button></a>
          <a href="#contact" className=""><button className="hover:bg-blue-400 border border-blue-400 text-blue-400 hover:text-black w-[20vw] h-10 xl:h-15 xl:text-[20px] xl:font-normal rounded-md text-[2.5vw] sm:text-sm font-semibold lg:w-50">Contact Me</button></a>
        </section>
      </motion.section>
    );
  };
  
  export default LeftContainer;