import MapModule from "./MapModule";
import SearchBar from "./SearchBar";
import DateIcon from "./DateIcon";
import PlusBar from "./PlusBar";
import EventView from "./EventView";
import { useRef, useState } from "react";
import { MarkerProps } from "../../../lib/map-ents";

export default function MapAndSelectors() {  
  const [activeMarkerEvent, setActiveMarkerEvent] = useState<string | null>(null)
  const selectedRef = useRef<MarkerProps | null>(null)
  return (
  <div>
      <MapModule
        map_type='page'
        markers={[]}
        activeMarkerEvent={activeMarkerEvent}
        onMarkerClick={(payload: MarkerProps) => {
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
        </div>)
}