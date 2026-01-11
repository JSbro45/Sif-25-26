'use client';
import { useRef, useState } from 'react';
import MapModule from './components/MapModule'
//import EventView from './components/EventView'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import '../styles/map.css'
import EventView from './components/EventView'


export default function MapPage() {
  const selectedRef = useRef<{ event:any; pos:any; } | null>(null)
  const [viewEvent, setViewEvent] = useState(false)

  return (
    <main>
      <div>
        <Header/>
        <MapModule
          map_type='page'
          onMarkerClick={(payload) => {
            selectedRef.current = payload
            setViewEvent(true) // triggers render to show EventView
          }}
        />
        <PlusBar signedIn={false}></PlusBar>
        <SearchBar></SearchBar>
        <DateIcon></DateIcon>
      </div>

      {viewEvent && selectedRef.current && (
        <EventView
          eventName={selectedRef.current.event}
        />
      )}
    </main>
  )
}
