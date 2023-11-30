import React from 'react'

import './css/main.scss'
import destinationsData from '../destinationsData'

import Header from './components/Header'
import Destination from './components/Destination'

export default function App() {
    const destinationElements = destinationsData.map(destination =>
        <Destination key={destination.id} props={destination} />
    )

    return (
        <main>
            <Header />
            {destinationElements}
        </main>
    )
}