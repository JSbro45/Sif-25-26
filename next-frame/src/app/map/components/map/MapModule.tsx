'use client'

import { MapContainer, TileLayer } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MarkerProps, AddressProps, EventProps } from '../../../../lib/map-types'
import { API_KEY } from '@/src/lib/map-keys'

export default function MapModule({ map_type, pins, onMarkerClick, activeMarker = null, onMarkerActiveChange } : {
    map_type: 'page' | 'embed',
    pins : AddressProps[], 
    onMarkerClick: (selected: AddressProps) => void, 
    activeMarker?: AddressProps | null, 
    onMarkerActiveChange?: (event: AddressProps | null) => void,
}) {

  return (
    <div className={ map_type + '-map'}>
      <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>'
          url={`https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}`}
        />
        {
          pins.map((pin, key) => 
            <MarkerWindow
              key={key}
              location={pin.coordinates}
              isActiveMarker={activeMarker === pin}
              onActiveChange={(active) => {
                onMarkerClick && onMarkerClick(pin);
                onMarkerActiveChange?.(active ? pin : null);
              }}
            />
          )
        }
      </MapContainer>
    </div>
  )
}
