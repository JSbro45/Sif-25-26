import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MapContainer, TileLayer} from 'react-leaflet' 
import 'leaflet/dist/leaflet.css'
import './App.css'


export default function Map() {
  const API_KEY = "9DkBdKq2zLtbtPX8ozoHjiakIoOeV6gjxjbOdk0cEhk"
  const position = [51.505, -0.09]
  return (
    <div>
      <h3>Map:</h3>
      <MapContainer>
        <TileLayer
          attribution='&copy; <a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url="https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}"
        />
      </MapContainer>
    </div>
  )
}
