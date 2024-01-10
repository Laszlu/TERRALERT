import {ToggleGroup} from "../buttons/ButtonsIndex";
import {ControlsHeader} from "../headers/HeaderIndex";
import {InfoContainer} from "../container/ContainerIndex.tsx";
import {EventCategory} from "../../../data/Model";
import "../../../assets/styles/container.css";
import React from "react";

interface IMainControlsContainerProps {
	category: EventCategory;
	setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
	showEventViewer: boolean;
	setShowEventViewer: React.Dispatch<React.SetStateAction<boolean>>;
	showAboutElement: boolean;
	setShowAboutElement: React.Dispatch<React.SetStateAction<boolean>>;
	showHelpElement: boolean;
	setShowHelpElement: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainControlsContainer(props: IMainControlsContainerProps) {

	return (
		<div className={"main-controls-container"}>
			<div className={"controls-background"}>
				<ControlsHeader headerText="Event Categories" />
				<div className={"button-container"}>
					<ToggleGroup
						setCategory={props.setCategory}
						category={props.category}
						setShowEventViewer={props.setShowEventViewer}
						showEventViewer={props.showEventViewer}
					/>
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

