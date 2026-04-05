// We'll also need useEffect and useState eventually
// Pass state from parent component of the page so it conditionally renders what we want?

import React from 'react';
import './ProjectFilterBar.css';

function ProjectFilterBar() {

    return (
        <div className="project-filter-ctn">
            <ul className="project-filter-list">
                <li>All Projects</li>
                <li>Academic Projects</li>
                <li>Hackathon Projects</li>
                <li>Personal Projects</li>
            </ul>
        </div>
    );
};

export default ProjectFilterBar;
