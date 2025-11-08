import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Map from './components/Map.jsx'

console.log(Map)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Map />
  </StrictMode>
)
console.log(Map().props);
