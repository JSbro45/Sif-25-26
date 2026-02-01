import { LatLngTuple } from 'leaflet';
import { ValueOf } from 'next/dist/shared/lib/constants';
import{ keys } from 'ts-transformer-keys';


export class EventTemplate {
    coords: LatLngTuple = [0, 0];
    event: string = '';
    time: Date = new Date();
    description: string = '';
    genre: string[] = [];
    website: string|null = null;
    photo: string[] = []
    address: string = '';
    ticketPrice: string|null = null
    ticketWebsite: string|null = null
}

/*
    name: useRef<HTMLInputElement>(null),
    photo: useRef<HTMLInputElement>(null),
    desc: useRef<HTMLInputElement>(null),
    link: useRef<HTMLInputElement>(null),
    genre: useRef<HTMLInputElement>(null),
    date: useRef<HTMLInputElement>(null),
    web: useRef<HTMLInputElement>(null),
    address: useRef<HTMLInputElement>(null),
*/


const template = new EventTemplate();

export type MarkerProps = typeof template;
type ToFunc<T> = {
  [K in keyof T]: () => T[K]
}
for (const key of keys<MarkerProps>()) {
  const func = () => template[key];
}

type MarkerPropsFunc = ToFunc<MarkerProps>;



export class MapEntities {

    public tileLayers: {[key: string]: [string, string, string]};
    constructor(public markers: MarkerProps[]) {
        const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
        this.tileLayers = {
            'basic': [
                'https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}', 
                '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
                ' 49^{circ }44^{prime }37.526"N), (15^{circ }20^{prime }19.098"E'
            ]
        };
    }
}
