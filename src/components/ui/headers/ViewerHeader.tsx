import '../../../assets/styles/Text.css';

type ViewerHeaderProps = {
    headerText: string;
}

function ViewerHeader(props: ViewerHeaderProps){
    return(
        <div className="viewer-header">
            <h2 className="viewer-h2">
                {props.headerText}
            </h2>
        </div>
    )
}

export default ViewerHeader;