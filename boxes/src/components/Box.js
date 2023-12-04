import React from 'react'

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)

    function toggleOn() {
        setOn(prev => !prev)
    }

    return (
        <div onClick={toggleOn} className={`box ${on ? "on" : ""}`}>
        </div>
    )
}