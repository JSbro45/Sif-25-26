import MapModule from './components/MapModel'
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
