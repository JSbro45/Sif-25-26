//import { useState } from 'react'
import Header  from "./Header";
import MapModule from '../map/Map'
import '../../styles/home.css'
import Map from '../map/Map'
import Footer from "./Footer";
import Header  from "./components/Header";
import MapModule from '../map/components/MapModel'
import '../styles/home.css'


export default function HomePage() {
    return (
        <><main>
            <Header />

            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main landing page of the application.</p>
            </div>
            <MapModule map_type='embed'/>
        </div>
    )
}