type toggleButtonProps = {
    buttonText: string,
}

function toggleButton(props: toggleButtonProps){
    return(
        <>
        <button >
            {props.buttonText}
        </button>
        </>
    )
}

export default toggleButton;