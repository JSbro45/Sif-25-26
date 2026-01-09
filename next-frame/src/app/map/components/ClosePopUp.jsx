import React from "react";
import EventView from "./EventView";

export default function ClosePopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inside"> 
                <EventView></EventView>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Zavřít</button>
            </div>
        </div>  
    ) : "";
}