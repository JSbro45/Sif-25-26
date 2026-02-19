
import Header from '../home/components/Header'
import MapAndSelectors from './components/MapSelectors';
import { getPins } from '../../lib/data-fetch';
import '../styles/map.css'


export default function MapPage() {
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