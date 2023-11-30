import React from 'react'

export default function Joke(props) {
    return (
        <div className="joke">
            {props.setup && <p>{props.setup}</p>}
            <p>{props.punchline}</p>
        </div>
    )
}