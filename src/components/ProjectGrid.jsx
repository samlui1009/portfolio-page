import './ProjectGrid.css';
import ProjectCard from '../components/ProjectCard.jsx';
import PantryPal from '../assets/pantrypal.jpg';
import PLAI from '../assets/plai-logo.png';
import Enduro from '../assets/enduro.jpg';
import DailySips from '../assets/dailysips-logo.png'
import Portfolio from '../assets/portfolio-logo.png';

import { SiMongodb, SiJupyter, SiJunit5, SiVite, SiCss3, SiJson, SiJavascript } from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';


function ProjectGrid() {
    return (
        <>
        <div className="grid-container">
            <ProjectCard
            title = "DailySips"
            type = "Academic"
            image = { DailySips }
            description = "A Java-based application with both a command-line interface (CLI) and user-friendly GUI that helps users track
            their daily beverage consumption, monitoring calories, caffeine and sugar intake to support healthier habits with personalized goals."
            url = "https://github.com/samlui1009/DailySips"
            stack = {[ FaJava, SiJson, SiJunit5 ]}>
            </ProjectCard>

            <ProjectCard
            title = "PantryPal"
            type = "BCS Hacks 2025 Project"
            image = { PantryPal }
            description = "PantryPal is a full-stack web application that generates recipe suggestions based on ingredients already on hand at home. 
            It aims to reduce food waste, save time and promote healthy cooking through AI assistance."
            url = "https://github.com/ajarodpaulson/pantry_pal"
            stack = {[ FaReact, SiVite, SiCss3, SiJavascript, SiMongodb ]}
            >
            </ProjectCard>

            <ProjectCard
            title = "Sam's Portfolio Page"
            type = "Personal"
            image = { Portfolio }
            description = "Leveraging resources like StackOverflow, w3schools, YouTube tutorials and generative AI, I independently
            built this responsive portfolio site to highlight my technical learning journey."
            url = "https://github.com/samlui1009/portfolio_page"
            stack = {[FaReact, SiVite, SiCss3, SiJavascript]}
            >
            </ProjectCard>

            <ProjectCard
            title = "Enduro"
            type = "cmd-f 2025 Project"
            image = { Enduro }
            description = "Struggling to stay on track with your fitness goals? Meet Enduro - your companion for 
            building long-term fitness habits through activities of your preference in 15/30/45-minute and 1-hour increments. With FitBit, powered by the Groq API,
            Enduro offers personalized fitness advice tailored to user inputs."
            url = "https://github.com/wendytso/exercise-tracker"
            stack = {[ FaReact, SiVite, SiCss3, SiJavascript ]}
            >
            </ProjectCard>

            <ProjectCard
            title = "Predicting Player Recruitment with the Pacific Laboratory of Artificial Intelligence"
            type = "Academic"
            image = { PLAI }
            description = "This project was a great introduction into the subject of data science. This involved exploratory analysis of 
            over 1,500 records of player data. Through proper cleaning and data transformation, my team built a KNN regression model with R to predict player attributes that would 
            further refine recruitment strategies to contribute high-quality gameplay data."
            url = "https://github.com/Sen550/dsci100-project"
            stack = {[SiJupyter]}
            >
            </ProjectCard>

        </div>
        </>
    );
}

export default ProjectGrid