# Shrnutí projektu na seminář z informatiky 2025/26
## Ultimátní mapa koncertů v ČR

__Vypracují:__ Katarína Vislocká, Jean Samuel Brou

__Cíl projektu:__ Vytvořit mapu, která by zaznamenávala všechny koncerty, které jsou v určitý den 

__Materiály, které využijeme:__ 
- nějaké API (Mapy cz, Mapbox)
- oficiální stránky (budov, hudebníků - případně youtube kanál)
- framework(nejspíš JS framework + React)
- Grafickou knihovnu pro JS - Leaflet
- Přehled koncertů, sálů atd. 

__Vytvoříme to v:__ 
> Frontend - HTML, CSS, JavaScript + React
> Backend - 

__Postup:__
  1.


__Funkce:__ 
> - movement: přiblížit - oddálit, posouvání mapy v různých směrech
> - jednotlivé bodíky na mapě (místo kde se koncert koná) - půjde na ně kliknout
> - po rozkliknutí informace o koncertu (kdo hraje, čas, místo, jak dlouho hraje, odkazy na stránky)
> - ikonka, u které se bude dát přepínat datum v rozmezí tří dnů "?" (včera, dnes a zítra) -> podle toho se změní data na mapě
> - neustálá aktualizace dat 
> (- hledání místa - vyhledá konkrétní sál na mapě)

https://www.youtube.com/watch?v=c7ptpvp1CYw




```
import { MapContainer, TileLayer } from 'react-leaflet' 

export default function MapModule() {
    const API_KEY = 'lijiPKo4X8TaQxEXRTHg_8ySYzbGEwoVTL6YILGdk78'
    return (
    <MapContainer center={[50,15]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapy.com/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=$+{API_KEY}"
            />
    </MapContainer>
    )
}



 Popup component z leafletu:


            <Popup>
                <ul className="event-thumbnail">
                    <li>
                        <span className="event"> <b className="n"> event: </b> { evt } </span>
                    </li>
                    <li>
                        <span className="time"> <b className="n"> time: </b>
                            <time dateTime={time.toISOString()}> { time.toLocaleString() } </time>
                        </span>
                    </li>
                </ul>
            </Popup>


```
