import React from 'react';
import projects from './data/projects';
import Navbar from './Navbar';

function Projects() {
    return (
        <div>
            <Navbar />
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a href={project.url}>Project Link</a>
                </div>
            ))}
        </div>
    );
};

export default Projects;