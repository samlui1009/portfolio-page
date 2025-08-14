import './ProjectGrid.css';
import ProjectCard from '../components/ProjectCard.jsx';
import PantryPal from '../assets/Individual-Project-Assets/pantrypal.jpg';
import PLAI from '../assets/Individual-Project-Assets/plai-logo.png';
import Enduro from '../assets/Individual-Project-Assets/enduro.jpg';
import DailySips from '../assets/Individual-Project-Assets/dailysips-logo.png'
import Portfolio from '../assets/Individual-Project-Assets/portfolio-logo.png';
import SipLy from '../assets/Individual-Project-Assets/SipLy-login.png';
import ScrollToTop from './ScrollToTop.jsx'

import { SiMongodb, SiJupyter, SiJunit5, SiVite, SiCss3, SiJson, SiJavascript, SiSpringboot, SiPostman } from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';
import { RiH2 } from 'react-icons/ri';


function ProjectGrid() {
    return (
        <>
        <div className="grid-container">
            <ProjectCard
            title="SipLy"
            type = "Personal"
            image = { SipLy }
            description = "An elevated version of DailySips! SipLy is an interactive daily beverage tracker. Displayed as a dynamic dashboard, SipLy aims to be a gamified way for users to make healthier beverage decisions for their daily lives. "
            url = "https://github.com/samlui1009/SipLy"
            stack = {[FaReact, SiVite, SiSpringboot, RiH2, SiPostman ]}>    

            </ProjectCard>    
            <ProjectCard
            title = "DailySips"
            type = "Academic"
            image = { DailySips }
            description = "A Java-based application with a command-line interface (CLI) and user-friendly GUI that helps users track
            their daily beverage consumption, monitoring calories, caffeine and sugar intake to support healthier habits with personalized goals."
            url = "https://github.com/samlui1009/DailySips"
            stack = {[ FaJava, SiJson, SiJunit5 ]}>
            </ProjectCard>

            <ProjectCard
            title = "PantryPal"
            type = "BCS Hacks 2025 Project"
            image = { PantryPal }
            description = "A full-stack web application that generates recipe suggestions based on ingredients already on hand at home. 
            It aims to reduce food waste, save cooking prep time and promote healthy eating through AI assistance."
            url = "https://github.com/ajarodpaulson/pantry_pal"
            stack = {[ FaReact, SiVite, SiCss3, SiJavascript, SiMongodb ]}
            >
            </ProjectCard>

            <ProjectCard
            title = "My Portfolio Page"
            type = "Personal"
            image = { Portfolio }
            description = "Leveraging resources like StackOverflow, w3schools and YouTube tutorials, I independently
            built this responsive portfolio site to highlight my technical learning journey."
            url = "https://github.com/samlui1009/portfolio_page"
            stack = {[FaReact, SiVite, SiCss3, SiJavascript]}
            >
            </ProjectCard>

            <ProjectCard
            title = "Enduro"
            type = "cmd-f 2025 Project"
            image = { Enduro }
            description = "Enduro is the ideal digital companion to help  
            build up long-term fitness habits. Physical activities of your preference are logged in 15/30/45-minute and 1-hour increments. FitBot, powered by the Groq API,
            offers personalized fitness advice tailored to user inputs."
            url = "https://github.com/wendytso/exercise-tracker"
            stack = {[ FaReact, SiVite, SiCss3, SiJavascript ]}
            >
            </ProjectCard>

            <ProjectCard
            title = "Predicting Player Recruitment with the Pacific Laboratory of Artificial Intelligence"
            type = "Academic"
            image = { PLAI }
            description = "To support the Pacific Laboratory of Artificial Intelligence, this project involved exploratory data analysis of 
            over 1, 500 records of player data. My team built detailed visualizations and a K-NN regression model through R and Jupyter to help the laboratory 
            refine recruitment strategies for their study to ensure high-quality gameplay data would be contributed."
            url = "https://github.com/Sen550/dsci100-project"
            stack = {[SiJupyter]}
            >
            </ProjectCard>

        </div>
        <ScrollToTop></ScrollToTop>
        </>
    );
}

export default ProjectGrid