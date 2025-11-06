import { useState } from 'react'
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet' 
import { LMarker } from './marker-window'
import 'leaflet/dist/leaflet.css'
import { MapAttributes } from '../map-attrib'
import '../Map.css'

export default function Map() {
  //const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  const mapAtt = new MapAttributes()
  const marks = mapAtt.markers
  return (
    <>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            {marks.map((mark) => {
              <Marker position={mark.coords}>
                  <Popup>
                      <ul className="event-thumbnail">
                          <li> <span className="event"> 
                                  <b className="n"> event: </b> {mark.event} </span> 
                          </li>
                          <li> <span className="email">
                                  <b className="n"> email: </b> {mark.email} </span> 
                          </li>
                      </ul>
                  </Popup>
              </Marker>
            })}
            <Marker position={[50,15]} />
      </MapContainer>
    </>
  )
}
