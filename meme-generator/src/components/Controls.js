import React from 'react'

export default function Controls() {
    function buttonClickHandler() {
        console.log('the button was clicked!')
    }

    function hoverHandler() {
        console.log('the hover has happened!')
    }

    return (
        <section>
            <div className="controls-text-container">
                <input
                    className="controls-text"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    onMouseOver={hoverHandler}
                    className="controls-text"
                    type="text"
                    placeholder="Bottom text"
                />
            </div>
            <input
                onClick={buttonClickHandler}
                className="controls-get-new-button"
                type="button"
                value="Get a new meme image 🖼️"
            />
        </section>
    )
}