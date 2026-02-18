'use client';
import { useRef, useState } from 'react';
import Header from '../home/components/Header'
import MapAndSelectors from './components/MapSelectors';
import { MarkerProps } from '../../lib/map-types';
import { getPins } from '../../lib/data-fetch';
import '../styles/map.css'


export default function MapPage() {
  const selectedRef = useRef<MarkerProps | null>(null)
  const dateRef = useRef<string | null>(null)
  const searchRef = useRef<string | null>(null)
  const [activeMarkerEvent, setActiveMarkerEvent] = useState<string | null>(null)
  const [pinFilter, setPinFilter] = useState<{date?: string, search?: string}>({})
  const initialPins =  getPins({start: new Date("2025-01-01"), end: new Date(Date.now())}, [])
  
  return (
    <>
      <Header/>
      <main>
        <MapAndSelectors
          initialMarkers={initialPins}
        />
      </main>
    </>
  )
}