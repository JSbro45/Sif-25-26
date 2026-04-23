'use server'

import Header from '../home/components/Header'
import MapAndView from './components/MapAndView';
import FilterBar from './components/Filters';
import { getPins } from '../../lib/data-fetch';
import safeFetch from '../../lib/safe-fetch'
import { AddressProps, EventProps, FilterProps } from '../../lib/map-types';
import '../styles/map.css'


export default async function Page({ searchParams }: { searchParams: { genre?: string, start?: string, end?: string }}) {
  const markers = {
    dateRange: {
      start: searchParams.start ? new Date(searchParams.start) : new Date(),
      end: searchParams.end ? new Date(searchParams.end) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    },
    genre: searchParams.genre,
    radius: undefined
  } as FilterProps

  const [addresses, events] = await safeFetch<[AddressProps[], EventProps[]]>( () => getPins(markers), [[], []] )

  return (
    <>
      <div className='header-map'>
        <div className='header-container'>
          <Header/>
        </div>
          <MapAndView addresses={addresses} events={events} >
            <FilterBar/>
          </MapAndView>
      </div>
    </>
  )
}

