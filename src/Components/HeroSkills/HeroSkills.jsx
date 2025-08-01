import React from "react";
import Typed from "typed.js";

const HeroSkills = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN | JAVA | ReactJS | NodeJs | Tailwind"],
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      backDelay: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section  className="text-center my-5 xl:my-10">
      <span className="text-[10px] lg:text-[14px]" style={{fontFamily: '"Press Start 2P", serif'}} ref={el} />
    </section>
  );
};

export default HeroSkills;