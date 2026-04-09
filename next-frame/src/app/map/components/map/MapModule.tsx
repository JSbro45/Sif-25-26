'use client';

import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet' 
import MarkerWindow from './MarkerWindow'
import 'leaflet/dist/leaflet.css'
import { MarkerProps, AddressProps, EventProps } from '../../../../lib/map-types'
import { getPins } from '@/src/lib/data-fetch';
import { API_KEY } from '@/src/lib/map-keys'

export default function MapModule({ map_type, markers: address, onMarkerClick, activeMarker = null, onMarkerActiveChange } : {
    map_type: 'page' | 'embed',
    markers : AddressProps[], 
    onMarkerClick?: (selected: AddressProps) => void, 
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
          address.map((address, key) => 
            <MarkerWindow
              key={key}
              location={address.coordinates}
              isActiveMarker={activeMarker === address}
              onActiveChange={(active) => {
                onMarkerClick && onMarkerClick(address);
                onMarkerActiveChange?.(active ? address : null);
              }}
            />
          )
        }
      </MapContainer>
    </div>
  )
}
