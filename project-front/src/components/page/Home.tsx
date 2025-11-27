//import { useState } from 'react'
import Header  from "./Header";
import MapModule from '../map/Map'
import '../../styles/home.css'


export default function HomePage() {
    return (
        <div className="home-page">
            <Header/>
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main landing page of the application.</p>
            </div>
            <MapModule/>
        </div>
    )
}