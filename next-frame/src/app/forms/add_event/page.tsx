'use client'

import { FormComponent, FormInputObject } from "../components/FormInput"
import MapModule from "../../map/components/map/MapModule"
import { MarkerProps} from "@/src/lib/map-types";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useRef } from "react";
import { geoCode } from "@/src/lib/geocode";
import { Show } from "@clerk/nextjs";


export default function AddEventForm() {
    const mapper = [
        new FormInputObject("Název akce:", "text", "evt-name", true),
        // new FormInputObject("Foto:", "file", "evt-photo", true),
        new FormInputObject("Popis akce:", "text", "evt-desc", true),
        new FormInputObject("Uživatel:", "text", "user", true),
        // new FormInputObject("Odkaz na stránky/youtube/atd. interpreta:", "text", "evt-link", true),
        new FormInputObject("Žánr:", "text", "evt-genre", true),
        new FormInputObject("Datum a čas:", "datetime-local", "evt-datetime", true),
        new FormInputObject("Adresa místa konání:", "text", "evt-address", true),
        // new FromInputObject("","button","default-adress",false),
        // new FormInputObject("Web místa konání:", "text", "evt-website", false),
        // new FormInputObject("Vstupné:", "text", "evt-ticket-price", true),
        // new FormInputObject("Web pro koupi vstupenek:", "text", "evt-ticket-website", false)
    ]
    const mapSearch = [
        new FormInputObject("Název místa konání:", "text", "map-name", true),
    ]
    const formRef = useRef<HTMLFormElement | null>(null)

    return (
        <Show when={'signed-in'}>
            <div>
                <section className="add-evt-container">
                    <h1>Přidat Akci</h1>
                    <FormComponent formMapper={mapper} refObject={formRef} execute={(obj) => {
                        console.log(obj);
                    }}/>
                </section>
                <section>
                    <h2>Vyhledat místo konání</h2>
                {/*
                    <FormComponent formMapper={mapSearch} refObject={formRef} execute={(obj) => {if (mapSearch[0].type==='text')geoCode(obj[0].)}}/>
                    <MapModule map_type='embed' />
                */}
                </section>
            </div>
        </Show>
    )
}

