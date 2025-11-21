import { Marker, Popup } from "react-leaflet";
//import { MapAttributes } from "./map-attrib";
import '../styles/map.css'

<<<<<<<< HEAD:project-front/src/components/marker-window.tsx
export function LMarker({pos,evt}: {pos: [number,number], evt: string}) {
========
export default function MarkerWindow({pos,evt}) {
>>>>>>>> templates:project-front/src/components/map/MarkerWindow.jsx
    return (
        <Marker position={pos}>
            <Popup>
                <ul className="event-thumbnail">
                    <li> 
                        <span className="event"> 
                            <b className="n"> event: </b> { evt } 
                        </span> 
                    </li>
                </ul>
            </Popup>
        </Marker>
    )
}



/*
<li> <span className="time">
        <b className="n"> time: </b><time datetime={time}></time>
    </span> 
</li>
*/