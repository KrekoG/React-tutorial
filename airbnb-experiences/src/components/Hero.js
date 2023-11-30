import React from "react";
import airbnb_mix from "../img/airbnb_mix.png";

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-image" src={airbnb_mix} />
            <h2 className="hero-header">Online Experiences</h2>
            <p className="hero-paragraph">
                Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
            </p>
        </div>
    );
}