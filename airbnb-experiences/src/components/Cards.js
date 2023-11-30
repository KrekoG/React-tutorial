import React from "react";
import Card from "./Card";
import cardsData from "../../cardsData.js";

export default function Cards() {
    const cardElements = cardsData.map(card =>
        <Card
            key={card.id}
            img={card.img}
            rating={card.rating}
            reviewCount={card.reviewCount}
            country={card.country}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
        />
    )

    return (
        <section className="cards">
            {cardElements}
        </section>
    )
}