import './ThankYou.css';
import {GoSmiley} from 'react-icons/go';
import ThankYouImage from '../assets/thank-you-message.png';

function ThankYou() {
    return(
        <div>
            <h1 className = "header">Thank You!</h1>
            <img src={ThankYouImage} className="thanks-image"></img>
            <div className = "followup">
                <p>I'll get back to you as soon as possible.</p>
                <GoSmiley></GoSmiley>
            </div>
        </div>
    );
}

export default ThankYou;