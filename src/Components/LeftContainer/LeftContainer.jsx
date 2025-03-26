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
        A web developer and designer dedicated to building intuitive, innovative, and detail-oriented digital products. My goal is to create experiences that feel both functional and inspiring.
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