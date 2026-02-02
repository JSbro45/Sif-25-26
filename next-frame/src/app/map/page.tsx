'use client';
import { useRef, useState } from 'react';
import MapModule from './components/MapModule'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import EventView from './components/EventView'
import { LatLngExpression } from 'leaflet';
import { MarkerProps, MarkerEntity } from '../../lib/map-ents';
import '../styles/map.css'


export default function MapPage() {
  const selectedRef = useRef<{ event:string; pos:LatLngExpression; time: Date } | null>(null)
  const [activeMarkerEvent, setActiveMarkerEvent] = useState<string | null>(null)

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
            activeMarkerEvent={activeMarkerEvent}
            onMarkerClick={(payload) => {
              selectedRef.current = payload
            }}
            onMarkerActiveChange={setActiveMarkerEvent}
          />
           <SearchBar></SearchBar>
           <DateIcon></DateIcon>

      <div className='evtview-plusbar' data-event-open={activeMarkerEvent? true : false}>
           <div className='plus-bar-container'>
           <PlusBar signedIn={true}></PlusBar>
           </div>
        </div>
        {(activeMarkerEvent && selectedRef.current)?(
          <EventView
            eventName={selectedRef.current.event}
            onClose={() => setActiveMarkerEvent(null)}
          />
        ): null}
      </div>
      </main>
    </>
  )
}