import MapModule from './components/MapModule'
import EventView from './components/EventView'
import '../styles/map.css'


export default function MapPage() {
  return (
    <main>
      <MapModule map_type='page'/>
      <EventView></EventView>

    </main>
  )
}
