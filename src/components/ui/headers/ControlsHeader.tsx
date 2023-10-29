
type ContentHeaderProps = {
    headerText: string;
}

function controlsHeader(props: ContentHeaderProps){
    return(
        <div className="controls-header">
            <h2 className="controls-h2">
                {props.headerText}
            </h2>
        </div>
    )
}

export default controlsHeader;