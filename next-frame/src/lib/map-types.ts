import { LatLngTuple } from 'leaflet';
import { ValueOf } from 'next/dist/shared/lib/constants';
import{ keys } from 'ts-transformer-keys';
import { Event, HostUserProfile } from './generated/prisma/client';
import { HTMLInputTypeAttribute} from 'react';



type AllowedInputTypes = 'text' | 'email' | 'password' | 'number' | 'date' | 'datetime-local' | 'checkbox' | 'radio' | 'url' | 'tel';

interface InputTypeMap {
    'text': string,
    'email': string,
    'password': string,
    'number': number,
    'date': Date,
    'datetime-local': Date,
    'checkbox': boolean,
    'radio': string,
    'url': string,
    'tel': string,
    'button': any,
    'submit': any,
    'reset': any,
    'file': FileList | null,
    'hidden': any,
    'image': File | null,
    'color': string,
    'range': number,
    'search': string,
    'month': string,
    'week': string,
    'time': string,
}


type Model = Event ;


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

