import Switch from '@mui/material/Switch';
import '../../../assets/styles/button.css'
import '../../../assets/styles/Image.css'
import '../../../assets/styles/Text.css'
import React from "react";
import {EventCategory} from "../../../data/Model.tsx";
import {FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";

type toggleButtonProps = {
    imgPath: string,
    imgAlt : string,
    setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
    category: EventCategory;
};

const ToggleGroup: React.FC<toggleButtonProps> =
    ({imgPath, imgAlt, setCategory, category}) => {

    const [state, setState] = React.useState(category);

    const handleChange = (cat: EventCategory) => {
        setState(cat);
        setCategory(cat);
        console.log(category);
    };

    return(

        <FormControl component={"fieldset"} variant={"standard"}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Storms}
                            onChange={() => {
                                handleChange(EventCategory.Storms);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Storms"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Wildfires}
                            onChange={() => {
                                handleChange(EventCategory.Wildfires);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Wildfires"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Volcanoes}
                            onChange={() => {
                                handleChange(EventCategory.Volcanoes);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Volcanoes"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Earthquakes}
                            onChange={() => {
                                handleChange(EventCategory.Earthquakes);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Earthquakes"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Floods}
                            onChange={() => {
                                handleChange(EventCategory.Floods);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Floods"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.Landslides}
                            onChange={() => {
                                handleChange(EventCategory.Landslides);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Landslides"}
                />
                <FormControlLabel
                    control={
                        <Switch className={"cat-switch"}
                            checked={state === EventCategory.ExtremeTemperatures}
                            onChange={() => {
                                handleChange(EventCategory.ExtremeTemperatures);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Extreme Temperatures"}
                />
            </FormGroup>
        </FormControl>
    )
}

export default ToggleGroup;