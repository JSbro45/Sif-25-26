'use client'

import { FormComponent, FormInputObject } from "./FormInput"
import { AddressProps } from "@/src/lib/map-types"
import { useRef } from "react"

interface EventFormSectionProps {
  isSubmitting: boolean
  onSubmit: (formData: FormData) => Promise<void>
  addressRef: React.RefObject<HTMLInputElement | null>
}

export default function EventFormSection({ isSubmitting, onSubmit, addressRef }: EventFormSectionProps) {
    const mapper = [
        new FormInputObject("Název akce:", "text", "evt-name", true),
        new FormInputObject("Popis akce:", "text", "evt-desc", true),
        new FormInputObject("Žánr:", "text", "evt-genre", true),
        new FormInputObject("Datum a čas:", "datetime-local", "evt-datetime", true),
        new FormInputObject("Adresa místa konání:", "text", "evt-address", true, addressRef),
        // new FormInputObject("Foto:", "file", "evt-photo", true),
        // new FromInputObject("","button","default-adress",false),
        // new FormInputObject("Web místa konání:", "text", "evt-website", false),
        // new FormInputObject("Vstupné:", "text", "evt-ticket-price", true),
        // new FormInputObject("Web pro koupi vstupenek:", "text", "evt-ticket-website", false)
    ]

  return (
    <section className="add-evt-container">
      <h1>Přidat Akci</h1>
      <FormComponent
        formMapper={mapper}
        submitCaption={isSubmitting ? "Přidávání..." : "Přidat"}
        execute={onSubmit}
      />
    </section>
  )
}