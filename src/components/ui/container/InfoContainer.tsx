import "../../../assets/styles/container.css";
import {IInfoContainerProps} from "../../../data/Interfaces.tsx";

function InfoContainer(props: IInfoContainerProps) {
    const handleAboutClick = () => {
        if(props.showAboutElement){
            props.setShowAboutElement(false);
        }
        else{
            props.setShowHelpElement(false);
            props.setShowAboutElement(true);
        }
    };

    const handleHelpClick = () => {
        if(props.showHelpElement){
            props.setShowHelpElement(false);
        }
        else{
            props.setShowAboutElement(false);
            props.setShowHelpElement(true);
        }
    };

    return(
        <div className={"info-background"}>
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