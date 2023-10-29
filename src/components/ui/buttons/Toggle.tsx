import '../../../assets/styles/button.css'

type toggleButtonProps = {
    buttonText: string,
    click: React.MouseEventHandler<HTMLElement>
};

function toggleButton(props: toggleButtonProps){
    return(
        <>
        <button className="toggle-button">
            {props.buttonText}
        </button>
        </>
    )
}

export default toggleButton;