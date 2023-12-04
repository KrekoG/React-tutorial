import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'

import Star from './Star'

export default function Contact(props) {
    const [info, setInfo] = React.useState(props)

    function toggleFavorite() {
        setInfo(prevInfo => ({...prevInfo, isFavorite: !prevInfo.isFavorite}))
    }

    return (
        <div className={`contact ${info.isFavorite ? "favorite-contact" : "non-favorite-contact"}`}>
            <img className="contact-img" src={info.img} />
            <h2 className="contact-name">{info.name} <Star isFilled={info.isFavorite} handleClick={toggleFavorite} /></h2>
            <div>
                <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                {info.phone}
            </div>
            <div>
               <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
               {info.email}
            </div>
        </div>
    )
}