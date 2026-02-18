import { LatLngTuple } from 'leaflet';
import { prisma } from './dbclient';
import {  } from './map-types';  
import { MarkerProps } from './map-types';
import { Event, User } from './generated/prisma/client';


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
    for (let p = 0; p < pins.length; p++) {
        pins[p].coordinates = [events[p].latitude, events[p].longitude] as LatLngTuple;
    }
    
    
    return pins;
} 




export async function setEventPin(evt_data: {eventName: string, hostId: number, date_time: Date, genre_list: string[], location: LatLngTuple}) {
    const event = await prisma.event.create({
        data: {
            name:        evt_data.eventName,
            hostUserId:  evt_data.hostId,
            date_time:   evt_data.date_time,
            genres:      evt_data.genre_list, 
            latitude:    evt_data.location[0],
            longitude:   evt_data.location[1]
        }
    })
}


