import React from "react"
import memesData from '../../memesData.js'

export default function Meme() {
    const [allMemesImages, setAllMemesImages] = React.useState(memesData)
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });


    function buttonClickHandler() {
        const memes = allMemesImages.data.memes;
        const randomMemeIndex = Math.floor(Math.random() * memes.length);
        setMeme(prevMeme => ({...prevMeme, randomImage: memes[randomMemeIndex].url}))
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

            <img className="memage" src={meme.randomImage} />
        </section>
    )
}