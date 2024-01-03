import Switch from '@mui/material/Switch';
import '../../../assets/styles/button.css'
import '../../../assets/styles/Image.css'
import '../../../assets/styles/Text.css'
import React from "react";
import {EventCategory} from "../../../data/Model.tsx";
import {FormControl, FormControlLabel, FormGroup} from "@mui/material";

type toggleButtonProps = {
    setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
    category: EventCategory;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleGroup: React.FC<toggleButtonProps> =
    ({setCategory, category, setShowEventViewer}) => {

    const [state, setState] = React.useState(category);

    const handleChange = (cat: EventCategory) => {
        setState(cat);
        setShowEventViewer(false);
        setCategory(cat);
        console.log(category);
    };

    return(

        <FormControl component={"fieldset"} variant={"standard"}>
            <FormGroup>
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Storms}
                            onChange={() => {
                                handleChange(EventCategory.Storms);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Storms"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Wildfires}
                            onChange={() => {
                                handleChange(EventCategory.Wildfires);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Wildfires"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Volcanoes}
                            onChange={() => {
                                handleChange(EventCategory.Volcanoes);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Volcanoes"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Earthquakes}
                            onChange={() => {
                                handleChange(EventCategory.Earthquakes);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Earthquakes"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Floods}
                            onChange={() => {
                                handleChange(EventCategory.Floods);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Floods"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
                            checked={state === EventCategory.Landslides}
                            onChange={() => {
                                handleChange(EventCategory.Landslides);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label={"Landslides"}
                />
                <FormControlLabel className={"cat-switch-with-label"}
                    control={
                        <Switch className={"layer-toggle"}
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