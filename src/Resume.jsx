import React from 'react';
import { studies, experiences } from './data/resume';
import Navbar from './Navbar';

function Resume() {
    return (
        <div>
            <Navbar />
            <h1>Resume</h1>
            <h2>Work Experience</h2>
            {experiences.map((experience) => (
                <div key={experience.id}>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>
                </div>
            ))}
            <h2>Education</h2>
            {studies.map((study) => (
                <div key={study.id}>
                    <h3>{study.title}</h3>
                    <p>{study.institution}</p>
                    <p>{study.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Resume;