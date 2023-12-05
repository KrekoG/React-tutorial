import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as star } from '@fortawesome/free-solid-svg-icons'
import { faStar as hollowStar} from '@fortawesome/free-regular-svg-icons'

export default function Star(props) {
    return (
        <span onClick={props.handleClick}>
            {props.isFilled
                ? <FontAwesomeIcon className="contact-favorite-icon" icon={star} />
                : <FontAwesomeIcon className="contact-favorite-icon" icon={hollowStar} />}
        </span>
    )
}