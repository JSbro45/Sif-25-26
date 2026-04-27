'use client'

import { EventProps } from "@/src/lib/map-types"
import { useEffect, useState } from "react"


export default function EventCard({evt}:{evt: EventProps}){
    const [hover, setHover] = useState(false)
    

    return(
        <div className="event-card" onMouseEnter={ () => setHover(true) } onMouseLeave={ () => setHover(false) }>
            <img src={evt.photos[0]} alt={evt.name} />
            <h2>{evt.name}</h2>
            <p>{evt.description}</p>
            <p>{evt.date_time.toLocaleDateString()}</p>
            <a href="/map"> zobrazit na mape </a>
        </div>
    )
}