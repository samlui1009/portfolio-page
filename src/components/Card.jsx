import './Card.css';
import Image from '../assets/profile-picture.jpg';
import NewLogo from '../assets/Sam_Logo.png';

function Card() {
    return(
        <>
        <div className="home-container">
            <img className="my-photo" src={NewLogo} alt="Sam's Profile Picture"></img>
        
        <div className="card">
            <div className="intro-text">
                <h2>It's nice to meet you.</h2>
                <p>💻 I am a current 3rd-year Bachelor of Computer Science (BCS) student and Information Technology Analyst intern with Shared Services Canada, studying
                    at the University of British Columbia in Vancouver, B.C.
                </p>
                <p>🧬 I'm a former genetics technologist, aspiring software developer and data science enthusiast.</p>
                <p>💭 My exposure into the inefficiencies experienced within public healthcare had motivated 
                    my career transition. My current career goals are to eventually bring innovative, scalable solutions to the rapidly evolving 
                    digital health space. 
                </p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card