'use client'

import { FormComponent, FormInputObject } from "../components/FormInput"
import MapModule from "../../map/components/MapModule"
import { MarkerProps} from "@/src/lib/map-types";
import { ValueOf } from "next/dist/shared/lib/constants";
import { setEventPin } from "@/src/lib/data-fetch";
import { SubmitButton } from "../components/SubmitButton";
import { useRef } from "react";



export default function AddEventForm() {
    const mapper = [
        new FormInputObject("Název akce:", "text", "evt-name", true),
        // new FormInputObject("Foto:", "file", "evt-photo", true),
        new FormInputObject("Popis akce:", "text", "evt-desc", true),
        new FormInputObject("Uživatel:", "number", "userId", true),
        // new FormInputObject("Odkaz na stránky/youtube/atd. interpreta:", "text", "evt-link", true),
        // new FormInputObject("Žánr:", "text", "evt-genre", true),
        // new FormInputObject("Datum a čas:", "datetime-local", "evt-datetime", true),
        // new FormInputObject("Adresa místa konání:", "text", "evt-address", true),
        // new FormInputObject("Web místa konání:", "text", "evt-website", false),
        // new FormInputObject("Vstupné:", "text", "evt-ticket-price", true),
        // new FormInputObject("Web pro koupi vstupenek:", "text", "evt-ticket-website", false)
    ]
    const formRef = useRef<HTMLFormElement | null>(null)
    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <FormComponent formMapper={mapper} refObject={formRef} execute={(obj) => {
                    console.log(obj);
                }}/>
            </section>
            <section>
                {/*<MapModule map_type='embed' onMarkerClick={(payload: MarkerProps)=>router.push('/map')}/>*/}
            </section>
        </div>
    )
}