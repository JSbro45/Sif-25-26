import { FormInputBox } from "./FormInput"
import Map from "../map/Map"


export function AddEventForm({label, type, id, required}: {label: string, type: string, id: string, required: boolean}) {
    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <form>
                    <FormInputBox label="Název akce:" type="text" id="evt-name" required={true} />
                    <FormInputBox label="Popis akce:" type="text" id="evt-desc" required={true} />
                    <FormInputBox label="Místo konání:" type="text" id="evt-loc" required={true} />
                    <FormInputBox label="Datum a čas:" type="datetime-local" id="evt-datetime" required={true} />
                    <button type="submit">Přidat</button>
                </form>
            </section>
            <section>
                <Map />
            </section>
        </div>
    )
}