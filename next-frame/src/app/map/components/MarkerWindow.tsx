'use client';

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from 'leaflet'
import { useState, useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'

export default function MarkerWindow({ pos, evt, time, dbClick }: { pos: LatLngExpression, evt: any, time: Date, dbClick?: () => void }) {
    const [isActive, setIsActive] = useState(false);
    const markerRef = useRef<any>(null);

    const defaultIcon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [60, 60],
    });

    const activeIcon = new Icon({
        iconUrl: '/map-icon-active.png',
        iconSize: [80, 85],
    });

    const handleMarkerClick = (e: any) => {
        e.originalEvent.stopPropagation();
        setIsActive(!isActive);
        dbClick && dbClick();
    };

    useEffect(() => {
        const handleMapClick = (e: any) => {
            // Only deactivate if clicking outside this marker
            if (markerRef.current && !markerRef.current._container?.contains(e.originalEvent.target)) {
                setIsActive(false);
            }
        };

        if (markerRef.current) {
            const map = markerRef.current._map;
            if (map) {
                map.on('click', handleMapClick);
                return () => {
                    map.off('click', handleMapClick);
                };
            }
        }
    }, []);

    return (
        <Marker 
            ref={markerRef}
            position={pos} 
            icon={isActive ? activeIcon : defaultIcon} 
            eventHandlers={{ click: handleMarkerClick }}
        >
        </Marker>
    )
}
