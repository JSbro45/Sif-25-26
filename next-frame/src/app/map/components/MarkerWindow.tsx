'use client';

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from 'leaflet'
import { useState } from "react";
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'

export default function MarkerWindow({ pos, evt, time, dbClick }: { pos: LatLngExpression, evt: any, time: Date, dbClick?: () => void }) {
    const [isActive, setIsActive] = useState(false);

    const defaultIcon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [60, 60],
    });

    const activeIcon = new Icon({
        iconUrl: '/map-icon-active.png',
        iconSize: [80, 85],
    });

    const handleMarkerClick = () => {
        setIsActive(!isActive);
        dbClick && dbClick();
    };

    return (
        <Marker position={pos} icon={isActive ? activeIcon : defaultIcon} eventHandlers={{ click: handleMarkerClick }}>
        </Marker>
    )
}
