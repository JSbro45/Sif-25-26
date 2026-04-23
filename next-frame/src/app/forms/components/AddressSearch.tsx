'use client'

import MapModule from "../../map/components/map/MapModule"
import { AddressProps } from "@/src/lib/map-types"
import { useState } from "react"


interface AddressSearchSectionProps {
  search: (formData: FormData) => Promise<AddressProps[]>
  select: (address: AddressProps) => void
  selectedAddress: AddressProps | null
}

export default function AddressSearchSection({ search, select: onAddressSelect, selectedAddress}: AddressSearchSectionProps) {
  const [addressList, setAddressList] = useState<AddressProps[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (formData: FormData) => {
    setIsSearching(true)
    try {
      const results = await search(formData)
      setAddressList(results)
      console.log('Address search results:', results)
    } catch (error) {
      console.error('Address search failed:', error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <>
      <section>
        <h2>Vyhledat místo konání</h2>
        <form action={handleSearch}>
          <input type="text" name="query" placeholder="Zadejte adresu..." disabled={isSearching} />
          <button type="submit" disabled={isSearching}>
            {isSearching ? "Hledání..." : "Hledat"}
          </button>
        </form>
      </section>

      <section>
        <MapModule
          map_type='embed'
          pins={addressList}
          activeMarker={selectedAddress}
          onMarkerClick={onAddressSelect}
        />
      </section>
    </>
  )
}
