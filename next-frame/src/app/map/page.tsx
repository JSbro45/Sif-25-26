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
import { get } from 'http';


export default function MapPage() {
  const selectedRef = useRef<MarkerProps | null>(null)
  const dateRef = useRef<string | null>(null)
  const searchRef = useRef<string | null>(null)
  const [activeMarkerEvent, setActiveMarkerEvent] = useState<string | null>(null)
  const [pinFilter, setPinFilter] = useState<{date?: string, search?: string}>({})

  return (
    <>
      <Header/>
      <main>
        <div>
          <MapModule
            map_type='page'
            markers={[getPins() as unknown as MarkerProps]}
            activeMarkerEvent={activeMarkerEvent}
            onMarkerClick={(payload: MarkerProps) => {
              selectedRef.current = payload
            }}
            onMarkerActiveChange={setActiveMarkerEvent}
          />
           <SearchBar ref={searchRef} onSearch={handleSearch} />
           <DateIcon ref={dateRef} onDateChange={handleDateChange} />

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