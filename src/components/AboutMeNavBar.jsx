import './AboutMeNavBar.css';

function AboutMeNavBar({
    onScrollToEducation,
    onScrollToTech,
    onScrollToProfExp,
    onScrollToVolunteer,
    onScrollToHobbies
}) 
// We want component to receive data or functions from the parent, which is 
// in AboutMe.jsx, so we pass them in as props => Explicitly defined above 
// Then used as "On Click" below
    {
        return (
    <>
    <div className="nav">
        <ul className="legend">
            <li className="link" onClick={onScrollToEducation}>Education</li>
            <li className="link" onClick={onScrollToTech}>Technical Skills</li>
            <li className="link" onClick={onScrollToProfExp}>Professional Experience</li>
            <li className="link" onClick={onScrollToVolunteer}>Volunteering Experience</li>
            <li className="link" onClick={onScrollToHobbies}>Hobbies & Interests</li>
        </ul>
    </div>
    </>
    )
}

export default AboutMeNavBar