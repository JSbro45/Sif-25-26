'use client'

import MapModule from "./map/MapModule";
import SearchBar from "../../home/components/SearchBar";
import DateIcon from "./DateIcon";
import PlusBar from "./PlusBar";
import EventView from "./EventView";
import { useRef, useState } from "react";
import { MarkerProps, AddressProps, EventProps } from "../../../lib/map-types";



export default function MapAndSelectors({ initialMarkers}: { initialMarkers: [ AddressProps[],EventProps[]] }) {
  const [markers, setMarkers] = useState<MarkerProps>(new MarkerProps( initialMarkers[0], initialMarkers[1] ))
  const [activeEvent, setActiveEvent] = useState<AddressProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const selectedRef = useRef<EventProps[]>([])
  const searchRef = useRef<string>('')
  const dateRef = useRef<string>('')

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
        pins={markers.address}
        activeMarker={activeEvent}
        onMarkerClick={(selected) => {
           selectedRef.current = markers.searchByAddress(selected); 
        }}
        onMarkerActiveChange={setActiveEvent}
      />
      <div className='evtview-plusbar' data-event-open={activeEvent ? true : false}>
        <div className='plus-bar-container'>
          <PlusBar signedIn={true} />
        </div>
      </div>
      {(activeEvent && selectedRef.current) ? (
        <EventView
          events={selectedRef.current}
          onClose={() => setActiveEvent(null)}
        />
      ) : null}
    </>
  )
}