import './ProjectCard.css';


function ProjectCard({ title, image, type, description, url, stack }) {

    return(
        <>
        <div className='project-container'>
            <h3>{ title }</h3>
            <img src={ image } className="project-image"></img>
            <h4>{ type }</h4>
            <p>{description}</p>
            <h4 className="tech-stack-title">Tech Stack</h4>
            <div className='tech-stack-container'>
                {stack.map((Icon, index) => (
                    <Icon key={index} size={35} title={Icon.displayName} className="tech-icon" />
                ))}
            </div>
            <button className = "code-button"><a href = { url } target="_blank">Github Repo</a></button>
        </div>
        </>
    )
}
// Pass in data so that the Project Card component becomes
// reusable! Cool beans. Did not know this existed.

export default ProjectCard;