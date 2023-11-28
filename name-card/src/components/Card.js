import React from 'react';
import bison from '../images/bison.png';

export default function Card(props) {
    return (
        <main className="card">
            <img className="picture" src={bison}/>
            <div className="card-container">
                {props.children}
            </div>
        </main>
    )
}