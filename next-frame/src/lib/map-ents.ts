import { LatLngTuple } from 'leaflet';
import { ValueOf } from 'next/dist/shared/lib/constants';
import{ keys } from 'ts-transformer-keys';


export interface MarkerProps {
    coords: LatLngTuple;
    event: string;
    time: Date;
}


export class MarkerEntity implements MarkerProps {
    constructor(public coords: LatLngTuple, public event: string, public time: Date
    ) {}
}
console.log(MarkerEntity.prototype);





export class MapEntities extends MarkerEntity {
    public tileLayers: {[key: string]: [string, string, string]};
    constructor(public markers: MarkerProps) {
        super(markers);
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
