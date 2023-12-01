import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './css/main.scss'

import Contact from './components/Contact'

export default function App(){
    return (
        <main className="contacts">
            <Contact
                name="Mr. Whisker"
                phone="07 432 078 9996"
                email="whiskers@mail.com"
                img="https://i.imgur.com/a5KSiQo.jpg"
                isFavorite={true}
            />
            <Contact
                name="Duke"
                phone="07 436 022 9567"
                email="duke@mail.com"
                img="https://i.imgur.com/0t79ArE.jpg"
                isFavorite={false}
            />
            <Contact
                name="Fluffball"
                phone="07 133 257 6634"
                email="fluffington@mail.com"
                img="https://i.imgur.com/GBH2Qi5.jpg"
                isFavorite={false}
            />
            <Contact
                name="Michaelo"
                phone="07 873 861 6777"
                email="mike@mail.com"
                img="https://i.imgur.com/6KqpQLC.png"
                isFavorite={false}
            />
        </main>
    )
}