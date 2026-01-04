import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import EventView from "./EventView";
import '../../styles/map.css'
import '../../styles/popup.css'

export default function MarkerWindow({pos,evt, time}: {pos: [number,number], evt: string, time: Date}) {
    const icon = new Icon({
        iconUrl: '/map-icon.svg',
        iconSize: [80, 80],
    });

    return (
        <div className="marker" onDoubleClick={(ev) => {}}>
            <Marker position={pos} icon={icon}>
                <Popup>
                    <EventView></EventView>
                </Popup>
            </Marker>
        </div>
    )
}
