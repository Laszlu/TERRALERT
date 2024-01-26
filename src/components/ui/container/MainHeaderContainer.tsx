import '../../../assets/styles/Text.css';
import {IHeaderProps} from "../../../data/Interfaces.tsx";

function MainHeaderContainer(props: IHeaderProps){
    return(
        <div className='main-header'>
            <h1 className="main-h1">
                {props.headerText}
            </h1>
        </div>
    )
}

export default MainHeaderContainer;