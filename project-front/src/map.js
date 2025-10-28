
const API_KEYs = ['9DkBdKq2zLtbtPX8ozoHjiakIoOeV6gjxjbOdk0cEhk','lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78']

const map = L.map('map').setView([50.725, 15.603], 15);

const tileLayers = {
	'Basic': L.tileLayer('https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${API_KEY}', {
    minZoom: 0,
    maxZoom: 19,
    attribution: '<a href="https://api.mapy.com/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
})}

export default {map, tileLayers}