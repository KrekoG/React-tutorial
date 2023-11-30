import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
    console.log(props);
    return (
        <div className="contact">
            <img
                className="contact-img"
                src={props.img}
            />
            <h2 className="contact-name">{props.name}</h2>
            <div>
                <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                {props.phone}
            </div>
            <div>
               <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
               {props.email}
            </div>
        </div>
    )
}