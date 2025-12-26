import './Card.css';
import NewLogo from '../assets/Sam_Logo.png';

function Card() {

    return(
        <>
        <div className="photo-ctn">
            <img className="my-photo" src={NewLogo} alt="Sam's Profile Picture"></img>
        </div>

        <div className="home-container">
        <div className="card">
            <div className="intro-text">
                <div className="txt-ctn">
                    <p>💻 I am a current 3rd-year Bachelor of Computer Science second-degree student from the <b>University of British Columbia</b>, former <b>I.T. Analyst intern</b> with Shared Services Canada and
                       incoming <b>Applied Cloud Architecture Developer Intern</b> with the Canadian Institute for Health Information.</p>
                    <p>💭 My exposure into the inefficiencies experienced within public healthcare had motivated 
                        my career transition. My current career goals are to eventually bring innovative, scalable solutions to the rapidly evolving 
                        digital health spaces.</p>
                    <p>💡 I'm always open to collaborations and chatting with other like-minded individuals about projects, hobbies and favourite bubble tea places (My personal favourite: <b><a href="https://www.yifangtea.com/" target="_blank" className="yifang-link">YiFang Fruit Tea)</a></b> 🧋
                    </p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card