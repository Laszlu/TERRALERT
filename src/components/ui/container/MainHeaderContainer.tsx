import '../../../assets/styles/header.css';

type mainheaderprops = {
    headerText: string;
}

function mainheadercontainer(props: mainheaderprops){
    return(
        <div className='main-header'>
            <h1 className="main-h1">
                {props.headerText}
            </h1>
        </div>
    )
}

export default mainheadercontainer;