import React from "react"
import memesData from '../../memesData.js'

export default function Meme() {
    const [allMemesImages, setAllMemesImages] = React.useState(memesData)
    const [meme, setMeme] = React.useState({
        topText: "Top Text",
        bottomText: "Bottom Text",
        randomImage: ""
    });

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => ({...prev, [name]: value}))
    }

    function buttonClickHandler() {
        const memes = allMemesImages.data.memes;
        const randomMemeIndex = Math.floor(Math.random() * memes.length);
        setMeme(prevMeme => ({...prevMeme, randomImage: memes[randomMemeIndex].url}))
    }

    return (
        <section>
            <div className="controls-text-container">
                <input
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                    className="controls-text"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
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

            <div className="image-container">
                <img className="memage" src={meme.randomImage} />
                <span className="top-text">{meme.topText}</span>
                <span className="bottom-text">{meme.bottomText}</span>
            </div>
        </section>
    )
}