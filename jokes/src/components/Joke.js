import React from 'react'

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prev => !prev)
    }

    return (
        <div className="joke">
            {props.setup && <p>{props.setup}</p>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>
                {isShown? "Hide" : "Show"} Punchline
            </button>
        </div>
    )
}