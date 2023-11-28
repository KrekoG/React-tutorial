import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <div className="header">
            <h1 className="common-name">Bison</h1>
            <h2 className="latin-name">Bison bison</h2>
            <h3 className="nick-name">Grass eatin' good boi</h3>
            <a className="button"
                href="https://earthjustice.org/article/top-four-reasons-the-american-bison-makes-a-great-mascot"
                target="_blank"
            ><FontAwesomeIcon icon="image" /> Source of picture</a>
        </div>
    )
}
