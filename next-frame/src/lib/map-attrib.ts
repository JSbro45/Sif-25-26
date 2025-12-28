

export class MapAttributes{
    public tileLayers: {[key: string]: string[]};
    public markers: {coords: [number, number], event: string, email: string, time: Date}[];
    constructor(){
        const API_KEYs = ['9DkBdKq2zLtbtPX8ozoHjiakIoOeV6gjxjbOdk0cEhk','lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78']
        this.tileLayers = {
            'basic': [
                'https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}', 
                '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
                ' 49^{circ }44^{prime }37.526"N), (15^{circ }20^{prime }19.098"E'
            ]
        }
        this.markers = [
            {coords:[50,15], event:'rockfest', email:'joe.shmoe@gmail.com', time: new Date('2024-07-20T18:30:00')},
            {coords:[49.612,14.48], event:'jazzfest', email:'matt.summers@gmail.com', time: new Date('2024-07-20T20:30:00')},
            {coords:[49.24,15.701], event:'rockfest2', email:'john.doe@gmail.com', time: new Date('2024-07-20T19:30:00')}
        ]
    }   
}