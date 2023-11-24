import Switch from '@mui/material/Switch';
import '../../../assets/styles/button.css'
import '../../../assets/styles/Image.css'
import '../../../assets/styles/Text.css'
import React from "react";

type toggleButtonProps = {
    buttonLabel: string,
    imgPath: string,
    imgAlt : string,
    toggle: React.MouseEventHandler<HTMLElement>
};

function toggleButton(props: toggleButtonProps){
    return(
        <div className={"layer-toggle"}>
            <Switch/>
            <img className={"toggle-img"} src={props.imgPath} alt={props.imgAlt}/>
            <label className={"toggle-label"}>
                {props.buttonLabel}
            </label>
        </div>
    )
}

export default toggleButton;