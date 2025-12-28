import MapModule from './components/MapModule'
import EventView from './components/EventView'
import Header from '../home/components/Header'
import '../styles/home.css'
import React, { useRef } from 'react';


      // You need to use a ref to access a child value from MapModule.
      // First, update MapModule to forward refs and expose the value you need (e.g., via useImperativeHandle).
      // Then, in MapPage:


export default function MapPage() {
    const mapModuleRef = useRef<any>(null);
    const showEventView = () => {
      // Example: check a value from MapModule via ref
      if (mapModuleRef.current && mapModuleRef.current.someChildValue) {
        return <EventView />;
      }
      return <></>;
    };

    return (
      <main>
        <Header />
        <MapModule ref={mapModuleRef} map_type='page' key={1} />
        {showEventView()}
      </main>
    );
  }
