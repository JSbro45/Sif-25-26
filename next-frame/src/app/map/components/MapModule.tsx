'use client';

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MarkerProps } from '../../../lib/map-types'
import { getPins } from '@/src/lib/data-fetch';
import { LatLngTuple } from 'leaflet';


export default function MapModule({ map_type, markers, onMarkerClick, activeMarkerEvent, onMarkerActiveChange } : {
    map_type: 'page' | 'embed',
    markers : MarkerProps[], 
    onMarkerClick?: (payload: MarkerProps) => void, 
    activeMarkerEvent?: MarkerProps | null, 
    onMarkerActiveChange?: (event: MarkerProps | null) => void 
}) {
  const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'


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
              isActiveMarker={activeMarkerEvent === mark}
              onActiveChange={(active) => {
                onMarkerClick && onMarkerClick(mark);
                onMarkerActiveChange?.(active ? mark : null);
              }}
            />
          )
        }
      </MapContainer>
    </div>
  )
}
