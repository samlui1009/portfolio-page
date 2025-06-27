import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// Handles routing

import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ThankYou from './pages/ThankYou.jsx';

// We CANNOT be missing any import statements!
// All components MUST be imported before they can be used in the JSX code
// Error likely gets thrown without i - Rendering of route not possible


function App() {
    return (
        <Router>
            <div className="app">
                <Navbar></Navbar>
                <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contactme" element={<Contact />} />
                    <Route path="/ThankYou" element={<ThankYou />} />
                    <Route path="*" element={<Home />} />
                    {/* Path informs which page component to show */}
                    {/* Think of it like amazon.com -> amazon.com/cart */}
                </Routes>
            </div>
            {/* </div> */}
            <Footer className="footer"></Footer>
        </div>
        </Router>
    );
}

export default App
