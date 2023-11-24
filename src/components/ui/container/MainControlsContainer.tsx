import { ToggleButton } from "../buttons/ButtonsIndex";
import { ControlsHeader } from "../headers/HeaderIndex";
import { useFetchHook } from "../../../utilities/UtilitiesIndex";
import { NaturalEvent } from "../../../data/Model";
import "../../../assets/styles/container.css";

/*type ContainerProps = {
	height: number;
	width: number;
};*/

function testButtonClick() {
	console.log("button clicked");
}

function mainControlsContainer() {
	const testStorm = useFetchHook<NaturalEvent>(
		"https://eonet.gsfc.nasa.gov/api/v3/events/EONET_6451"
	);

	function testApiFetch() {
		console.log(testStorm.data?.id);
	}

	return (
		<div className="main-controls-container">
			<ControlsHeader headerText="Controls" />
			<div className="button-container first-row-buttons">
				<ToggleButton
					buttonLabel="Storms"
					imgPath={"src/assets/images/hurricane.png"}
					imgAlt={"Hurricane Icon"}
					toggle={testButtonClick}
				/>
				<ToggleButton
					buttonLabel="Widlfires"
					imgPath={"src/assets/images/fire.png"}
					imgAlt={"Wildfires Icon"}
					toggle={testApiFetch}
				/>
				<ToggleButton
					buttonLabel="Volcanoes"
					imgPath={"src/assets/images/volcano.png"}
					imgAlt={"Volcano Icon"}
					toggle={testApiFetch}/>
				<ToggleButton
					buttonLabel="Earthquakes"
					imgPath={"src/assets/images/earthquake.png"}
					imgAlt={"Earthquake Icon"}
					toggle={testApiFetch}/>
				<ToggleButton
					buttonLabel="Floods"
					imgPath={"src/assets/images/flood.png"}
					imgAlt={"Flood Icon"}
					toggle={testApiFetch}/>
				<ToggleButton
					buttonLabel="Landslides"
					imgPath={"src/assets/images/landslide.png"}
					imgAlt={"Landslide Icon"}
					toggle={testApiFetch}/>
				<ToggleButton
					buttonLabel="Extreme Temperatures"
					imgPath={"src/assets/images/global-warming.png"}
					imgAlt={"Extreme Temp Icon"}
					toggle={testApiFetch}/>
			</div>
		</div>
	);
}

export default mainControlsContainer;

