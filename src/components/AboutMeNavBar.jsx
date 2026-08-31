import './AboutMeNavBar.css';

function AboutMeNavBar({
    onScrollToEducation,
    onScrollToTech,
    onScrollToProfExp,
    onScrollToVolunteer,
    onScrollToHobbies
}) 
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