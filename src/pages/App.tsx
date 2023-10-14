import '../assets/styles/App.css';
import { MainContentContainer } from '../components/ui/container/ContainerIndex.tsx';
import { MainHeader } from '../components/ui/headers/HeaderIndex.tsx';
import * as globalConstants from '../data/GlobalConstants.tsx';


function App() {
  return (
    <>
    <MainHeader headerText={globalConstants.APP_NAME}/>
    <MainContentContainer />
    </>
  )
}

export default App
