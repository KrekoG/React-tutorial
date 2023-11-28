import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialMediaIcons() {
    return (
        <nav className="social-media-icons">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
            <FontAwesomeIcon icon={['fab', 'instagram-square']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            <FontAwesomeIcon icon={['fab', 'github-square']} />
        </nav>
    )
}
