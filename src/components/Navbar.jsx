import React from "react";
import {
  FaLaptopCode,
  FaRegFilePdf,
  FaUser,
  FaGithub,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import resumePDF from "../assets/SL_BCS_Resume.pdf";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="bar-container">
      <nav className="navbar">
        <ul className="nav-options">
          <li>
            <Link to="/">
              <FaHome className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutme">
              <FaUser className="icon" />
              About Me
            </Link>
          </li>
          <li>
            <a href={resumePDF} target="_blank">
              <FaRegFilePdf className="icon" />
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/samlui1009" target="_blank">
              <FaGithub className="icon" />
              GitHub
            </a>
          </li>
          <li>
            <Link to="/projects">
              <FaLaptopCode className="icon" />
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contactme">
              <FaEnvelope className="icon" />
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
