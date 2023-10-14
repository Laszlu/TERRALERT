import '../assets/styles/App.css';
import '../assets/styles/header.css'
import TestGlobe from '../components/ui/globe.tsx';
import ToggleButton from "../components/ui/Toggle.tsx";
import MainHeader from '../components/ui/MainHeader.tsx';

function App() {
  let text = "button";

  return (
    <>
    <MainHeader headerText="TERRALERT"/>
    <div className="main-container">
      <div>

      </div>
      <TestGlobe />
      <ToggleButton buttonText={text}/>
    </div>
    </>
  )
}

export default App
