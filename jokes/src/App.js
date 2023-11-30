import React from 'react'
import './css/main.scss'

import Joke from './components/Joke'

export default function App() {
    return (
        <main>
            <Joke
                setup="Joke setup"
                punchline="joke punchline"
            />
            <Joke
                setup="Joke setup"
                punchline="joke punchline"
            />
            <Joke
                punchline="just the punchline"
            />
            <Joke
                setup="Joke setup"
                punchline="joke punchline"
            />
        </main>
    )
}