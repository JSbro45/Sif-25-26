'use client';

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'

export default function MarkerWindow({ pos, evt, time, onClick }: { pos: LatLngExpression, evt: any, time?: string, onClick?: () => void }) {
    const icon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [80, 80],
    });

    return (
        <Marker position={pos} icon={icon} eventHandlers={{ click: () => onClick && onClick() }}>
            <Popup>
                <ul className="event-thumbnail">
                    <li>
                        <span className="event"> <b className="n"> event: </b> { evt } </span>
                    </li>
                    <li>
                        <span className="time"> <b className="n"> time: </b>
                            <time dateTime={time.toISOString()}> { time.toLocaleString() } </time>
                        </span>
                    </li>
                </ul>
            </Popup>
        </Marker>
    )
}
