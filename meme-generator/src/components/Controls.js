import React from 'react'
import memesData from '../../memesData.js'

export default function Controls() {
    function buttonClickHandler() {
        const memes = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const url = memes[randomIndex].url;
        console.log(url);
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