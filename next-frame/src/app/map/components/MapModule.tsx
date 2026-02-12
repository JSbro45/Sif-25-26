'use client';

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapEntities, MarkerProps } from '../../../lib/map-ents'
import { getPins } from '@/src/lib/data-fetch';
import { LatLngTuple } from 'leaflet';


export default function MapModule({ map_type, markers, onMarkerClick, activeMarkerEvent, onMarkerActiveChange } : {
    map_type: 'page' | 'embed',
    markers : MarkerProps[], 
    onMarkerClick?: (payload: MarkerProps) => void, 
    activeMarkerEvent?: string | null, 
    onMarkerActiveChange?: (event: string | null) => void 
}) {
  const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'

  if (markers!) {
    markers = [
      {coords:[50,15], event:'rockfest', time: new Date('2024-07-20T18:30:00')},
      {coords:[49.612,14.48], event:'jazzfest', time: new Date('2024-07-20T20:30:00')},
      {coords:[49.24,15.701], event:'rockfest2', time: new Date('2024-07-20T19:30:00')}
    ]
  }

  return (
    <div className={ map_type + '-map'}>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url={`https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`}
        />
        {
          markers?.map((mark, key) => 
            <MarkerWindow
              key={key}
              evtInfo={mark}
              isActiveMarker={activeMarkerEvent === mark.event}
              onActiveChange={(active) => {
                onMarkerClick && onMarkerClick(mark);
                onMarkerActiveChange?.(active ? mark.event : null);
              }}
            />
          )
        }
      </MapContainer>
    </div>
  )
}
