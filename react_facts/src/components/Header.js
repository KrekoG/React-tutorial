import React from "react";

export default function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src="/img/react_logo.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
