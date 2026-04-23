'use server'

import { FormComponent, FormInputObject } from "../components/FormInput"
import MapModule from "../../map/components/map/MapModule"
import { AddressProps, MarkerProps, GeoType} from "@/src/lib/map-types";
// import { useRef, useState } from "react";
import { geoCode } from "@/src/lib/geocode";
import { submitEvent } from "./actions";
// import { Show, useAuth } from "@clerk/nextjs";
import safeFetch from "@/src/lib/safe-fetch";

/*
export default function AddEventForm() {
    const router = useRouter()
    const [useAddress, setUseAddress] = useState<AddressProps | null>(null)
    const addressRef = useRef<HTMLInputElement | null>(null)
    const [addressList, setAddressList] = useState<AddressProps[]>([])

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
    const geo = (formData: FormData) => safeFetch(() => geoCode(formData), [])

    const markerClick = (selected: AddressProps) => {
        console.log('use adress:', selected)
        setUseAddress(selected)

        const addressString = (selected.municipality ? selected.municipality : "")
            + (selected.street ? (", " + selected.street) : "")
            + (selected.houseNumber ? (", " + selected.houseNumber) : "")
            + (selected.postalCode ? (", " + selected.postalCode) : "")

        if (addressRef.current && addressString) {
            console.log('address string:', addressString)
            addressRef.current.value = addressString
        }
    } 

    return (
        <Show when={'signed-in'}>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <FormComponent 
                    formMapper={mapper} 
                    submitCaption={"Přidat"} 
                    execute={(obj:FormData) => console.log(obj)}
                />
            </section>
            <section>
                <h2>Vyhledat místo konání</h2>
                <form action={async (formData) => {
                    setAddressList(await geo(formData))
                    console.log(addressList)
                }}>
                    <input type="text" name="query"/>
                    <button type="submit"> hledat </button>
                </form>
            </section>
            <section>
                <MapModule 
                    map_type='embed' 
                    pins={ addressList } 
                    onMarkerClick={ markerClick } 
                />
            </section>
        </Show>
    )
}
*/

import AddEventForm from "../components/AddEventForm"
import { newAddress, setEvent } from "@/src/lib/data-fetch";
import { redirect } from "next/navigation";


export default async function AddEventPage() {
    return (
        <AddEventForm 
            geoFunction={geoCode}
            submitFunction={submitEvent}
        />
    )
}
