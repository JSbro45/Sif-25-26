//import { useState } from 'react'
import Header  from "./Header";
<<<<<<< HEAD
import MapModule from '../map/Map'
import '../../styles/home.css'
=======
import Map from '../map/Map'
import Footer from "./Footer";
>>>>>>> template-to-tsx


export default function HomePage() {
    return (
<<<<<<< HEAD
        <div className="home-page">
            <Header/>
=======
        <><main>
            <Header />
>>>>>>> template-to-tsx
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main landing page of the application.</p>
            </div>
<<<<<<< HEAD
            <MapModule/>
        </div>
=======
            <Map />
        </main><Footer /></>
>>>>>>> template-to-tsx
    )
}