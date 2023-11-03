import { ToggleButton } from "../buttons/ButtonsIndex";
import { ControlsHeader } from "../headers/HeaderIndex";
import { useFetchHook } from '../../../utilities/UtilitiesIndex';
import '../../../assets/styles/container.css';

type ContainerProps = {
  height: number;
  width: number;
}

function testButtonClick(){
  console.log("button clicked");
}

function mainControlsContainter(props: ContainerProps) {

  const stormPilar = useFetchHook("https://eonet.gsfc.nasa.gov/api/v2.1/events/EONET_6447");

  //const {data} = useFetchHook("https://jsonplaceholder.typicode.com/users");

  function testApiFetch(){
    console.log(stormPilar);
  }

  return (
    <div className="main-controls-container">
      <ControlsHeader headerText="Controls"/>
      <div className="button-container first-row-buttons">
        <ToggleButton buttonText="Button1" click={testButtonClick}/>
        <ToggleButton buttonText="Button2" click={testApiFetch}/>
      </div>
      <div className="button-container second-row-buttons">
        <ToggleButton buttonText="Button3" click={testApiFetch}/>
        <ToggleButton buttonText="Button4" click={testApiFetch}/>
      </div>
    </div>
  );
}

export default mainControlsContainter;
