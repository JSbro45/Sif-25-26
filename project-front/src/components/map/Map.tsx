import { useState } from 'react'
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapAttributes } from '../../map-attrib'
import '../../styles/map.css'


export default function Map() {
  //const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  const mapAtt = new MapAttributes()
  return (
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          mapAtt.markers.map((mark, key) => (
            <MarkerWindow key={key} pos={mark.coords} evt={mark.event} />
          ))
        }
      </MapContainer>
  )
}
