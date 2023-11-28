import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons'
import "./style/main.scss"
import Card from './components/Card'
import Header from './components/Header'
import Articles from './components/Articles'
import SocialMediaIcons from './components/SocialMediaIcons'

library.add(fab, faImage)

export default function App() {
    return (
        <Card>
            <Header />
            <Articles />
            <SocialMediaIcons />
        </Card>
    )
}