import portfolio from "./portfolio.png"
import daily4cast from "./daily4cast.png"
import notilo from './notilo.png'
import pickRandom from "./pickRandom.png"

const ProjectsData = [
    {
        name:"Portfolio",
        url:"https://portfolio-xi-bay-75.vercel.app",
        techUsed:['HTML','CSS','JavaScript','React.js','Material UI','Typed.js','Vercel'],
        imgUrl:portfolio,
        des:"This is my personal portfolio website built with modern web technologies to showcase my skills, projects, and experience as a full-stack developer.",
        gitUrl:"https://github.com/ChasangBhutia/portfolio"
    },{
        name:"Daily4Cast",
        url:"https://daily4cast.onrender.com/",
        techUsed:['HTML','CSS','EJS','Node.js','Express.js','APIs'],
        imgUrl:daily4cast,
        des:"A weather-telling web application that provides real-time updates on the current temperature and essential weather details.",
        gitUrl:"https://github.com/ChasangBhutia/Daily4Cast"
    },{
        name:"Notilo",
        url:"https://notilo.vercel.app/",
        techUsed:['HTML','CSS','React.js','Local Storage','Vercel'],
        imgUrl:notilo,
        des:"A note taking web app where you can create, delete and update existing note with local storage to store your notes.",
        gitUrl:"https://github.com/ChasangBhutia/Notilo"
    },{
        name:"PickRandom",
        url:"https://chasangbhutia.github.io/PickRandom/",
        techUsed:['HTML','CSS','JavaScript','APIs'],
        imgUrl:pickRandom,
        des:"A simple web app that generates random quotes, jokes, and fun facts.",
        gitUrl:"https://github.com/ChasangBhutia/PickRandom"
    }
]

export default ProjectsData;