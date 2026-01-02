import MapModule from './components/MapModule'
import EventView from './components/EventView'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import '../styles/map.css'


export default function MapPage() {
  return (
    <main>
      <Header/>
      <MapModule map_type='page'/>
      <PlusBar signedIn={false}></PlusBar>
      <DateIcon></DateIcon>
      <EventView></EventView>
    </main>
  )
}
