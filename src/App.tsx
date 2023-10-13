import 'App.css';
import TestGlobe from 'globe.tsx';
import ToggleButton from "Toggle.tsx";

function App() {
  let text = "button";

  return (
    <>
      <TestGlobe />
      <ToggleButton buttonText={text}/>
    </>
  )
}

export default App
