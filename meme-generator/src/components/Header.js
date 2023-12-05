import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceRollingEyes} from "@fortawesome/free-regular-svg-icons"

export default function Header() {
    return (
        <header className="header gradient-background">
            <h1><FontAwesomeIcon icon={faFaceRollingEyes} /> Meme Generator</h1>
            <p>React Course - Project 3</p>
        </header>
    );
}