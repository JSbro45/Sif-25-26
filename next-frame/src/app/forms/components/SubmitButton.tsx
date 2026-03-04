'use server'

import { setEventPin } from "@/src/lib/data-fetch"

export async function SubmitButton(){
    const createPin = async (string: string) => {
        await setEventPin({
            eventName: string,
            hostId: 1, // TODO: get hostId from session
            date_time: new Date(),
            genre_list: ['rock','jazz'], // TODO: get genre list from form
            location: [50, 15] // TODO: get location from form
        })
    }
    return  <button type="submit" onClick={ev => createPin('eventPin')}> Přidat </button>
}

