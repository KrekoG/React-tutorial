import React from 'react';

export default function Article(props) {
    const {title} = props
    return (
        <div>
            <h2>{title}</h2>
            <p className="article">{props.children}</p>
        </div>
    )
}
