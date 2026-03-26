import { LatLngTuple } from 'leaflet';
import { ValueOf } from 'next/dist/shared/lib/constants';
import{ keys } from 'ts-transformer-keys';
import { Event, Address } from './generated/prisma/client';
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


type Model = Event | Address;


export type AddressProps = Pick<Address, 'id' | 'region' | 'town' | 'district' | 'street' | 'houseNumber' | 'postalCode' > & { coordinates: LatLngTuple } 

export type EventProps = Pick<Event, 'name' | 'description' | 'date_time' | 'genres' | 'photos' | 'hostUserId' | 'addressId' >

export class MarkerProps {
    constructor(public address: AddressProps[], public events: EventProps[]) {}

    public searchByAddress(selectedAddress : AddressProps) { 
        return this.events.filter(evt => evt.addressId === selectedAddress.id)
    } 
    
}





