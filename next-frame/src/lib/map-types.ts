import { LatLngTuple } from 'leaflet';
import { ValueOf } from 'next/dist/shared/lib/constants';
import{ keys } from 'ts-transformer-keys';
import { Event, User } from './generated/prisma/client';

type Model = Event | User;

type toInterface<T> = {
  [K in keyof T]: T[K]
}


type ToFunc<T> = {
    [K in keyof T]: () => T[K]
}


export type MarkerProps = Pick<Event,  'name' | 'description' | 'date_time' | 'genres' | 'photos' | 'hostUserId'> & { coordinates: LatLngTuple } 



export type MarkerIdentifiers<Keys extends Array<keyof MarkerProps>> = {

}


export  const mapTiles = {
        'basic': [
            'https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}', 
            '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
            ' 49^{circ }44^{prime }37.526"N), (15^{circ }20^{prime }19.098"E'
        ]
    };

