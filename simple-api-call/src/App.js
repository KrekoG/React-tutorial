import React from 'react'

import './css/main.scss'

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    function handleClick() {
        setCount(prev => prev + 1)
    }

    console.log("A render happened!")

    return (
        <main>
            <p>The count is {count}</p>
            <button onClick={handleClick}>+1, and reload data</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </main>
    )
}