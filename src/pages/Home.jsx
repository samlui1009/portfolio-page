import Card from '../components/Card.jsx';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

function Home() {

    const el = React.useRef(null);

    useEffect(() => {
        // Initialize Typed.js
        const options = {
            strings: ["Welcome to my website!", "My name is Sam Lui."],  // The text to be typed out
            typeSpeed: 100,  // Speed of typing in milliseconds
            backSpeed: 50,   // Speed of backspacing in milliseconds
            backDelay: 1000, // Delay before starting to backspace (in ms)
            loop: true,      // Set to true for looping effect
        };

        // Create a new Typed instance
        const typed = new Typed(el.current, options);

        // Cleanup function to destroy Typed instance when component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run only once when component mounts

    return(
        <div>
        <div className="typed-output"><span ref={el} />
        </div>
        <Card></Card>
        </div>
    );
}

export default Home