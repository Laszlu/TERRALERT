import '../assets/styles/App.css';
import { MainControlsContainer, MainHeaderContainer, GlobeContainer, EventViewer } from '../components/ui/container/ContainerIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';
import useWindowDimensions from '../hooks/WindowDimensionsHook.tsx';
import { NaturalEvent } from '../data/Model.tsx';
import useFetchHook from 'react-fetch-hook';

const N = 30;

const testData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360
}));

function TestClick() {
  console.log("test");
}

function App() {

  const { width, height } = useWindowDimensions();

  let testEvent = (useFetchHook<NaturalEvent>(
      "https://eonet.gsfc.nasa.gov/api/v3/events/EONET_6451"
  ).data as NaturalEvent);

  return <>
    <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
    <MainControlsContainer/>
    <GlobeContainer width={width} height={height} imgPath={"src/assets/images/hurricane.png"} data={testData} click={() => TestClick()}/>
    <EventViewer event={testEvent}/>
  </>
}

export default App
