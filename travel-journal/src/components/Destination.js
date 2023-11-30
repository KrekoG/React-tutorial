import React from 'react'

export default function Destination({props}) {
    const date = props.endDate
        ? props.startDate + " - " + props.endDate
        : props.startDate

    return (
        <section className="destination">
            <h2 className="city"><a href={props.googleMapUrl}>{props.title}</a></h2>
            <h3 className="country">{props.location}</h3>
            <div className="destination-img-container">
                <img className="destination-img" src={props.imageUrl} />
                <div className="destination-date">{date}</div>
            </div>
            <p>{props.description}</p>
        </section>
    )
}