import { LatLngTuple } from 'leaflet';
import { prisma } from './db';



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
    
    return pins;
}

export async function setEventPin(eventName: string, hostId: number, date_time: Date, genre_list: string[], location: LatLngTuple) {

    const event = await prisma.event.create({
        data: {
            name:        eventName,
            //hostUserId:  hostId,
            date_time:   date_time,
            genres:      genre_list, // Removed because 'genres' is not a valid property
            latitude:    location[0],
            longitude:   location[1]
        }
    })
}


