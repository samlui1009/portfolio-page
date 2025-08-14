import './Card.css';
import Image from '../assets/profile-picture.jpg';

function Card() {
    return(
        <>
        <div className="home-container">
            <img className="my-photo" src={Image} alt="Sam's Profile Picture"></img>
        
        <div className="card">
            <div className="intro-text">
                <h2>It's nice to meet you.</h2>
                <p>💻 I am a current 3rd-year Bachelor of Computer Science (BCS) student, studying
                    at the University of British Columbia in Vancouver, B.C.
                </p>
                <p>🧬 I'm a former genetics technologist, aspiring software developer, data science enthusiast and 
                    incoming Information Technology Analyst Co-op with Shared Services Canada (Fall 2025).
                </p>
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