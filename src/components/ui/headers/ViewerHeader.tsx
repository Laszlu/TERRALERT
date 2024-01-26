import '../../../assets/styles/Text.css';
import {IHeaderProps} from "../../../data/Interfaces.tsx";

function ViewerHeader(props: IHeaderProps){
    return(
        <div className="viewer-header">
            <div className="viewer-header-text">
                {props.headerText.substring(0, 90)}
            </div>
        </div>
    )
}

export default ViewerHeader;