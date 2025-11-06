import { Marker, Popup } from "react-leaflet";
//import { MapAttributes } from "./map-attrib";
import '../Map.css'

export function LMarker(pos,evt,email) {
    return (
        <Marker position={pos}>
            <Popup>
                <ul className="event-thumbnail">
                    <li> <span className="event"> 
                            <b className="n"> event: </b> {evt} </span> 
                    </li>
                    <li> <span className="email">
                            <b className="n"> email: </b> {email} </span> 
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