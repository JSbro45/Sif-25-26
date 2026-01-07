import React from "react";

export default function ClosePopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inside">  
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Zavřít</button>
            </div>
        </div>  
    ) : "";
}