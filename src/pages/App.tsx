import '../assets/styles/App.css';
import { MainControlsContainer, MainHeaderContainer, GlobeContainer } from '../components/ui/container/ContainerIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';
import useWindowDimensions from '../hooks/WindowDimensionsHook.tsx';


function App() {

  const { width, height } = useWindowDimensions();

  return (
    <>
    <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
    <MainControlsContainer/>
    <GlobeContainer width={width} height={height}/>
    </>
  )
}

export default App
