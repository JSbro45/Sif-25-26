import { useRef } from "react";
import { FormInputBox } from "../auth/components/FormInput"
import MapModule from "../map/components/MapModule"
import { setEventPin } from "@/src/lib/data-fetch";

const createPin = (refSet: { [key: string]: React.RefObject<HTMLInputElement>| null }) => {
    const newPin = {
        name: refSet.name.current?.value,
        photo: refSet.photo.current?.files?.[0],
        desc: refSet.desc.current?.value,
        link: refSet.link.current?.value,
        genre: refSet.genre.current?.value,
        date: refSet.date.current?.value,
        web: refSet.web.current?.value,
        address: refSet.address.current?.value,
    };
    console.log(newPin);
    return setEventPin(newPin);
}

export default function AddEventForm() {

    const refs = {
        'name' : useRef<HTMLInputElement>(null),
        'photo' : useRef<HTMLInputElement>(null),
        'desc' : useRef<HTMLInputElement>(null),
        'link' : useRef<HTMLInputElement>(null),
        'genre' : useRef<HTMLInputElement>(null),
        'date' : useRef<HTMLInputElement>(null),
        'web' : useRef<HTMLInputElement>(null),
        'address' : useRef<HTMLInputElement>(null),
    }

    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <form>
                    <FormInputBox label="Název akce:" type="text" id="evt-name" required={true} value={refs.name.current?.value} />
                    <FormInputBox label="Foto:" type="file" id="evt-photo" required={true} value={refs.photo.current?.value} />
                    <FormInputBox label="Popis akce:" type="text" id="evt-desc" required={true} value={refs.desc.current?.value} />
                    <FormInputBox label="Odkaz na stránky/youtube/atd. interpreta:" type="text" id="evt-link" required={true} value={refs.link.current?.value} />
                    <FormInputBox label="Žánr:" type="text" id="evt-genre" required={true} value={refs.genre.current?.value} />
                    <FormInputBox label="Datum a čas:" type="datetime-local" id="evt-datetime" required={true} value={refs.date.current?.value} />
                    <FormInputBox label="Adresa místa konání:" type="text" id="evt-address" required={true} value={refs.address.current?.value} />
                    <FormInputBox label="Web místa konání:" type="text" id="evt-website" required={false} value={refs.web.current?.value} />
                    <FormInputBox label="Vstupné:" type="text" id="evt-ticket-price" required={true} value={(useRef<HTMLInputElement>(null)).current?.value} />
                    <FormInputBox label="Web pro koupi vstupenek:" type="text" id="evt-ticket-website" required={false} value={(useRef<HTMLInputElement>(null)).current?.value} />
                    <button type="submit" onClick={createPin(refs)}> Přidat </button>
                </form>
            </section>
            <section>
                <MapModule map_type='embed' />
            </section>
        </div>
    )
}