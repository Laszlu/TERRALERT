import { ToggleButton } from "../buttons/ButtonsIndex";
import { ControlsHeader } from "../headers/HeaderIndex";
import { useFetchHook } from "../../../utilities/UtilitiesIndex";
import { MovingEvent } from "../../../data/Model";
import "../../../assets/styles/container.css";

type ContainerProps = {
	height: number;
	width: number;
};

function testButtonClick() {
	console.log("button clicked");
}

function mainControlsContainter(props: ContainerProps) {
	const testStorm = useFetchHook<MovingEvent>(
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
					buttonText="Button1"
					click={testButtonClick}
				/>
				<ToggleButton
					buttonText="Button2"
					click={testApiFetch}
				/>
			</div>
			<div className="button-container second-row-buttons">
				<ToggleButton
					buttonText="Button3"
					click={testApiFetch}
				/>
				<ToggleButton
					buttonText="Button4"
					click={testApiFetch}
				/>
			</div>
		</div>
	);
}

export default mainControlsContainter;

