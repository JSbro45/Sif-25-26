import { Marker, Popup } from "react-leaflet";
//import { MapAttributes } from "./map-attrib";
import '../../styles/map.css'


export default function MarkerWindow({pos,evt}: {pos: [number,number], evt: string}) {
    return (
        <Marker position={pos}>
            <Popup>
                <ul className="event-thumbnail">
                    <li> 
                        <span className="event"> <b className="n"> event: </b> { evt } </span> 
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