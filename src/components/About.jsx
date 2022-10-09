import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
    <div className="About">
        <h1>This is About Page</h1>
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/myapp">MyApp</Link>
    </div>
    )
}

export default About;
