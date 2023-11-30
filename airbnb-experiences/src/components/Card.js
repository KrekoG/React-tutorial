import React from "react";
import { faStar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({key, props}) {
    let badgeText
    let showBadge = false;

    if (props.openSpots == 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image" src={props.img} />
            </div>
            {badgeText && <span className="card-badge">{badgeText}</span>}
            <div className="card-stats">
                <span>
                    <FontAwesomeIcon className="card-star" icon={faStar} />
                    {props.rating}
                    <span className="gray-font">
                        ({props.reviewCount}) <FontAwesomeIcon icon={faCircle} /> {props.location}
                    </span>
                </span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    );
}