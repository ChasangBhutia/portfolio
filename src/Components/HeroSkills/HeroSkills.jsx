import React from "react";
import Typed from "typed.js";

const HeroSkills = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN | JAVA | ReactJS | NodeJs | Bootstrap"],
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
    <section className="heroSkills">
      <span ref={el} />
    </section>
  );
};

export default HeroSkills;