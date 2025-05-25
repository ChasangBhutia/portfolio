import "./Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const Navbar = () => {
  return (
    <nav className="navbar flex-box">
      <h1 className="logo">
        Chasang<span className="dev">.Dev</span>
      </h1>
      <ul className="navIconsList flex-box">
        <li className="navIcon">
          <a href="https://www.linkedin.com/in/chasang"> <LinkedInIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
        <li className="navIcon">
          <a href="https://github.com/ChasangBhutia"> <GitHubIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
        <li className="navIcon">
        <a href="https://leetcode.com/u/Chasang/" className="leetcode"> <CodeRoundedIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;