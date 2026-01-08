import MapModule from './components/MapModule'
//import EventView from './components/EventView'
import Header from '../home/components/Header'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import SearchBar from './components/SearchBar'
import EventPopUp from './components/EventPopUp'
import '../styles/map.css'


export default function MapPage() {
  return (
    <main>
      <div>
      <Header/>
        <MapModule map_type='page'/>
        <PlusBar signedIn={false}></PlusBar>
        <SearchBar></SearchBar>
        <DateIcon></DateIcon>
      </div>
      <EventPopUp></EventPopUp>
    </main>
  )
}
