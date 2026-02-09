import { LatLngTuple } from 'leaflet';
import { prisma } from './dbclient';



export async function getPins(timespan: { start: Date; end: Date }, genre_list: string[] ) {
    const pins = await prisma.event.findMany({
        where: {
            AND: [
                {
                    date_time: {
                        gte: timespan.start,
                        lte: timespan.end
                    }
                },
                {
                    genres: {
                        hasSome: genre_list
                    }
                }
            ]
        }
    })
    pins.forEach(pin  => (pin.location = [pin.latitude, pin.longitude] as LatLngTuple));
    
    return pins;
}


interface EventPin {
    name: string;
    //hostUserId: number;
    date_time: Date;
    genreList: string[];
    coords: LatLngTuple;
}

class EventPinClass implements EventPin {
    constructor(
        public name: string,
        //public hostUserId: number,
        public date_time: Date,
        public genreList: string[],
        public coords: LatLngTuple
    ) {}
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


