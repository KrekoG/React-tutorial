import React from "react";
import swimmer from "../img/swimmer.jpg";
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function() {
    return (
        <section className="card">
            <div className="card-image-container">
                <img className="card-image" src={swimmer} />
            </div>
            <span className="card-status-signifier">SOLD OUT</span>
            <div className="card-stats">
                <span className="card-rating">
                    <FontAwesomeIcon className="card-star" icon={faStar} />
                    5.0<span className="gray-font">(6) <FontAwesomeIcon icon={faCircle} /> USA</span>
                </span>
            </div>
            <p className="card-excerpt">Life lessons with this swimmer dude, who's name I do not know.</p>
            <p className="card-price"><strong>From $136</strong> / person</p>
        </section>
    );
}