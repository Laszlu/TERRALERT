import { Globe } from "../content/ContentIndex";
import { ToggleButton } from "../buttons/ButtonsIndex";
import '../../../assets/styles/container.css';

type MainContainerProps = {
  width: number;
  height: number;
}

function mainContentContainer(props: MainContainerProps) {
  return (
    <div className="main-container">
      <div className="button-container">
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
      <Globe width={props.width} height={props.height}/>
      
    </div>
  );
}

export default mainContentContainer;
