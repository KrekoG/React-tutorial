import React from 'react'

import Counter from './components/Counter'

export default function App() {
    let [count, setCount] = React.useState(0);

    function increase() {
        setCount(prev => prev + 1)
    }

    function decrease() {
        setCount(prev => prev - 1)
    }

    return (
        <main>
            <Counter count={count} />
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </main>
    )
}