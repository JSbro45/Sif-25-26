
import Header from '../home/components/Header'
import MapAndSelectors from './components/MapSelectors';
import { getAllPins } from '../../lib/data-fetch';
import safeFetch from '../../lib/safe-fetch'
import { MarkerProps } from '../../lib/map-types';
import '../styles/map.css'

export default async function Page() {
  const initialMarkers = await safeFetch<MarkerProps[]>(() => getAllPins(), [])
  
  return (
    <>
    <Header/>
      <main>
        <MapAndSelectors
          initialMarkers={initialMarkers}
          /*
          onSearch={(params) => getPins(params)}
          */
        />
      </main>
    </>
  )
}

