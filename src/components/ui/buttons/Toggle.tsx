import '../../../assets/styles/button.css'

type toggleButtonProps = {
    buttonText: string,
}

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