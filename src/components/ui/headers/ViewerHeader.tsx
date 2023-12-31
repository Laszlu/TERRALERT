import '../../../assets/styles/Text.css';

type ViewerHeaderProps = {
    headerText: string;
}

function ViewerHeader(props: ViewerHeaderProps){
    return(
        <div className="viewer-header">
            <div className="viewer-header-text">
                {props.headerText.substring(0, 90)}
            </div>
        </div>
    )
}

export default ViewerHeader;