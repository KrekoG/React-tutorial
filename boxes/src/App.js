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

    function boxClickHandler(id) {
        setBoxes(prev => prev.map(obj => {
            if (obj.id === id) {
                obj.on = !obj.on
            }
            return obj;
        }))
    }

    const boxElements = boxes.map(box =>
        <Box
            handleClick={boxClickHandler}
            key={box.id}
            id={box.id}
            on={box.on}
        />
    )

    return (
        <main style={mainStyles} className={`${darkMode ? "dark-mode" : ""}`}>
            {boxElements}
        </main>
    )
}