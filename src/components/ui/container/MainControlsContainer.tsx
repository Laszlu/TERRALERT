import {CategoryRadioGroup} from "../buttons/ButtonsIndex";
import {ControlsHeader} from "../headers/HeaderIndex";
import {InfoContainer} from "../container/ContainerIndex.tsx";
import {EventCategory} from "../../../data/Model";
import "../../../assets/styles/container.css";
import {Checkbox, FormControlLabel} from "@mui/material";

interface IMainControlsContainerProps {
	category: EventCategory;
	setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
	showEventViewer: boolean;
	setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
	showAboutElement: boolean;
	setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
	showHelpElement: boolean;
	setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
	useSampleData : boolean;
	setUseSampleData: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainControlsContainer(props: IMainControlsContainerProps) {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.setUseSampleData(event.target.checked);
	}

	return (
		<div className={"main-controls-container"}>
			<div className={"controls-background"}>
				<ControlsHeader headerText="Events" />
				<div className={"button-container"}>
					<CategoryRadioGroup
						setCategory={props.setCategory}
						category={props.category}
						setShowEventViewer={props.setShowEventViewer}
						showEventViewer={props.showEventViewer}
					/>
				</div>
				<div className={"example-data-check-container"}>
					<FormControlLabel control={
										<Checkbox
											checked={props.useSampleData}
											onChange={handleChange}
											inputProps={{ 'aria-label': 'controlled' }}/>}
									  label={"Use Sample Data"}
									  className={"example-data-checkbox"}/>
				</div>
				<InfoContainer
					showAboutElement={props.showAboutElement}
					setShowAboutElement={props.setShowAboutElement}
					showHelpElement={props.showHelpElement}
					setShowHelpElement={props.setShowHelpElement}/>
			</div>
		</div>
	);
}

export default MainControlsContainer;

