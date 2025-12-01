'use client';

//import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapAttributes } from '../../map-attrib'
//import '../../../styles/map.css'

type MapType = 'page' | 'embed'

export default function MapModule({ map_type }: {map_type: MapType}) {
  //const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  const mapAtt = new MapAttributes()
  return (
      <MapContainer className={ map_type } center={[50,15]} zoom={12} scrollWheelZoom={false}>
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
