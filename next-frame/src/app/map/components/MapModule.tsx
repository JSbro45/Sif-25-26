'use client';

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapAttributes } from '../../../lib/map-attrib'
import { LatLngExpression } from 'leaflet';
import { getPins } from '@/src/lib/data-fetch';


export default function MapModule({ map_type, onMarkerClick, activeMarkerEvent, onMarkerActiveChange }: { map_type: 'page' | 'embed', onMarkerClick?: (payload: { event: string; pos: LatLngExpression, time: Date }) => void, activeMarkerEvent?: string | null, onMarkerActiveChange?: (event: string | null) => void }) {
  const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  const mapAtt = new MapAttributes()

  return (
    <div className={ map_type + '-map'}>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url={`https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`}
        />
        {
          mapAtt.markers.map((mark, key) => (
            <MarkerWindow
              key={key}
              pos={mark.coords}
              evt={mark.event}
              time={mark.time}
              isActiveMarker={activeMarkerEvent === mark.event}
              onActiveChange={(active) => {
                onMarkerClick && onMarkerClick({ event: mark.event, pos: mark.coords, time: mark.time });
                onMarkerActiveChange?.(active ? mark.event : null);
              }}
            />
          ))
        }
      </MapContainer>
    </div>
  )
}
