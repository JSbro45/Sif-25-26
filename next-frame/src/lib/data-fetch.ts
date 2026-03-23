import { LatLngTuple } from 'leaflet';
import { prisma } from './dbclient';
import {  } from './map-types';  
import { MarkerProps } from './map-types';
import { Event, HostUserProfile } from './generated/prisma/client';
import { EmailAddress } from '@clerk/nextjs/server';


export async function getPins(timespan: { start: Date; end: Date } , genre_list: string[]) {
    const events = await prisma.event.findMany({
        where: {
            AND: [
                {
                    date_time: {
                        gte: timespan?.start,
                        lte: timespan?.end
                    }
                },
                genre_list.length?({
                    genres: {
                        hasSome: genre_list
                    }
                }): {}
            ]
        }
    }) as Event[];

    const pins = events as unknown as MarkerProps[];
    pins.map((pin, k) => {
        pin.coordinates = [events[k].latitude, events[k].longitude] as LatLngTuple;
    });
    
    return pins;
} 


export async function getAllPins() {
    const events = await prisma.event.findMany() as Event[];
    const pins = events as unknown as MarkerProps[];
    pins.map((pin, k) => {
        pin.coordinates = [events[k].latitude, events[k].longitude] as LatLngTuple;
    });

    return pins;
}

export async function newHostUser(firstName:string, lastName:string, orgName: string, webSite: string, email:string, password: string, clerkId:string) {
    const user = await prisma.hostUserProfile.create(
        {
            data:{
                firstName: firstName,
                lastName: lastName,
                orgName : orgName,
                webSite: webSite,
                email: email,
                password: password,
                clerkId: clerkId
            }
        }
    )
    
}


export async function setEventPin(evt_data: {eventName: string, hostId: number, date_time: Date, genre_list: string[], location: LatLngTuple, addressId: number}) {
    const event = await prisma.event.create({
        data: {
            name:        evt_data.eventName,
            hostUserId:  evt_data.hostId,
            date_time:   evt_data.date_time,
            genres:      evt_data.genre_list, 
            latitude:    evt_data.location[0],
            longitude:   evt_data.location[1],
            addressId:   evt_data.addressId
        }
    })
}


