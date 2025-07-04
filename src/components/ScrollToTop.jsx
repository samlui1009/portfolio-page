import React, {useState, useEffect} from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa';
import './ScrollToTop.css';
// Boilerplate taken from the extension, ES7+ React/Redux/React-Native snippets
// Ensures that 'rafce' shortcut works
// Imported the icon that I want for the top button

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
                setShowScrollTopButton(false)
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

  return (
    <div>
        {showScrollTopButton && <FaAngleDoubleUp className="top-btn-style" onClick={scrollTop} />}
    </div>
  )
}

export default ScrollToTop

// YouTube reference: https://www.youtube.com/watch?v=oszUqCqTGHo&t=622s