import React from 'react'

import './style.scss'

export default function App() {
    const [list, setList] = React.useState([])

    function addToList() {
        setList(prevList => [...prevList, `Item ${prevList.length + 1}`])
    }

    const listElements = list.map(item =>
        <p key={item} className="item">{item}</p>
    )

    return (
        <main>
            <input
                onClick={addToList}
                className="AddButton"
                type="button"
                value="Add item"
            />
            {listElements}
        </main>
    )
}