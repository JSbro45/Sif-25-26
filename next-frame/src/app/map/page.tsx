'use server'

import Header from '../home/components/Header'
import MapAndSelectors from './components/MapSelectors';
import { getPins } from '../../lib/data-fetch';
import safeFetch from '../../lib/safe-fetch'
import { AddressProps, EventProps, MarkerProps } from '../../lib/map-types';
import DateIcon from './components/DateIcon';
import SearchBar from './components/SearchBar';
import '../styles/map.css'

export default async function Page() {
  const initialMarkers = await safeFetch<[AddressProps[], EventProps[]]>(() => getPins(), [[], []])
  
  return (
    <>
      <div className='header-map'>
        <div className='header-container'>
          <Header/>
        </div>
        <main>
          <MapAndSelectors
            initialMarkers={initialMarkers}
            /*
            onSearch={(params) => getPins(params)}
            */
          />
        </main>
      </div>
      <SearchBar />
      <DateIcon />
    </>
  )
}

