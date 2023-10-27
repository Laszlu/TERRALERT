import { ToggleButton } from "../buttons/ButtonsIndex";
import '../../../assets/styles/container.css';

type ContainerProps = {
  height: number;
  width: number;
}

function mainControlsContainter(props: ContainerProps) {
let distanceFromTop = props.height;
let distanceFromLeft = props.width;

const firstButtonContainerStyle = {
  left: `${distanceFromLeft/100}px`
}

const secondButtonContainerStyle = {
  left: `${distanceFromLeft/100}px`,
  top: `${distanceFromTop/5.3}px`
}

console.log(secondButtonContainerStyle);


  return (
    <div className="main-controls-container">
      <div className="button-container" style={firstButtonContainerStyle}>
        <ToggleButton buttonText="Button1" />
        <ToggleButton buttonText="Button2" />
      </div>
      <div className="button-container" style={secondButtonContainerStyle}>
        <ToggleButton buttonText="Button3" />
        <ToggleButton buttonText="Button4" />
      </div>
    </div>
  );
}

export default mainControlsContainter;
