import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact({name, phone, email, img}) {
    return (
        <div className="contact">
            <img
                className="contact-img"
                src={img}
            />
            <h2 className="contact-name">{name}</h2>
            <div>
                <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                {phone}
            </div>
            <div>
               <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
               {email}
            </div>
        </div>
    )
}