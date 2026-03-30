import { LatLngTuple } from 'leaflet';
import { prisma } from './dbclient';
import { MarkerProps } from './map-types';
import { ProfileProps } from './user-types';
import { Event, HostUserProfile } from './generated/prisma/client';
import { User } from '@clerk/nextjs/server';


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


export async function newHostUser(props: ProfileProps, clerkId: string) {
    const user = await prisma.hostUserProfile.create(
        {
            data:{
                clerkId: clerkId,
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
                password: props.password,
                orgName: '',
                webSite: '',

            }
        }
    )
}


export async function findUserByClerkId(clerkId: string | undefined) {
    let user = await prisma.hostUserProfile.findFirst({
        where: {
            clerkId: clerkId
        }
    }) as HostUserProfile | null;
    if(!user) console.error('requested user not found', clerkId)
    return user;
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


