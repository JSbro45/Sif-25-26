import MapModule from './components/MapModule'
import EventView from './components/EventView'
import Header from '../home/components/Header'
import '../styles/home.css'


export default function MapPage() {
  return (
    <main>
      <Header/>
      <MapModule map_type='page'/>
    </main>
  )
}
