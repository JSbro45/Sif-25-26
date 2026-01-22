'use client';

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MapEntities, MarkerProps } from '../../../lib/map-ents'
import { getPins } from '@/src/lib/data-fetch';


export default function MapModule({ map_type, onMarkerClick, markers}: { 
    map_type : 'page' | 'embed' , 
    onMarkerClick?: (payload: MarkerProps) => void, 
    markers?: MarkerProps[]
  }) {

  const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
  
  const mapEntities = markers ? 
    new MapEntities(markers) : 
    new MapEntities([
          {coords:[50,15], event:'rockfest', time: new Date('2024-07-20T18:30:00')},
          {coords:[49.612,14.48], event:'jazzfest',time: new Date('2024-07-20T20:30:00')},
          {coords:[49.24,15.701], event:'rockfest2', time: new Date('2024-07-20T19:30:00')}
      ]);

  return (
    <div className={ map_type + '-map'}>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url={`https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`}
        />
        {
          mapEntities.markers.map((mark, key) => (
            <div onClick={() => onMarkerClick && onMarkerClick({ event: mark.event, coords: mark.coords, time: mark.time })}>
            <MarkerWindow
              key={key}
              pos={mark.coords}
              evt={mark.event}
              time={mark.time}
              dbClick={() => onMarkerClick && onMarkerClick({ event: mark.event, coords: mark.coords, time: mark.time })}
            />
            </div>
          ))
        }
      </MapContainer>
    </div>
  )
}
