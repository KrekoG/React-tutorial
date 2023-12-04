import React from 'react'

export default function Box(props) {
    return (
        <div
            onClick={props.handleClick}
            className={`box ${props.on ? "on" : ""}`}
        >
        </div>
    )
}