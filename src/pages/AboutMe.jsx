import './AboutMe.css';
import { useRef } from "react";
import PhotoAlbum from '../components/PhotoAlbum.jsx';
import AboutMeNavBar from '../components/AboutMeNavBar.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

import { IoSchool, IoCalendarNumber } from 'react-icons/io5';
import { FaComputer, FaLocationDot } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { RiCommunityFill } from "react-icons/ri";
import { IoIosHappy } from "react-icons/io";

function AboutMe() {
    const education = useRef(null);
    const tech = useRef(null);
    const profexp = useRef(null);
    const volunteer = useRef(null);
    const hobbies = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <>
        <div>
            <div><AboutMeNavBar
                onScrollToEducation={() => scrollToSection(education)}
                onScrollToTech={() => scrollToSection(tech)}
                onScrollToProfExp={() => scrollToSection(profexp)}
                onScrollToVolunteer={() => scrollToSection(volunteer)}
                onScrollToHobbies={() => scrollToSection(hobbies)}></AboutMeNavBar></div>

            <section ref={education}>
            <div className="education">
                <h2 className="title">Education<IoSchool className="logo"></IoSchool></h2>
                <h3 className="school">University of British Columbia</h3>
                <div className="school-info">
                    <p className="program">Bachelor of Computer Science (BCS) - Second Degree</p>
                    <p className="date">September 2024 - Present</p>
                </div>
                <p>Expected Graduation Date: May 2027</p>
                <p>Relevant Coursework: Basic Algorithms & Data Structures, Software Construction, Introduction to Data Science</p>
                <p>Extracurriculars: UBC BU1DL, UBC BCS 2025 Cohort Support Hub Mentor, UBC Science Co-op Participant, UBC BCS Tri-Mentorship Program Participant</p>

                <h3 className="school">British Columbia Institute of Technology</h3>
                <div className="school-info">
                    <p className="program">Advanced Diploma in Clinical Genetics Technology</p>
                    <p className="date">August 2020 - October 2021</p>
                </div>
                <p>Awards & Achievements: Graduated with Distinction (88%)</p>
                <p>Certified Clinical Genetics Technologist under the Canadian Society for Medical Laboratory Science</p>

                <h3 className="school">Simon Fraser University</h3>
                <div className="school-info">
                    <p className="program">Bachelor of Health Sciences - Life Sciences Concentration</p>
                    <p className="date">September 2011 - December 2017</p>
                </div>
                <p>Awards & Achievements: Dean's Honor Roll - Fall 2015</p>
                <p>Relevant Coursework: Introduction to Biostatistics for Health Sciences, Human Pathophysiology, Cell Pathophysiology Laboratory, Seminar in Molecular Mechanisms of Epigenetics</p>
                <p>Extracurriculars: SFU Work Integrated Learning Co-op Participant, SFU-UBC Co-op Japan Participant (2016 - 2017)</p>
            </div>
            </section>

            <section ref={tech}>
            <div className="technical-skills">
                <h2 className="title">Technical Skills<FaComputer className="logo"></FaComputer></h2>
                
                <div className="all-skills-left">
                    <div className="skill">
                        <h3 className="type">Programming Languages</h3>
                        <p className="list">Python, Java, JavaScript, C++, PowerShell (currently acquiring), SQL, R</p>
                    </div>

                    <div className="skill">
                        <h3 className="type">Web Development</h3>
                        <p className="list">HTML5, CSS3, React.js, Electron.js</p>
                    </div>

                    <div className="skill">
                        <h3 className="type">Frameworks/Libraries</h3>
                        <p className="list">JUnit Jupiter Testing Framework, Recharts, Java Swing, Tkinter, Tidyverse (including ggplot2)</p>
                    </div>
                    
                    <div className="skill">
                        <h3 className="type">Backend Frameworks</h3>
                        <p className="list">Spring Boot (+ Spring Security, Spring AI), Node.js/Express.js</p>
                    </div>
                </div>

                <div className="all-skills-right">
                    <div className="skill">
                        <h3 className="type">Databases</h3>
                        <p className="list">PostgreSQL, H2 Database Engine, MongoDB Atlas, SQLite</p>
                    </div>

                <div className="skill">
                    <h3 className="type">Developer Tools</h3>
                    <p className="list">Git, GitHub, Vite, Postman, Jupyter Notebooks, Figma, Groq, Selenium</p>
                </div>

                <div className="skill">
                    <h3 className="type">Cloud & Enterprise Systems</h3>
                    <p className="list">Netlify, Service Manager 9, Confluence, Microsoft Azure Active Directory, Mobile Device Management (MDM), Microsoft Endpoint Configuration Manager (SCCM)</p>
                </div>

                <div className="skill">
                    <h3 className="type">Laboratory-Related Technologies</h3>
                    <p className="list">Leica CytoVision Automated Cell Imaging System, SeqPilot, GeneMapper, SHIRE (LIMS), SunQuest, Promega Maxwell RSC48</p>
                </div>
                </div>
            </div>
            </section>

            <section ref={profexp}>
            <div className="professional-exp"> 
                <h2 className="title">Professional Experience<SiReaddotcv></SiReaddotcv></h2>
                <div>

                    <h3 className="org">Canadian Institute for Health Information - Applied Cloud Architecture Developer Intern</h3>
                    <div className="job-info">
                        <p><FaLocationDot className="logo"></FaLocationDot>Toronto, ON</p>
                        <p><IoCalendarNumber className="logo"></IoCalendarNumber>Starting January 2026 - April 2026</p>
                    </div>
                    <ul className="tasks">
                        <li>I'm incredibly excited to share that I will be starting a 4-month internship in Toronto, ON, as an applied cloud architecture developer intern with
                            the Canadian Institute for Health Information! This opportunity will help me develop the skills needed to succeed in cloud computing. As I assist with CIHI's Cloud Migration project,
                            I will gain exposure into DevOps-related technologies, including Java, Spring Boot, Python, Docker, Kubernetes and GitLab in CI/CD pipeline development.
                        </li>
                    </ul>

                    <hr className="divider"></hr>

                    <h3 className="org">Shared Services Canada - Information Technology Analyst Co-op Student</h3>
                    <div className="job-info">
                        <p><FaLocationDot className="logo"></FaLocationDot>Vancouver, British Columbia</p>
                        <p><IoCalendarNumber className="logo"></IoCalendarNumber>August 2025 - Present</p>
                    </div>
                    <ul className="tasks">
                        <li>
                            Delivering Windows 11 imaging, BIOS configuration and QA testing for hardware deployments via Service Manager 9, ensuring reliable end-user system performance
                        </li>
                        <li>
                            Managing Microsoft Azure user states via MDM and SCCM, leveraging PowerShell scripts for account provisioning and access management to maintain secure enterprise environments
                        </li>
                        <li>
                            Developing automation tools with Python, Tkinter and Selenium to streamline ticket workflows and shipment processing, reducing manual data entry errors and improving processing speed by 75%; deployment planned for a 5-member unit
                        </li>
                        <li>
                        Authored a 60+ page training guide standardizing support procedures, currently under review as a national onboarding resource for future co-ops across the Desktop Support Services team
                        </li>
                    </ul>
                    
                    <hr className="divider"></hr>
                    <h3 className="org">Provincial Health Services Authority - Clinical Genetics Technologist</h3>
                    <div className="job-info">
                    <p><FaLocationDot className="logo"></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber className="logo"></IoCalendarNumber>November 2021 - August 2024</p>
                    </div>
                    <ul className="tasks">
                        <li>Executed high-throughput genetic analyses under standardized protocols, delivering timely and accurate results reporting</li>
                        <li>Liaised with IT/vendors to troubleshoot LIS and equipment software/hardware issues, reducing operational downtime</li>
                        <li>Supported onboarding and training of practicum students and new technologists, fostering technical confidence</li>
                    </ul>
                    

                    <hr className = "divider"></hr>
                    <h3 className="org">Children's Hospital of Eastern Ontario - Cytogenetics Practicum Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Ottawa, Ontario</p>
                    <p><IoCalendarNumber></IoCalendarNumber>March 2021 - July 2021</p>
                    </div>
                    <ul className="tasks">
                        <li>5-month practicum completed with the Genetics Diagnostics Laboratory (Blood/prenatal/oncology/tumour testing, G/C-banding, FISH, microarray, rapid aneuploidy detection)</li>
                    </ul>

                    <hr className = "divider"></hr>
                    <h3 className="org">Medipure Pharmaceuticals - Research & Administrative Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Burnaby, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2018 - February 2020</p>
                    </div>
                    <ul className="tasks">
                        <li>Designed and conducted cell-based assays to evaluate drug efficacy for anxiety, pain and psoriasis, successfully pursuing research goals</li>
                        <li>Trained a summer research intern on essential cell culture techniques, data analysis, literature search, and lab report documentation, ensuring mastery of all relevant skills</li>
                        <li>Served as the Employee Health and Safety Representative, documenting meeting notes, proposing safety improvements to management, and revising standardized operating procedures to meet WorkSafeBC compliance</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Kao Corporation - Research Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Tochigi Prefecture, Japan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>August 2016 - April 2017</p>
                    </div>
                    <ul className="tasks">
                        <li>Conducted cell culture experiments (Western Blotting, qPCR, RT-PCR) with primary human keratinocytes and melanocytes, contributing to the successful identification of novel genes/proteins linked to autophagy regulation in skincare research </li>
                        <li>Collaborated harmoniously within a Japanese research team, adapting to a new work culture by strengthening Japanese language skills and cross-cultural communication; presented a final project presentation to 60+ laboratory and board members</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Agriculture & Agri-Food Canada - Plant Science Research Co-op Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Saskatoon, Saskatchewan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>October 2014 - April 2015</p>
                    </div>
                    <ul className="tasks">
                        <li>Managed a large collection of rapeseed oil plants for Dr. Sally Vail's research team, optimizing growth conditions and assisting with mildew prevention</li>
                        <li>Conducted numerous cross-breeding experiments with quantitative data tracking to support trait selection efforts</li>
                    </ul>
                </div>
            </div>
            </section>

            <section ref={volunteer}>
            <div className="volunteering">
                <h2 className="title">Volunteering Experience<RiCommunityFill></RiCommunityFill></h2>
                <div>
                    <h3 className="org">UBC BU1DL - Junior Mentor</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Remote</p>
                    <p><IoCalendarNumber></IoCalendarNumber>August 2025 - Present</p>
                    <ul className="tasks">
                        <li>Co-mentoring 3 undergraduate CS students in a pilot initiative, assisting them in their personal project development over 
                            the course of 4 months by providing technical guidance and support through bi-weekly virtual meetings to maintain project 
                            momentum and participant accountability
                        </li>
                    </ul>
                    </div>

                    <hr className="divider"></hr>

                    <h3 className="org">The C.O.D.E. Initiative - Remote Volunteer Tutor</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Remote</p>
                    <p><IoCalendarNumber></IoCalendarNumber>September 2024 - April 2025</p>
                    </div>
                    <ul className="tasks">
                        <li>Taught beginner and intermediate Python/web dev to neurodivergent youth, adapting lessons to different learning needs and boosting student engagement</li>
                    </ul>
                    
                    <hr className = "divider"></hr>
                    
                    <h3 className="org">Children's Health Policy Centre - Research Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2015 - August 2016</p>
                    </div>
                    <ul className="tasks">
                        <li>Contributed to a randomized controlled trial for the Nurse-Family Partnership Program with quantitative data entry (500+ participants), lab kit preparation, and video editing to support cross-team operations</li>
                        <li>Trained and supported new interns with clear guidance and feedback, accelerating onboarding</li>
                    </ul>
                </div>
            </div>
            </section>

            <section ref={hobbies}>
            <div className="hobbies">
                <div className="hobbies-intro-section">
                <h2 className="title">Personal Interests<IoIosHappy></IoIosHappy></h2>
                <p className="hobbies-description">Outside of building projects, coding and studying, I often invest my time in a wide array of hobbies, such as trying new restaurants, crocheting plushies and coasters, taking beautiful pictures of nature and travelling (Tokyo, Kyoto, London, Amsterdam and San Francisco are some of my favourite cities!). Check out some of the fun things I do below!</p>
                <div className="photo-album"><PhotoAlbum /></div>
                </div>
            </div>
            </section>

        </div>
        <ScrollToTop></ScrollToTop>
        </>
    )
}
    
export default AboutMe;