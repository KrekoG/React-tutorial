import React from "react";
import Card from "./Card";
import cardsData from "../../cardsData.js";

export default function Cards() {
    const cardElements = cardsData.map(card =>
        <Card key={card.id} props={card} />
    )

    return (
        <section className="cards">
            {cardElements}
        </section>
    )
}