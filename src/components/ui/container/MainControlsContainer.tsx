import { ToggleButton } from "../buttons/ButtonsIndex";
import { ControlsHeader } from "../headers/HeaderIndex";
import '../../../assets/styles/container.css';

type ContainerProps = {
  height: number;
  width: number;
}

function mainControlsContainter(props: ContainerProps) {
  return (
    <div className="main-controls-container">
      <ControlsHeader headerText="Controls"/>
      <div className="button-container first-row-buttons">
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
      </div>
      <div className="button-container second-row-buttons">
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
    </div>
  );
}

export default mainControlsContainter;
