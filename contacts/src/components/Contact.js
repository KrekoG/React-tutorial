import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props) {
    const {name, phone, email, img, isFavorite} = props;

    const [favorite, setFavorite] = React.useState(isFavorite)

    function toggleFavorite() {
        setFavorite(prevState => !prevState)
    }

    return (
        <div className={`contact ${favorite ? "favorite-contact" : "non-favorite-contact"}`}>
            <img
                onClick={toggleFavorite}
                className="contact-img"
                src={img}
            />
            <h2 className="contact-name">{name} {favorite && <FontAwesomeIcon className="contact-favorite-icon" icon={faStar} />}</h2>
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