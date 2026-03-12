'use client'

import MapModule from "./map/MapModule";
import SearchBar from "../../home/components/SearchBar";
import DateIcon from "./DateIcon";
import PlusBar from "./PlusBar";
import EventView from "./EventView";
import { useRef, useState } from "react";
import { MarkerProps } from "../../../lib/map-types";


export default function MapAndSelectors({ initialMarkers}: { initialMarkers: MarkerProps[] }) {
  const [markers, setMarkers] = useState<MarkerProps[]>(initialMarkers)
  const [activeMarkerEvent, setActiveMarkerEvent] = useState<MarkerProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const selectedRef = useRef<MarkerProps | null>(null)
  const searchRef = useRef<string>('')
  const dateRef = useRef<string>('')

    console.log('Initial markers:', initialMarkers)
  /*
  const handleSearch = async () => {
    setIsLoading(true)
    try {
      const newMarkers = await onSearch({
        search: searchRef.current,
        date: dateRef.current
      })
      setMarkers(newMarkers)
    } catch (error) {
      console.error('Search failed:', error)
    } finally {
      setIsLoading(false)
    }
  }
  */
  return (
    <>{/*
      <SearchBar
        ref={searchRef}
        onSubmit={handleSearch}
        isLoading={isLoading}
      />
      <DateIcon
        ref={dateRef}
        onSubmit={handleSearch}
       />*/}
      <MapModule
        map_type='page'
        markers={markers}
        activeMarkerEvent={activeMarkerEvent}
        onMarkerClick={(payload: MarkerProps) => {
           selectedRef.current = payload 
        }}
        onMarkerActiveChange={setActiveMarkerEvent}
      />
      <div className='evtview-plusbar' data-event-open={activeMarkerEvent ? true : false}>
        <div className='plus-bar-container'>
          <PlusBar signedIn={true} />
        </div>
      </div>
      {(activeMarkerEvent && selectedRef.current) ? (
        <EventView
          event={selectedRef.current}
          onClose={() => setActiveMarkerEvent(null)}
        />
      ) : null}
    </>
  )
}