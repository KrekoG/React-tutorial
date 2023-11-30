import React from "react";
import Card from "./Card";
import swimmer from "../img/swimmer.jpg";


export default function Cards() {
    return (
        <section className="cards">
            <Card
                img={swimmer}
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life lessons with this swimmer dude, who's name I do not know."
                price={136}
                soldOut={true}
            />
        </section>
    )
}