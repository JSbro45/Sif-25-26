'use client';

import { Icon } from "leaflet";
import { Marker } from "react-leaflet";
import type { LatLngExpression, LatLngTuple } from 'leaflet'
import { useEffect, useRef, useState } from "react";
import 'leaflet/dist/leaflet.css'
import '../../styles/map.css'
import { MarkerProps } from "@/src/lib/map-types";

export default function MarkerWindow({ evtInfo, clicker, isActiveMarker, onActiveChange }: { evtInfo: MarkerProps, clicker?: () => void, isActiveMarker?: boolean, onActiveChange?: (active: boolean) => void }) {
    const markerRef = useRef<any>(null);

    const icons = {
        default: new Icon({ iconUrl: '/map-icon.svg', iconSize: [60, 60] }),
        active: new Icon({ iconUrl: '/map-icon-active.png', iconSize: [80, 85] })
    };

    // Switchování mezi jednotlivými markery 
    useEffect(() => {
        if (markerRef.current) {
            markerRef.current.setIcon(isActiveMarker ? icons.active : icons.default);
        }
    }, [isActiveMarker]);

    // Map tracking pro zavření markeru kliknutím mimo něj
    useEffect(() => {
        const map = markerRef.current?._map;
        if (!map) return;

        const handleMapClick = (e: any) => {
            if (!markerRef.current?._container?.contains(e.originalEvent.target)) {
                onActiveChange?.(false);
            }
        };

        map.on('click', handleMapClick);
        return () => map.off('click', handleMapClick);
    }, [onActiveChange]);

    return (
        <Marker 
            ref={markerRef}
            position={evtInfo.coordinates} 
            icon={isActiveMarker ? icons.active : icons.default}
            eventHandlers={{ click: (e) => {
                e.originalEvent.stopPropagation();
                onActiveChange?.(!isActiveMarker);
                clicker?.();
            }}}
        />
    )
}
