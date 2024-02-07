import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import {ViewerHeader} from "../headers/HeaderIndex.tsx";
import {IHelpContainerProps} from "../../../data/Interfaces.tsx";

function HelpContainer(props: IHelpContainerProps) {

    const handleClick = () => {
        props.setShowHelp(false);
    }

    return(
        <div className={"popup-container"}>
            <div className={"popup-background"}>
                <button className={"close-button"} onClick={() => handleClick()}>
                    &#10005;
                </button>
                <ViewerHeader headerText={"Help"}/>
                <div className={"popup-text-container"}>
                    <h4>What is TERRALERT?</h4>
                    <p>
                        TERRALERT uses the NASA EONET API to display current Natural Events
                        like Storm or Wildfires in a simple and intuitive way.
                    </p>
                </div>
                <div className={"popup-text-container"}>
                    <h4>How to use TERRALERT:</h4>
                    <label>Globe:</label>
                    <p>Shows all Events from the current category<br/>Click the icon to bring up the Viewer</p>
                    <label>Controls:</label>
                    <p>Switch category shown on globe<br/>Tick checkbox to use older sample data</p>
                    <label>Viewer:</label>
                    <p>Shows all information for the selected event<br/>Click "Source" to open original source</p>
                </div>
            </div>
            <div className={"help-controls-border"}>
                <label className={"help-label"}>Controls</label>
            </div>
            <div className={"help-viewer-border"}>
                <label className={"help-label"}>Viewer</label>
            </div>
            <div className={"help-globe-border"}>
                <label className={"help-label"}>Globe</label>
            </div>
        </div>
    )
}

export default HelpContainer;