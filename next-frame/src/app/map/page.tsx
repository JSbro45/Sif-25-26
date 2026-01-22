'use client';
import { useRef, useState } from 'react';
import MapModule from './components/MapModule'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import EventView from './components/EventView'
import { LatLngExpression } from 'leaflet';
import { MarkerProps } from '../../lib/map-ents';
import '../styles/map.css'


export default function MapPage() {
  const selectedRef = useRef<MarkerProps | null>(null)
  const [viewEvent, setViewEvent] = useState(false)

  return (
    <>
      <Header/>
      <main>
        <div>
          <Header/>
          <PlusBar signedIn={false}/>
          <SearchBar/>
          <MapModule
            map_type='page'
            onMarkerClick={(payload) => {
              selectedRef.current = payload
              setViewEvent(true) // triggers render to show EventView
            }}
          />
          <PlusBar signedIn={true}/>
          <SearchBar/>
          <DateIcon/>
        </div>
        {(viewEvent && selectedRef.current)?(
          <EventView
            eventName={selectedRef.current.event}
            onClose={() => setViewEvent(false)}
          />
        ): null}
      </main>
    </>
  )
}