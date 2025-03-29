import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ContactsIcon from "@mui/icons-material/Contacts";
import BuildIcon from "@mui/icons-material/Build";

const SideMenuData = [
  {
    id:1,
    icon: <HomeRoundedIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "Home",
    target: "/",
  },
  {
    id:2,
    icon: <AccountCircleIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "About",
    target: "#about",
  },
  {
    id:3,
    icon: <BuildIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "Skills",
    target: "#skills",
  },
  { 
    id:4,
    icon: <LaptopMacIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "Projects",
    target: "#projects",
  },
  {
    id:5,
    icon: <CardMembershipIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "Certs.",
    target: "#certifications",
  },
  {
    id:6,
    icon: <ContactsIcon sx={{fontSize:`clamp(20px, 4vw,32px)`}} />,
    text: "Contact",
    target: "#contact",
  },
]
export default SideMenuData;