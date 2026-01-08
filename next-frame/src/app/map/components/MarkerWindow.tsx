import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import '../../styles/map.css'
import '../../styles/popup.css'

export default function MarkerWindow({pos,evt, time}: {pos: [number,number], evt: string, time: Date}) {
    const icon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [80, 80],
    });

    return (
            <Marker position={pos} icon={icon}>
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
            </Marker>
    )
}
