import React from "react";
import react_logo from "../images/react_logo.png";

export default function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src={react_logo} />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
