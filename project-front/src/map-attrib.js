export class MapAttributes{
constructor(){
    this.API_KEYs = ['9DkBdKq2zLtbtPX8ozoHjiakIoOeV6gjxjbOdk0cEhk','lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78']
    this.tileLayers = {
        'Basic': L.tileLayer('https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}', {
            minZoom: 0,
            maxZoom: 19,
            attribution: '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
            })
        }
    this.markers = [
        {coords:[50,15], event:'rockfest', email:'joe.shmoe@gmail.com'},
        {coords:[49.612,14.48], event:'jazzfest', email:'matt.summers@gmail.com'},
        {coords:[49.24,15.701], event:'rockfest2', email:'joe.shmoe@gmail.com'}
        ]
    }
    
}