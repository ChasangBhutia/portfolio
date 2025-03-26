import React,{useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';

const LeftContainer = () => {

  const [isHover, setIsHover] = useState(false);

    return (
      <section className="leftContainer">
        <p>Full-Stack Developer</p>
        <h1>Hello World! I'm</h1>
        <h1 className="name">Chasang T. Bhutia</h1>
        <p className="aboutMe">
          Welcome to my portfolio! I'm Chasang, a passionate web developer and
          designer with a keen eye for detail. I specialize in creating seamless,
          user-centric digital experiences that are both innovative and
          functional. Let's build something amazing together!
        </p>
        <section className="heroButtons flex-box">
          <a href="#cv"><button className="cvBtn" onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
            {!isHover&&<span>Get CV</span>}
            {isHover&&<span className="flex-box download"><p>Download</p> <DownloadIcon/></span>}
            </button></a>
          <a href="#contact"><button className="contactBtn">Contact Me</button></a>
        </section>
      </section>
    );
  };
  
  export default LeftContainer;