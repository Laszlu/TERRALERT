import '../../../assets/styles/button.css'
import '../../../assets/styles/Image.css'
import '../../../assets/styles/Text.css'
import "../../../assets/styles/container.css";
import * as globalConstants from '../../../data/GlobalConstants.tsx';
import {EventCategory} from "../../../data/Model.tsx";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {ICategoryRadioProps} from "../../../data/Interfaces.tsx";

function CategoryRadioGroup (props: ICategoryRadioProps) {

    const handleChange = (cat: EventCategory) => {
        //setState(cat);
        props.setShowEventViewer(false);
        props.setCategory(cat);
    };

    return(
        <FormControl className={"cat-radio-form-control"} component={"fieldset"} variant={"standard"}>
            <RadioGroup name={"category-radio-group"} defaultValue={EventCategory.Storms}>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Storms"} value={EventCategory.Storms}
                                      checked={props.category === EventCategory.Storms}
                                      onChange={() => { handleChange(EventCategory.Storms); }}/>
                    <img src={globalConstants.STORM_ICON_PATH} alt={"Storm Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Wildfires"} value={EventCategory.Wildfires}
                                      checked={props.category === EventCategory.Wildfires}
                                      onChange={() => { handleChange(EventCategory.Wildfires); }}/>
                    <img src={globalConstants.WILDFIRE_ICON_PATH} alt={"Wildfire Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Volcanoes"} value={EventCategory.Volcanoes}
                                      checked={props.category === EventCategory.Volcanoes}
                                      onChange={() => { handleChange(EventCategory.Volcanoes); }}/>
                    <img src={globalConstants.VOLCANOE_ICON_PATH} alt={"Volcano Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Earthquakes"} value={EventCategory.Earthquakes}
                                      checked={props.category === EventCategory.Earthquakes}
                                      onChange={() => { handleChange(EventCategory.Earthquakes); }}/>
                    <img src={globalConstants.EARTHQUAKE_ICON_PATH} alt={"Earthquake Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Floods"} value={EventCategory.Floods}
                                      checked={props.category === EventCategory.Floods}
                                      onChange={() => { handleChange(EventCategory.Floods); }}/>
                    <img src={globalConstants.FLOOD_ICON_PATH} alt={"Flood Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Landslides"} value={EventCategory.Landslides}
                                      checked={props.category === EventCategory.Landslides}
                                      onChange={() => { handleChange(EventCategory.Landslides); }}/>
                    <img src={globalConstants.LANDSLIDE_ICON_PATH} alt={"Landslide Icon"}/>
                </div>
                <div className={"cat-radio-btn-container"}>
                    <FormControlLabel control={<Radio/>} label={"Extreme Temperatures"} value={EventCategory.ExtremeTemperatures}
                                      checked={props.category === EventCategory.ExtremeTemperatures}
                                      onChange={() => { handleChange(EventCategory.ExtremeTemperatures); }}/>
                    <img src={globalConstants.TEMPERATURE_ICON_PATH} alt={"Temperature Icon"}/>
                </div>
            </RadioGroup>
        </FormControl>
    )
}

export default CategoryRadioGroup;