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
                    <p>💻 It's nice to meet you! I'm a current 3rd-year Bachelor of Computer Science second-degree student from the <b>University of British Columbia</b>. 
                    I was previously associated with the <b>Canadian Institute for Health Information</b> as an <b>Applied Cloud Architecture Developer Intern</b>, 
                    as well as <b>Shared Services Canada</b> as an <b>I.T. Analyst co-op student</b>.</p>
                    <p>💭 My journey into tech has definitely not been linear. My previous exposure into the inefficiencies experienced after working in public healthcare had inspired 
                        my career transition. I hope to one day help bring innovative, scalable solutions that can help improve workflow processes and large-scale systems.</p>
                    <p>💡 Feel free to chat with me about projects, video games and favourite bubble tea places (My personal favourite: <b><a href="https://www.yifangtea.com/" target="_blank" className="yifang-link">YiFang Fruit Tea)</a></b> 🧋.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card