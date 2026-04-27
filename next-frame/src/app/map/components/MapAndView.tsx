'use client'

import MapModule from "./map/MapModule"
import {PlusBar} from "./MinorComps"
import EventView from "./EventView"
import { useRef, useState } from "react"
import { Show } from "@clerk/nextjs"
import { MarkerProps, AddressProps, EventProps } from "../../../lib/map-types"

interface MapAndViewProps {
  addresses: AddressProps[]
  events: EventProps[]
  children?: React.ReactNode
}

export default function MapAndView({ addresses, events, children }: MapAndViewProps) {
  const [markers] = useState<MarkerProps>(new MarkerProps(addresses, events))
  const [activeEvent, setActiveEvent] = useState<AddressProps | null>(null)
  const selectedRef = useRef<EventProps[]>([])

  return (
    <>
      <MapModule
        map_type='page'
        pins={markers.address}
        activeMarker={activeEvent}
        onMarkerClick={(selected) => { 
          selectedRef.current = markers.searchByAddress(selected)         
        }}
        onMarkerActiveChange={setActiveEvent}
      />
      { children }
      <Show when={'signed-in'}>
        <div className='plus-bar-container'>
          <PlusBar />
        </div>
      </Show>

      {(activeEvent && selectedRef.current.length > 0) ? (
        <EventView 
        events={selectedRef.current} 
        onClose={() => setActiveEvent(null)} 
        />
      ) : null}
    </>
  )
}
