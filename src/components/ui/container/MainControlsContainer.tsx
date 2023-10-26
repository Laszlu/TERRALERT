import { ToggleButton } from "../buttons/ButtonsIndex";
import '../../../assets/styles/container.css';


function mainControlsContainter() {
  return (
    <div className="main-controls-container">
      <div className="button-container">
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
    </div>
  );
}

export default mainControlsContainter;
