'use client';

import { Icon } from "leaflet";
import { Marker } from "react-leaflet";
import type { LatLngExpression } from 'leaflet'
import { useState, useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'

export default function MarkerWindow({ pos, evt, time, dbClick }: { pos: LatLngExpression, evt: any, time: Date, dbClick?: () => void }) {
    const [isActive, setIsActive] = useState(false);
    const markerRef = useRef<any>(null);

    const icons = {
        default: new Icon({ iconUrl: '/map-icon.svg', iconSize: [60, 60] }),
        active: new Icon({ iconUrl: '/map-icon-active.png', iconSize: [80, 85] })
    };

    useEffect(() => {
        const map = markerRef.current?._map;
        if (!map) return;

        const handleMapClick = (e: any) => {
            if (!markerRef.current?._container?.contains(e.originalEvent.target)) {
                setIsActive(false);
            }
        };

        map.on('click', handleMapClick);
        return () => map.off('click', handleMapClick);
    }, []);

    return (
        <Marker 
            ref={markerRef}
            position={pos} 
            icon={isActive ? icons.active : icons.default}
            eventHandlers={{ click: (e) => {
                e.originalEvent.stopPropagation();
                setIsActive(!isActive);
                dbClick?.();
            }}}
        />
    )
}
