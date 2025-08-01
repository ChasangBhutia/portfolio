import "./style.css"
import { motion } from "framer-motion"

const RightContainer = () => {

    return (
        <motion.section className="flex h-full justify-center w-full md:w-1/2" initial={{ x: "20vw", opacity: 0 }} whileInView={{ x: "0vw", opacity: 1 }} transition={{ type: "spring", stiffness: 50, duration: 2 }} viewport={{ once: false, amount: 0.5 }}>
            <div className="homeImg h-60 w-70 flex justify-center md:h-80 md:w-80 lg:w-90 lg:h-90 xl:w-100 xl:h-100">
                <div className="imgBox flex justify-center items-center h-60 w-60 md:h-80 md:w-80 lg:w-90 lg:h-90 xl:w-100 xl:h-100">
                    <div className="imgItem z-99 bg-black rounded-full flex items-center justify-center h-50 w-50 md:h-70 md:w-70 lg:h-80 lg:w-80 xl:w-90 xl:h-90">
                        <img
                            className="h-full w-full rounded-full mix-blend-lighten scale-[1.2] grayscale-[70%] transition-all duration-1000 z-[99] hover:scale-[1.4] hover:grayscale-0 "
                            loading="lazy"
                            src="https://res.cloudinary.com/dzjspl6ws/image/upload/v1753198253/IMG_2020_b1rk4j.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default RightContainer;