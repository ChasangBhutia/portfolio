import "./SideMenu.css";
import { useState } from "react";
import SideMenuData from "../../assets/SideMenuData";

const SideMenu = () => {
  const [hover, setHover] = useState(null);

  return (
    <ul className="sideMenu flex-box">
      {SideMenuData.map((item, index) => {
        return (
          <li
            key={index}
            className="menuItem"
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <a href={item.target}>
              {hover !== index && <span>{item.icon}</span>}
              {hover === index && <p className="menuDes">{item.text}</p>}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SideMenu;