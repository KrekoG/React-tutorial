import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
    const [info, setInfo] = React.useState(props)

    function toggleFavorite() {
        setInfo(prevInfo => {
            return {...prevInfo, isFavorite: !prevInfo.isFavorite}
        })
    }

    return (
        <div className={`contact ${info.isFavorite ? "favorite-contact" : "non-favorite-contact"}`}>
            <img
                onClick={toggleFavorite}
                className="contact-img"
                src={info.img}
            />
            <h2 className="contact-name">{info.name} {info.isFavorite && <FontAwesomeIcon className="contact-favorite-icon" icon={faStar} />}</h2>
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