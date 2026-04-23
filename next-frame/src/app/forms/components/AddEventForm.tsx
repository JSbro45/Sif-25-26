'use client'

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Show, useUser } from "@clerk/nextjs"
import { AddressProps } from "@/src/lib/map-types"
import EventForm from "./EventForm"
import AddressSearch from "./AddressSearch"

interface AddEventFormProps {
  geoFunction: (formData: FormData) => Promise<AddressProps[]>
  submitFunction: (formData: FormData, selectedAddress: AddressProps | null, clerkId : string) => Promise<void>
}

export default function AddEventForm({ geoFunction, submitFunction }: AddEventFormProps) {
  const router = useRouter()
  const { user, isSignedIn, isLoaded } = useUser()
  const [selectedAddress, setSelectedAddress] = useState<AddressProps | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/forms/auth/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded || !isSignedIn) return null

  const handleAddressSelect = (address: AddressProps) => {
    console.log('Selected address:', address)
    setSelectedAddress(address)

    const addressString = (address.municipality ? address.municipality : "")
        + (address.street ? (", " + address.street) : "")
        + (address.houseNumber ? (", " + address.houseNumber) : "")

    if (inputRef.current && addressString) {
        inputRef.current.value = addressString
    }
  }

  const handleEventSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
        console.log(user)
        if(user) {
          console.log(user.id)
          await submitFunction(formData, selectedAddress, user.id)
        }
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
      <main >
        <EventForm isSubmitting={isSubmitting} onSubmit={handleEventSubmit} addressRef={inputRef} />
        <AddressSearch search={geoFunction} select={handleAddressSelect} selectedAddress={selectedAddress} />
      </main>
    </Show>
  )
}