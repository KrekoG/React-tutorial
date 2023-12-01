import React from 'react'
import memesData from '../../memesData.js'

export default function Controls() {
    const memes = memesData.data.memes;
    console.log(
        memes[Math.floor(Math.random() * memes.length)]
    );

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