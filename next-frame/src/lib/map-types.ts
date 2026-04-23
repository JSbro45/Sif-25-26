import { geoJson, LatLngTuple } from 'leaflet';
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


export type AddressProps = Pick<Address, 'id' | 'region' | 'municipality' | 'district' | 'street' | 'houseNumber' > & { coordinates: LatLngTuple } 

export type EventProps = Pick<Event, 'name' | 'description' | 'date_time' | 'genres' | 'photos' | 'hostUserId' | 'addressId' >

export class MarkerProps {
    constructor(public address: AddressProps[], public events: EventProps[]) {}

    public searchByAddress(selectedAddress : AddressProps) { 
        return this.events.filter(evt => evt.addressId === selectedAddress.id)
    } 
}

export type FilterProps = {
    dateRange: {start: Date, end: Date},
    genre?: string,
    radius?: number
}


export type GeoType = "regional.address" | "regional.street" | "regional.municipality_part" | "regional.municipality" | "regional.region" | "regional.country"

export type GeoItem = {
    bbox: [number ,number ,number ,number]
    label: string,
    location: string,
    name: string,
    position : {
        lat: number
        lon: number
    }
    regionalStructure: {name: string, type: GeoType}[]
    type : GeoType
    zip: string
}

export type GeoJsonResponse = {
    items : GeoItem[],
    locality: []
}





