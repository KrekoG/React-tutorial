import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

library.add(fab, faImage)

export default function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cards />
        </main>
    )
}