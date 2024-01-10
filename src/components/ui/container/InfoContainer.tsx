import "../../../assets/styles/container.css";
import React from "react";

interface IInfoContainerProps {
    showAboutElement: boolean;
    setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
    showHelpElement: boolean;
    setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
}

function InfoContainer(props: IInfoContainerProps) {
    const handleAboutClick = () => {
        props.setShowAboutElement(true);
    };

    const handleHelpClick = () => {
        props.setShowHelpElement(true);
    }

    return(
        <div className={"info-background"}>
            {/*<div className={"info-separator-horizontal"}/>*/}
            <div className={"info-button-background"}>
                <div className={"info-element"} onClick={handleHelpClick}>
                    Help
                </div>
                <div className={"info-separator-vertical"}></div>
                <div className={"info-element"} onClick={handleAboutClick}>
                    About
                </div>
            </div>
        </div>
    )
}

export default InfoContainer;