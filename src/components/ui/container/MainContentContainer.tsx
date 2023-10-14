import { Globe } from "../content/ContentIndex";
import { ToggleButton } from "../buttons/ButtonsIndex";

function mainContentContainer() {
  return (
    <div className="main-container">
      <div >
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
      </div>
      <Globe />
      <div>
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
    </div>
  );
}

export default mainContentContainer;
