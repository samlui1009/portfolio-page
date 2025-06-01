import './Card.css';
import Image from '../assets/profile-picture.jpg';

function Card() {
    return(
        <>
        <div className="home-container">
            <img className="my-photo" src={Image} alt="Sam's Profile Picture"></img>
        
        <div className="card">
            <div className="intro-text">
                <h2>👋 It's nice to meet you.</h2>
                <p>💻 I am a current Bachelor of Computer Science (BCS) student, studying
                    at the University of British Columbia.
                </p>
                <p>🧬 I'm a former genetics technologist, aspiring SWE and data science enthusiast.
                </p>
                <p>💭 With a foundational background in healthcare, 
                    I hope to bring innovative, scalable solutions to the digital health space.
                </p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card