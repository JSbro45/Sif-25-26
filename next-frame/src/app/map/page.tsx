import MapModule from './components/MapModule'
// import EventView from './components/EventView'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import eventPopUp from './components/EventPopUp'
import '../styles/map.css'
import EventPopUp from './components/EventPopUp'

export default function MapPage() {
  return (
    <main>
      <Header/>
      <MapModule map_type='page'/>
      <PlusBar signedIn={false}></PlusBar>
      <SearchBar></SearchBar>
      <DateIcon></DateIcon>
      <EventPopUp></EventPopUp>
    </main>
  )
}
