import { setEventPin } from "@/src/lib/data-fetch";
import { SubmitButton } from "./components/SubmitButton";

export default function AddEventFormBeta() {
    return (
        <div>
            <h1>Přidat Akci (Beta)</h1>
            <form>
                <SubmitButton/>
            </form>
        </div>
    );
}
