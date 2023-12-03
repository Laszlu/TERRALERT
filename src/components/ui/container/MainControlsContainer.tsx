import {ToggleGroup} from "../buttons/ButtonsIndex";
import {ControlsHeader} from "../headers/HeaderIndex";
import {EventCategory} from "../../../data/Model";
import "../../../assets/styles/container.css";
import React from "react";

interface IMainControlsContainerProps {
	category: EventCategory;
	setCategory: React.Dispatch<React.SetStateAction<EventCategory>>;
}

function mainControlsContainer(props: IMainControlsContainerProps) {

	return (
		<div className={"main-controls-container"}>
			<div className={"controls-background"}>
				<ControlsHeader headerText="Events" />
				<div className={"button-container"}>
					<ToggleGroup
						imgPath={"src/assets/images/hurricane.png"}
						imgAlt={"Hurricane Icon"}
						setCategory={props.setCategory}
						category={props.category}
					/>
				</div>
			</div>
		</div>
	);
}

export default mainControlsContainer;

