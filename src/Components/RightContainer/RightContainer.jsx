import myImg from "../../assets/IMG_2020.png";
import { motion } from "framer-motion"

const RightContainer = () => {

    return (
        <motion.section className="rightContainer flex-box" initial={{x:"20vw",opacity:0}} whileInView={{x:"0vw", opacity:1}} transition={{type:"spring",stiffness:50, duration:2}} viewport={{once:false,amount:0.5}}>
            <div className="homeImg">
                <div className="imgBox flex-box">
                    <div className="imgItem flex-box">
                        <img
                            loading="lazy"
                            src={myImg}
                            alt=""
                            
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default RightContainer;