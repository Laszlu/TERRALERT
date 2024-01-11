import "../../../assets/styles/container.css";
import "../../../assets/styles/index.css";
import {ViewerHeader} from "../headers/HeaderIndex.tsx";

function ReloadPage(){
    window.parent.location = window.parent.location.href;
}

function ErrorContainer () {
    return(
        <div className={"popup-container"}>
            <div className={"popup-background"}>
                <ViewerHeader headerText={"Error"}/>
                <div className={"popup-text-container"}>
                    <p>
                        The App encountered an error while loading the data. Please reload the website.
                    </p>
                </div>
                <button className={"error-reload-btn"} onClick={ReloadPage}>
                    Reload
                </button>
            </div>
        </div>
    )
}

export default ErrorContainer;