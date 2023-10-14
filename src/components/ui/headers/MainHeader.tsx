import '../../../assets/styles/header.css';

type mainheaderprops = {
    headerText: string;
}

function mainheader(props: mainheaderprops){
    return(
        <div>
            <h1 className="main-h1">
                {props.headerText}
            </h1>
        </div>
    )
}

export default mainheader;