import '../../../assets/styles/button.css'
import '../../../assets/styles/Image.css'
import '../../../assets/styles/Text.css'
import "../../../assets/styles/container.css";
import * as globalConstants from '../../../data/GlobalConstants.tsx';
import React from "react";
import {EventCategory} from "../../../data/Model.tsx";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

type toggleButtonProps = {
    setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
    category: EventCategory;
    showEventViewer: boolean;
    setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryRadioGroup: React.FC<toggleButtonProps> =
    ({setCategory, category, setShowEventViewer}) => {

    const [state, setState] = React.useState(category);

    const handleChange = (cat: EventCategory) => {
        setState(cat);
        setShowEventViewer(false);
        setCategory(cat);
        console.log(category);
    };

    return(
        <FormControl className={"cat-radio-form-control"} component={"fieldset"} variant={"standard"}>
            <RadioGroup name={"category-radio-group"} defaultValue={EventCategory.Storms}>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Storms"} value={EventCategory.Storms}
                                      checked={state === EventCategory.Storms}
                                      onChange={() => { handleChange(EventCategory.Storms); }}/>
                    <img src={globalConstants.STORM_ICON_PATH} alt={"Storm Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Wildfires"} value={EventCategory.Wildfires}
                                      checked={state === EventCategory.Wildfires}
                                      onChange={() => { handleChange(EventCategory.Wildfires); }}/>
                    <img src={globalConstants.WILDFIRE_ICON_PATH} alt={"Wildfire Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Volcanoes"} value={EventCategory.Volcanoes}
                                      checked={state === EventCategory.Volcanoes}
                                      onChange={() => { handleChange(EventCategory.Volcanoes); }}/>
                    <img src={globalConstants.VOLCANOE_ICON_PATH} alt={"Volcano Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Earthquakes"} value={EventCategory.Earthquakes}
                                      checked={state === EventCategory.Earthquakes}
                                      onChange={() => { handleChange(EventCategory.Earthquakes); }}/>
                    <img src={globalConstants.EARTHQUAKE_ICON_PATH} alt={"Earthquake Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Floods"} value={EventCategory.Floods}
                                      checked={state === EventCategory.Floods}
                                      onChange={() => { handleChange(EventCategory.Floods); }}/>
                    <img src={globalConstants.FLOOD_ICON_PATH} alt={"Flood Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Landslides"} value={EventCategory.Landslides}
                                      checked={state === EventCategory.Landslides}
                                      onChange={() => { handleChange(EventCategory.Landslides); }}/>
                    <img src={globalConstants.LANDSLIDE_ICON_PATH} alt={"Landslide Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Extreme Temperatures"} value={EventCategory.ExtremeTemperatures}
                                      checked={state === EventCategory.ExtremeTemperatures}
                                      onChange={() => { handleChange(EventCategory.ExtremeTemperatures); }}/>
                    <img src={globalConstants.TEMPERATURE_ICON_PATH} alt={"Temperature Icon"}/>
                </div>
            </RadioGroup>
        </FormControl>
    )
}

export default CategoryRadioGroup;