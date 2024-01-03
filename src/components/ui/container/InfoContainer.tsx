import "../../../assets/styles/container.css";
import React from "react";



function InfoContainer() {
    return(
        <div className={"info-background"}>
            {/*<div className={"info-separator-horizontal"}/>*/}
            <div className={"info-button-background"}>
                <div className={"info-element"}>
                    Help
                </div>
                <div className={"info-separator-vertical"}></div>
                <div className={"info-element"}>
                    About
                </div>
            </div>
        </div>
    )
}

export default InfoContainer;