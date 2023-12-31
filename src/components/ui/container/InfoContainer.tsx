import "../../../assets/styles/container.css";
import React from "react";



function InfoContainer() {
    return(
        <div className={"info-background"}>
            <div className={"info-element"}>
                Help
            </div>
            <div className={"info-separator"}></div>
            <div className={"info-element"}>
                About
            </div>
        </div>
    )
}

export default InfoContainer;