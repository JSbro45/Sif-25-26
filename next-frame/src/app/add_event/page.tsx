import { FormInputBox } from "../auth/components/FormInput"
import MapModule from "../map/components/MapModule"


export default function AddEventForm() {
    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <form>
                    <FormInputBox label="Název akce:" type="text" id="evt-name" required={true} />
                    <FormInputBox label="Foto:" type="file" id="evt-photo" required={true} />
                    <FormInputBox label="Popis akce:" type="text" id="evt-desc" required={true} />
                    <FormInputBox label="Odkaz na stránky/youtube/atd. interpreta:" type="text" id="evt-link" required={true} />
                    <FormInputBox label="Žánr:" type="text" id="evt-genre" required={true} />
                    <FormInputBox label="Datum a čas:" type="datetime-local" id="evt-datetime" required={true} />
                    <FormInputBox label="Místo konání:" type="text" id="evt-loc" required={true} />
                    <FormInputBox label="Adresa místa konání:" type="text" id="evt-address" required={true} />
                    <FormInputBox label="Web místa konání:" type="text" id="evt-website" required={false} />
                    <FormInputBox label="Vstupné:" type="text" id="evt-ticket-price" required={true} />
                    <FormInputBox label="Web pro koupi vstupenek:" type="text" id="evt-ticket-website" required={false} />
                    <button type="submit"> Přidat </button>
                </form>
            </section>
            <section>
                <MapModule map_type='embed' />
            </section>
        </div>
    )
}