'use client';

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapAttributes } from '../../map-attrib'
import '../../../styles/map.css'

type MapType = 'page' | 'embed'

export default function MapModule({ map_type }: {map_type: MapType}) {
  const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  const mapAtt = new MapAttributes()
  
  return (
    <div className={ map_type + '-map'}>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url="https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=$+{API_KEY}"
        />
        {
          mapAtt.markers.map((mark, key) => (
            <MarkerWindow key={key} pos={mark.coords} evt={mark.event} />
          ))
        }
      </MapContainer>
  </div>
  )
}
