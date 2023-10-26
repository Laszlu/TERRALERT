import { ToggleButton } from "../buttons/ButtonsIndex";
import '../../../assets/styles/container.css';


function mainControlsContainter() {
  return (
    <div className="main-controls-container">
      <div className="button-container" style={{left: 20}}>
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
      </div>
      <div className="button-container" style={{left: 20, top: 180}}>
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
    </div>
  );
}

export default mainControlsContainter;
