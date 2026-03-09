'use server'

import { FormInputObject } from "@/src/app/forms/components/FormInput";

import { setEventPin } from "@/src/lib/data-fetch"

export async function SubmitButton({refObject, execute} : {
    refObject: React.RefObject<HTMLFormElement | null>,
    execute: () => Promise<void>
    }) {   
    return refObject.current ? <button type="submit" onClick={() => execute()}> Přidat </button> : <button type="submit" disabled> chybi data </button>;
}

