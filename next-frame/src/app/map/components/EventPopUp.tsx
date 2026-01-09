"use client";
import '../../styles/popup.css'

import { useState } from "react";
import ClosePopUp from "./ClosePopUp";
import { popup } from "leaflet";

export default function EventPopUp() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="event-popup">
            <button onClick={() => setShowPopup(true)}>EVT</button>
            <ClosePopUp trigger={showPopup} setTrigger={setShowPopup}>
            </ClosePopUp>
        </div>
    );
}