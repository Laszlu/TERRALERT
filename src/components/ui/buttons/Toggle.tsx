import '../../../assets/styles/button.css'

type toggleButtonProps = {
    buttonText: string,
    click: React.MouseEventHandler<HTMLElement>
};

function toggleButton(props: toggleButtonProps){
    return(
        <>
        <button className="toggle-button" onClick={props.click}>
            {props.buttonText}
        </button>
        </>
    )
}

export default toggleButton;