'use client';

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from 'leaflet'
import { useState, useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'

export default function MarkerWindow({ pos, evt, time, clicked: clicked }: { pos: LatLngExpression, evt: any, time: Date, clicked?: () => void }) {
    const [isActive, setIsActive] = useState(false);

    const defaultIcon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [60, 60],
    });

    const activeIcon = new Icon({
        iconUrl: '/map-icon-active.png',
        iconSize: [80, 85],
    });



    return (
        <Marker 
            position={pos} 
            icon={isActive ? activeIcon : defaultIcon} 
        >
        </Marker>
    )
}
