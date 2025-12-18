import MapModule from './components/MapModule'
import '../styles/map.css'
import PlusBar from './components/PlusBar'
import DateIcon from './components/DateIcon'
import LogInForm from '../auth/login/page'


export default function MapPage() {
  return (
    <> 
      <MapModule map_type='page'/>
      <DateIcon />
      <PlusBar signedIn={false} />
      <LogInForm />
    </>
  )
}
