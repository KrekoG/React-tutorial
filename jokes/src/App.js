import React from 'react'
import './css/main.scss'
import jokesData from '../jokesData'

import Joke from './components/Joke'

export default function App() {
    const jokeElements = jokesData.map(joke =>
        <Joke
            setup={joke.setup}
            punchline={joke.punchline}
        />
    )

    return (
        <main>
            {jokeElements}
        </main>
    )
}