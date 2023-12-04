import React from 'react'

import './css/main.scss'
import boxData from '../boxData.js'

import Box from './components/Box'

export default function App() {
    const [boxes, setBoxes] = React.useState(boxData)
    const [darkMode, setDarkMode] = React.useState(true)

    const mainStyles = {
        backgroundColor: darkMode ? "#666666" : "#F8F8F8"
    }

    function boxClickHandler() {
        setBoxes(prev => [...prev, ])
    }

    const boxElements = boxes.map(box =>
        <Box key={box.id} on={box.on} handleClick={boxClickHandler} />
    )

    return (
        <main style={mainStyles} className={`${darkMode ? "dark-mode" : ""}`}>
            {boxElements}
        </main>
    )
}