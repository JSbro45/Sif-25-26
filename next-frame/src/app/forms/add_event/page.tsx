
import { FormInputBox } from "../components/FormInput"
import MapModule from "../../map/components/MapModule"
import { MarkerProps, template, EventTemplate } from "@/src/lib/map-ents";
import { ValueOf } from "next/dist/shared/lib/constants";
import { useRef } from "react";
import { SubmitButton } from "../components/SubmitButton";



export default function AddEventForm() {
    
    const propsToRefObject = () => {
        const obj = template as { [K in keyof EventTemplate ]: React.RefObject<HTMLInputElement|null> | ValueOf<MarkerProps> };
        for (const key of Object.keys(template) as (keyof EventTemplate)[]) {
            obj[key] = useRef<HTMLInputElement>(null);
        }
        return obj as { [K in keyof MarkerProps]: React.RefObject<HTMLInputElement| null> };
    }
    const refs = propsToRefObject()
    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <form>

                    <FormInputBox label="Název akce:" type="text" id="evt-name" required={true} value={refs.event} />
                    {/*<FormInputBox label="Foto:" type="file" id="evt-photo" required={true} value={refs.photo.current?.value} />
                    <FormInputBox label="Popis akce:" type="text" id="evt-desc" required={true} value={refs.desc.current?.value} />
                    <FormInputBox label="Odkaz na stránky/youtube/atd. interpreta:" type="text" id="evt-link" required={true} value={refs.link.current?.value} />*/}
                    {/*<FormInputBox label="Žánr:" type="text" id="evt-genre" required={true} /*value={refs.genre.current?.value} />
                    <FormInputBox label="Datum a čas:" type="datetime-local" id="evt-datetime" required={true} value={refs.date.current?.value} />
                    {/*<FormInputBox label="Adresa místa konání:" label="Adresa místa konání:" type="text" id="evt-address" required={true} value={refs.address.current?.value} />*/}
                    {/*<FormInputBox label="Web místa konání:" type="text" id="evt-website" required={false} value={refs.web.current?.value} />*/}
                    {/*<FormInputBox label="Vstupné:" type="text" id="evt-ticket-price" required={true} value={refs.ticketPrice.current?.value} />*/}
                    {/*<FormInputBox label="Web pro koupi vstupenek:" type="text" id="evt-ticket-website" required={false} value={refs.ticketWebsite.current?.value} />*/}
                    <div>
                        <SubmitButton />
                    </div>
                </form>
            </section>
            <section>
                {/*<MapModule map_type='embed' onMarkerClick={(payload: MarkerProps)=>router.push('/map')}/>*/}
            </section>
        </div>
    )
}