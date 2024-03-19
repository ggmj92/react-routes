import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {
    console.log('Home page rendered!')
    return (
        <>
        <div>
            <Navbar />
            <h1>Welcome to ggmj's portfolio</h1>
            <p>I'm a web developer student with a passion for building beautiful and functional websites. Check out my projects and resume to learn more about me.</p>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
        </div>
        </>
    );
};

export default Home;