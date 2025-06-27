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
                <p>Extracurriculars: UBC BCS 2025 Cohort Support Hub Mentor, UBC Science Co-op Participant, UBC BCS Tri-Mentorship Program Participant</p>

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
                <h3 className="type">Programming Languages</h3>
                <p className="list">HTML5, CSS3, JavaScript, Java, Python, SQL, R</p>
                <h3 className="type">Frameworks and Libraries</h3>
                <p className="list">React.js, Node.js/Express.js, Java Swing, JUnit Jupiter, Tidyverse (including ggplot2)</p>
                <h3 className="type">Developer Tools</h3>
                <p className="list">Git, GitHub, Vite, MongoDB, JSON, Visual Studio Code, Jupyter Notebooks, Filmora</p>
                <h3 className="type">Laboratory-Related Technologies</h3>
                <p className="list">Leica CytoVision Automated Cell Imaging System, SeqPilot, GeneMapper, SHIRE (LIMS), SunQuest, Promega Maxwell RSC48</p>
            </div>
            </section>

            <section ref={profexp}>
            <div className="professional-exp"> 
                <h2 className="title">Professional Experience<SiReaddotcv></SiReaddotcv></h2>
                <div>
                    <h3 className="org">Provincial Health Services Authority - Clinical Genetics Technologist</h3>
                    <div className="job-info">
                    <p><FaLocationDot className="logo"></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber className="logo"></IoCalendarNumber>November 2021 - August 2024</p>
                    </div>
                    <ul className="tasks">
                        <li>Performed high-volume culturing and analysis of biohazardous patient specimens using advanced molecular techniques; collaborated in a multidisciplinary healthcare team to deliver compassionate care through delivery of results before established turnaround times </li>
                        <li>Operated, maintained and troubleshooted diagnostic laboratory equipment by following standardized operating procedures; liaised with vendors and IT teams to minimize downtime in a fast-paced, time-sensitive environment</li>
                        <li>Mentored incoming junior technologists and practicum students, promoting a supportive learning environment</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Children's Hospital of Eastern Ontario - Cytogenetics Practicum Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Ottawa, Ontario</p>
                    <p><IoCalendarNumber></IoCalendarNumber>March 2021 - July 2021</p>
                    </div>
                    <ul className="tasks">
                        <li>Learned and applied cytogenetic theory and methods by shadowing clinical instructors for patient specimens requiring genetic testing (bone marrow aspirate, peripheral blood, prenatal specimens, solid tumours)</li>
                        <li>Performed and analyzed molecular-based techniques (QF-PCR/RAD, microarray) for practice cases with accuracy</li>
                        <li>Executed CytoVision to identify and report abnormal cytogenetic findings</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Medipure Pharmaceuticals - Research & Administrative Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Burnaby, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2018 - February 2020</p>
                    </div>
                    <ul className="tasks">
                        <li>Performed cell-based assays to evaluate the efficacy of novel drugs for anxiety, pain, and psoriasis within the Cell Biology team</li>
                        <li>Mentored a summer research intern on essential cell culture techniques, data analysis, literature searching, and lab report writing skills</li>
                        <li>Served as the Employee Health and Safety Representative, documenting health and safety meeting notes, presenting suggestions and feedback to management for workplace safety, and revising SOP drafts to meet WorkSafeBC compliance</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Kao Corporation - Research Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Tochigi Prefecture, Japan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>August 2016 - April 2017</p>
                    </div>
                    <ul className="tasks">
                        <li>Planned and executed cell culture experiments (Western Blotting, qPCR, RT-PCR) with primary human keratinocytes and melanocytes, successfully identifying novel genes and proteins involved in autophagy regulation for skin care research advancement</li>
                        <li>Collaborated harmoniously in a cross-cultural team, enhancing Japanese language skills to adapt to the work environment</li>
                        <li>Presented a comprehensive research project presentation to Kao’s Biological Sciences Laboratory, ensuring clear communication to an audience of over 60 members</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Agriculture & Agri-Food Canada - Plant Science Research Co-op Student</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Saskatoon, Saskatchewan</p>
                    <p><IoCalendarNumber></IoCalendarNumber>October 2014 - April 2015</p>
                    </div>
                    <ul className="tasks">
                        <li>Assisted Dr. Sally Vail in the management and cultivation of rapeseed oil plants, optimizing plant health, growth conditions and seed quality through regular care and mildew prevention measures </li>
                        <li>Conducted numerous cross-breeding experiments among different donor and recipient plants to produce seeds with the desired characteristics
                        </li>
                        <li>Performed daily quantitative data entry for flowering plants</li>
                    </ul>
                </div>
            </div>
            </section>

            <section ref={volunteer}>
            <div className="volunteering">
                <h2 className="title">Volunteering Experience<RiCommunityFill></RiCommunityFill></h2>
                <div>
                    <h3 className="org">The C.O.D.E. Initiative - Remote Volunteer Tutor</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Remote</p>
                    <p><IoCalendarNumber></IoCalendarNumber>September 2024 - April 2025</p>
                    </div>
                    <ul className="tasks">
                        <li>Instructed neurodivergent youth in various S.T.E.A.M.-related topics (Web development, Python) in a virtual, one-on-one setting, helping them understand curriculum material while promoting the development of critical thinking and problem-solving skills</li>
                        <li>Provided clear, concise follow-up notes to parents and guardians to notify progress</li>
                    </ul>
                    <hr className = "divider"></hr>
                    <h3 className="org">Children's Health Policy Centre - Research Assistant</h3>
                    <div className="job-info">
                    <p><FaLocationDot></FaLocationDot>Vancouver, British Columbia</p>
                    <p><IoCalendarNumber></IoCalendarNumber>May 2015 - August 2016</p>
                    </div>
                    <ul className="tasks">
                        <li>Aided Dr. Andrea Gonzalez in the BC Healthy Connections Project, a randomized controlled trial of the Nurse-Family Partnership program, with quantitative Excel data entry for over 500 study participants, biological specimen sampling kit preparation and video-editing</li>
                        <li>Supervised new trainees and interns with concise instruction and conducive feedback</li>
                    </ul>
                </div>
            </div>
            </section>

            <section ref={hobbies}>
            <div className="hobbies">
                <div className="hobbies-intro-section">
                <h2 className="title">Personal Interests<IoIosHappy></IoIosHappy></h2>
                <p>Outside of building projects, coding and studying, I often invest my time in a wide array of hobbies. Check out some of the fun things I do below!</p>
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