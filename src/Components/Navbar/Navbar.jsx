import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const Navbar = () => {
  return (
    <nav className="h-[7vh] flex items-center justify-between  px-10 md:px-30 lg:px-40 pt-5">
      <h1 className="lg:text-4xl md:text-2xl sm:text-lg" style={{fontFamily: "Caveat"}}>
        Chasang<span className="text-blue-400">.Dev</span>
      </h1>
      <ul className="flex gap-2 sm:gap-7">
        <li className="navIcon">
          <a href="https://www.linkedin.com/in/chasang"> <LinkedInIcon className="text-blue-400" sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
        <li className="navIcon">
          <a href="https://github.com/ChasangBhutia"> <GitHubIcon className="text-blue-400" sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
        <li className="navIcon">
        <a href="https://leetcode.com/u/Chasang/" className="leetcode"> <CodeRoundedIcon className="text-blue-400" sx={{fontSize:`clamp(20px, 4vw,32px)`}}/> </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;