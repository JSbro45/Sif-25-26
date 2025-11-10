import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import { LMarker } from './marker-window';
import 'leaflet/dist/leaflet.css';
import { MapAttributes } from '../map-attrib';
import '../Map.css';

export default function Map() {
  const mapAtt = new MapAttributes();

  return (
    <MapContainer center={[50, 15]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapAtt.markers.map((mark, key) => (
        <LMarker key={key} pos={mark.coords} evt={mark.event} email={mark.email} />
      ))}
    </MapContainer>
  );
}
