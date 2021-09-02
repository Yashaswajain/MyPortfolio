import React from 'react'
import './ProjectCard.css'
function ProjectCard({title,live,code,image}) {
    return (
        <div className="projectCard">
        <h2>{title}</h2>
        <div>
            <a href={live} target="_blank"></a>
            <a href={code} target="_blank"></a>
        </div>
        </div>
    )
}

export default ProjectCard
