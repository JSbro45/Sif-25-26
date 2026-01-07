"use client";

import { useState } from "react";
import ClosePopUp from "./ClosePopUp";
import EventView from "./EventView";

export default function EventPopUp() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="event-popup">
            <button onClick={() => setShowPopup(true)}>EVT</button>
            <ClosePopUp trigger={showPopup} setTrigger={setShowPopup}>
                <EventView></EventView>
            </ClosePopUp>
        </div>
    );
}