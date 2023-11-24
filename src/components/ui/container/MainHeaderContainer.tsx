import '../../../assets/styles/Text.css';

type MainHeaderProps = {
    headerText: string;
}

function mainheadercontainer(props: MainHeaderProps){
    return(
        <div className='main-header'>
            <h1 className="main-h1">
                {props.headerText}
            </h1>
        </div>
    )
}

export default mainheadercontainer;