import '../../../assets/styles/Text.css';
import {IHeaderProps} from "../../../data/Interfaces.tsx";

function ControlsHeader(props: IHeaderProps){
    return(
        <div className="controls-header">
            <h2 className="controls-h2">
                {props.headerText}
            </h2>
        </div>
    )
}

export default ControlsHeader;