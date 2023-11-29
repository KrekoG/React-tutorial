import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <nav className="nav">
            <h1 className="nav-title">
                <FontAwesomeIcon icon="fa-brands fa-airbnb" />
                <span className="nav-brandname">airbnb</span>
            </h1>
        </nav>
    );
}