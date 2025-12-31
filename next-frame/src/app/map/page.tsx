import MapModule from './components/MapModule'
import EventView from './components/EventView'
import PlusBar from './components/PlusBar'
import '../styles/map.css'


export default function MapPage() {
  return (
    <main>
      <MapModule map_type='page'/>
      <EventView></EventView>
      <PlusBar signedIn={false}></PlusBar>
    </main>
  )
}
