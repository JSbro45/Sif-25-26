import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import '../../styles/map.css'

export default function MarkerWindow({pos,evt}: {pos: [number,number], evt: string}) {
    const icon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [80, 80],
    });
    return (
        <div className="marker" onDoubleClick={(ev) => {}}>
            <Marker position={pos} icon={icon}>
                <Popup>
                    <ul className="event-thumbnail">
                        <li> 
                            <span className="event"> <b className="n"> event: </b> { evt } </span> 
                        </li>
                    </ul>
                </Popup>
            </Marker>
        </div>
    )
}

/*
<li> <span className="time">
        <b className="n"> time: </b><time datetime={time}></time>
    </span> 
</li>
*/