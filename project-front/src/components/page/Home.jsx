//import { useState } from 'react'
import { Header } from "./Header.jsx";
import Map from '../map/Map.jsx'

export default function HomePage() {
    return (
        <main>
            <Header/>
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main landing page of the application.</p>
            </div>
            <Map/>
        </main>
    )
}