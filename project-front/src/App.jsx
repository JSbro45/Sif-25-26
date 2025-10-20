import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MapContainer, TileLayer} from 'react-leaflet' 


export default function Map() {
  const API_KEY = "9DkBdKq2zLtbtPX8ozoHjiakIoOeV6gjxjbOdk0cEhk"
  const position = [51.505, -0.09]
  return (
    <div>
      <h3>Map:</h3>
      <MapContainer></MapContainer>
    </div>
  )
}
