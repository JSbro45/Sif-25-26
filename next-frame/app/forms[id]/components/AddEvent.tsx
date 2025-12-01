import { FormInputBox } from "../../auth/components/FormInput"
import MapModule from "../../map/components/MapModule"


export default function AddEventForm() {
    return (
        <div>
            <section className="add-evt-container">
                <h1>Přidat Akci</h1>
                <form>
                    <FormInputBox label="Název akce:" type="text" id="evt-name" required={true} />
                    <FormInputBox label="Popis akce:" type="text" id="evt-desc" required={true} />
                    <FormInputBox label="Místo konání:" type="text" id="evt-loc" required={true} />
                    <FormInputBox label="Datum a čas:" type="date" id="evt-datetime" required={true} />
                    <button type="submit"> Přidat </button>
                </form>
            </section>
            <section>
                <MapModule map_type='embed' />
            </section>
        </div>
    )
}