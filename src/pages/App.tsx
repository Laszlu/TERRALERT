import '../assets/styles/App.css';
import { MainContentContainer, MainHeaderContainer } from '../components/ui/container/ContainerIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';
import useWindowDimensions from '../hooks/WindowDimensionsHook.tsx';


function App() {

  const { width, height } = useWindowDimensions();

  return (
    <>
    <MainHeaderContainer headerText={globalConstants.APP_NAME}/>
    <MainContentContainer width={width} height={height}/>
    </>
  )
}

export default App
