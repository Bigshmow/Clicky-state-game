/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Style.css';

function Navbar (props) {
    return(
    <nav className="navbar sticky-top navbar-dark bg-primary">
        <span className="navbar-brand mb-0"><h1>ClickyGame</h1></span>
        <span><h1 className="socialMedia">Score counter: {props.points} | High Score: {props.score}</h1></span>
        <h1 className="socialMedia">
        <a alt="linkedin" href="https://www.linkedin.com/in/devin-stewart-7697bb9b/" className="fa fa-linkedin"></a> 
        |
        <a alt="github" href="https://github.com/Bigshmow" className="fa fa-github"></a>
        </h1>
    </nav>
)
}

export default Navbar;