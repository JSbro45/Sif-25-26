'use client'

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Show } from "@clerk/nextjs"
import { AddressProps } from "@/src/lib/map-types"
import EventForm from "./EventForm"
import AddressSearch from "./AddressSearch"

interface AddEventFormProps {
  geoFunction: (formData: FormData) => Promise<AddressProps[]>
  submitFunction: (formData: FormData, selectedAddress: AddressProps | null) => Promise<Event | null>
}

export default function AddEventForm({ geoFunction, submitFunction }: AddEventFormProps) {
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState<AddressProps | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleAddressSelect = (address: AddressProps) => {
    console.log('Selected address:', address)
    setSelectedAddress(address)

    const addressString = (address.municipality ? address.municipality : "")
        + (address.street ? (", " + address.street) : "")
        + (address.houseNumber ? (", " + address.houseNumber) : "")
        + (address.postalCode ? (", " + address.postalCode) : "")

    if (inputRef.current && addressString) {
        inputRef.current.value = addressString
    }
  }

  const handleEventSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
        await submitFunction(formData, selectedAddress)
        /*
        if (result.success) router.push('/map')
        */
    } catch (error) {
        console.error('Event submission failed:', error)
    } finally {
        setIsSubmitting(false)
    }
  }

  return (
    <Show when={'signed-in'}>
      <EventForm isSubmitting={isSubmitting} onSubmit={handleEventSubmit} addressRef={inputRef} />
      <AddressSearch search={geoFunction} select={handleAddressSelect} selectedAddress={selectedAddress} />
    </Show>
  )
}