'use client';
import { useRef, useState } from 'react';
import MapModule from './components/MapModule'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import EventView from './components/EventView'
import { LatLngExpression } from 'leaflet';
import '../styles/map.css'


export default function MapPage() {
  const selectedRef = useRef<{ event:string; pos:LatLngExpression; time: Date } | null>(null)
  const [viewEvent, setViewEvent] = useState(false)

  return (
    <>
      <Header/>
      <main>
        <div>
          <MapModule
            map_type='page'
            onMarkerClick={(payload) => {
              selectedRef.current = payload
              setViewEvent(true) // triggers render to show EventView
            }}
          />
          <DateIcon></DateIcon>
          <SearchBar></SearchBar>
          <PlusBar signedIn={true}></PlusBar>
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
