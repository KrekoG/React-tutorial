import React from 'react'
import memesData from '../../memesData.js'

export default function Controls() {
    function buttonClickHandler() {
        const memes = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const url = memes[randomIndex].url;
        console.log(url);
    }

    const [things, setThings] = React.useState(["Thing #1", "Thing #2"]);

    function addThing() {
        setThings(prevState => [...prevState, `Thing #${things.length + 1}`]);
    }

    const pElements = things.map(thing => <p key={thing}>{thing}</p>);

    return (
        <section>
            <input
                onClick={addThing}
                className="controls-get-new-button"
                type="button"
                value="Addd things"
            />
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
            {pElements}
            <input
                onClick={buttonClickHandler}
                className="controls-get-new-button"
                type="button"
                value="Get a new meme image 🖼️"
            />
        </section>
    )
}