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
        setBoxes(prev => prev.map(obj =>
            obj.id === id ? {...obj, on: !obj.on} : obj
        ))
    }

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    const boxElements = boxes.map(box =>
        <Box
            handleClick={() => boxClickHandler(box.id)}
            key={box.id}
            on={box.on}
        />
    )

    return (
        <main className={`${darkMode ? "dark-mode" : ""}`}>
            <button className="dark-mode-button" onClick={toggleDarkMode}>{darkMode? "light mode" : "dark mode"}</button>
            <div className="box-container" style={mainStyles}>
                {boxElements}
            </div>
        </main>
    )
}