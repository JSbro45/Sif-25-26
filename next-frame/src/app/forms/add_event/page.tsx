'use client'

import { FormComponent, FormInputObject } from "../components/FormInput"
import MapModule from "../../map/components/map/MapModule"
import { AddressProps, MarkerProps, GeoType} from "@/src/lib/map-types";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useRef, useState } from "react";
import { geoCode } from "@/src/lib/geocode";
import { Show } from "@clerk/nextjs";
import safeFetch from "@/src/lib/safe-fetch";


export default function AddEventForm() {
    const [useAddress, setUseAddress] = useState<AddressProps | null>(null)
    const addressRef = useRef<HTMLInputElement | null>(null)
    const selectedRef = useRef<AddressProps | null>(null)
    const [addressList, setAddressList] = useState<AddressProps[]>([])
    const mapper = [
        new FormInputObject("Název akce:", "text", "evt-name", true),
        // new FormInputObject("Foto:", "file", "evt-photo", true),
        new FormInputObject("Popis akce:", "text", "evt-desc", true),
        // new FormInputObject("Odkaz na stránky/youtube/atd. interpreta:", "text", "evt-link", true),
        new FormInputObject("Žánr:", "text", "evt-genre", true),
        new FormInputObject("Datum a čas:", "datetime-local", "evt-datetime", true),
        new FormInputObject("Adresa místa konání:", "text", "evt-address", true, undefined, addressRef),
        // new FromInputObject("","button","default-adress",false),
        // new FormInputObject("Web místa konání:", "text", "evt-website", false),
        // new FormInputObject("Vstupné:", "text", "evt-ticket-price", true),
        // new FormInputObject("Web pro koupi vstupenek:", "text", "evt-ticket-website", false)
    ]

    const geo = (formData: FormData) => safeFetch(() => geoCode(formData), [])

    return (
            <div>
                <section className="add-evt-container">
                    <h1>Přidat Akci</h1>
                    <FormComponent formMapper={mapper} submitCaption={"Přidat"} execute={(obj:FormData) => {
                        console.log(obj);
                    }}/>
                </section>
                <section>
                    <h2>Vyhledat místo konání</h2>
                    <form action={async (formData) => {setAddressList(await geo(formData)); console.log(addressList)} }>
                        <input type="text" name="query"/>
                        <button type="submit"> hledat </button>
                    </form>
                    {/*<MapModule map_type='embed' />*/}
            
                </section>
                <section>
                    <MapModule map_type='embed' markers={addressList} onMarkerClick={
                        (selected) => {
                            selectedRef.current = selected
                            setUseAddress(selected)
                            console.log('use adress:',useAddress)
                            const addressString = ((selected.municipality+ ", "||"")  
                                + (selected.street + " " || "") 
                                + (selected.houseNumber + ", ") 
                                + (selected.postalCode || "")  
                            ) || ""
                            if (addressRef.current) {
                                addressRef.current.value = addressString
                            }
                        }
                    } />
                </section>
            </div>
    )
}

