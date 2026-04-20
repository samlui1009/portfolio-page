// We'll also need useEffect and useState eventually
// Pass state from parent component of the page so it conditionally renders what we want?

import React from 'react';
import './ProjectFilterBar.css';

function ProjectFilterBar() {

    return (
        <div className="project-filter-ctn">
            <ul className="project-filter-list">
                <li className="filter-link">All Projects</li>
                <li className="filter-link">Academic Projects</li>
                <li className="filter-link">Hackathon Projects</li>
                <li className="filter-link">Personal Projects</li>
            </ul>
        </div>
    );
};

export default ProjectFilterBar;
