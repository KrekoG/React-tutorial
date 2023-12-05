import React from 'react'

import './css/main.scss'

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    function handleClick() {
        setCount(prev => prev + 1)
    }

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        console.log("Effect function ran!");
    }, [count])

    console.log("A render happened!")

    return (
        <main>
            <p>The count is {count}</p>
            <button onClick={handleClick}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </main>
    )
}