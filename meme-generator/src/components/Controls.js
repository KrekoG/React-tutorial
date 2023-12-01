import React from 'react'

export default function Controls() {
    return (
        <section>
            <div className="controls-text-container">
                <input
                    className="controls-text"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    className="controls-text"
                    type="text"
                    placeholder="Bottom text"
                />
            </div>
            <input
                className="controls-get-new-button"
                type="button"
                value="Get a new meme image 🖼️"
            />
        </section>
    )
}