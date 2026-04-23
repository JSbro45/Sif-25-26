'use server'

import { AddressProps } from "@/src/lib/map-types";
import { newAddress, setEvent, findUserByClerkId } from "@/src/lib/data-fetch";  
import { redirect } from "next/navigation";
import { Event, HostUserProfile, Address } from "@/src/lib/generated/prisma/client";


export async function submitEvent(formData: FormData, selectedAddress: AddressProps | null, clerkId: string) {
        const user =  findUserByClerkId(clerkId) as HostUserProfile['hostUser'] | null
        console.log(user)
        if (!selectedAddress || !user )  throw new Error("User not authenticated — cannot create event");
        const address = await newAddress(selectedAddress) as Address | null
        
        const eventData = {
            name: formData.get('evt-name') as string,
            description: formData.get('evt-desc') as string,
            date_time: formData.get('evt-datetime') as string,
            genres: formData.get('evt-genre')?.toString().split(', ') || [],
            photos: [],
            hostUserId: user.id, 
            addressId: address.id 
        }
        const event = await setEvent(eventData)
        console.log(event)
        if (event) redirect('/account')
        

}