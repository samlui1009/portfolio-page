import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Image from "../assets/workspace_background.png";

function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xy6eod5", "template_6a5z46l", form.current, {
        publicKey: "0BNpsClwTqYq_31Cm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/ThankYou");
        },
        (error) => {
          console.log("FAILED...", error.test);
        }
      );
  };

  return (
    <>
      <div className="thank-you-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="paragraph-1">
          Thanks so much for being here and taking a look at my projects and
          experiences. I'm open to all inquiries, whether it's for a coffee
          chat, potential collaborations for projects/hackathons, or if you just
          want to say hi!
        </p>
        <img src={Image} className="contact-me-photo"></img>
        <p className="paragraph-2">I look forward to hearing from you soon!</p>
        <div className="ext-links">
          <a href="mailto:sam_lui@hotmail.ca">
            <button className="link-buttons">
              <IoIosMail className="icon"></IoIosMail>E-mail me directly!
            </button>
          </a>
          <a href="https://devpost.com/sam_lui" target="_blank">
            <button className="link-buttons">
              <SiDevpost className="icon"></SiDevpost>Check out my Devpost!
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/sam-lui-6250a787/"
            target="_blank"
          >
            <button className="link-buttons">
              <FaLinkedin className="icon"></FaLinkedin>Add me as a connection!
            </button>
          </a>
        </div>
        <div className="send-msg-section">
          <p>Message Form</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-box">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              name="user_email"
              className="field"
              placeholder="Enter your e-mail"
              required
            />
          </div>
          <div className="input-box">
            <label>What's Your Message?</label>
            <textarea
              name="message"
              className="msg-field"
              placeholder="Write your message here"
              required
            />
          </div>
          <button type="submit" className="send-msg">
            Send Message
          </button>
        </form>
      </div>
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Contact;
