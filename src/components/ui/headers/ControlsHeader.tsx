import '../../../assets/styles/Text.css';


type ContentHeaderProps = {
    headerText: string;
}

function ControlsHeader(props: ContentHeaderProps){
    return(
        <div className="controls-header">
            <h2 className="controls-h2">
                {props.headerText}
            </h2>
        </div>
    )
}

export default ControlsHeader;