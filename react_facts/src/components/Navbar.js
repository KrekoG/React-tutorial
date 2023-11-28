import React from 'react';
import react_logo from '../images/react_logo.png';

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src={react_logo}/>
            <h3 className="nav-title">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}