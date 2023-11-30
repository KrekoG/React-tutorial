import React from "react";
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props) {
    return (
        <section className="card">
            <div className="card-image-container">
                <img className="card-image" src={props.img} />
            </div>
            {props.openSpots == 0 && <span className="card-status-signifier">SOLD OUT</span>}
            <div className="card-stats">
                <span className="card-rating">
                    <FontAwesomeIcon className="card-star" icon={faStar} />
                    {props.rating}
                    <span className="gray-font">
                        ({props.reviewCount}) <FontAwesomeIcon icon={faCircle} /> {props.country}
                    </span>
                </span>
            </div>
            <p className="card-excerpt">{props.title}</p>
            <p className="card-price"><strong>From ${props.price}</strong> / person</p>
        </section>
    );
}