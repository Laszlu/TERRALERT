import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import React from "react";
import {ViewerHeader} from "../headers/HeaderIndex.tsx";

interface IHelpContainerProps {
    showHelpElement: boolean;
    setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
}

function HelpContainer(props: IHelpContainerProps) {

    const handleClick = () => {
        props.setShowHelpElement(false);
    }

    return(
        <div className={"about-container"}>
            <div className={"about-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={"Help"}/>
                <div className={"about-text-container"}>
                    <h4>What is TERRALERT?</h4>
                    <p>
                        TERRALERT uses the NASA EONET API to display current Natural Events
                        like Storm or Wildfires in a simple and intuitive way.
                    </p>
                </div>
                <div className={"about-text-container"}>
                    <h4>How to use TERRALERT:</h4>
                    <p>
                        The Globe in the center shows the events from the selected category.<br/>
                        The category selection is found on the left side.
                        If a selected category does not show anything on the globe,
                        there is no data for this category available.<br/>
                        Clicking on an event on the globe
                        opens the Event Information Viewer on the right side.
                        The Viewer shows Information for the selected event and
                        the "Source" button redirects to the original source for the event.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HelpContainer;