import React from 'react'
import './css/main.scss'

import WindowTracker from './components/WindowTracker'

export default function App() {
    const [show, setShow] = React.useState(true)

    function toggleShow() {
        setShow(prev => !prev)
    }

    return (
        <main className="container">
            <button onClick={toggleShow}> Toggle WindowTracker</button>
            {show && <WindowTracker />}
        </main>
    )
}