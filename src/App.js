import './App.css';
import Startpage from './components/Startpage';
import Gameplay from './components/Gameplay';
import { useState } from 'react';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
    {isGameStarted ? <Gameplay/> : <Startpage toggle = {toggleGamePlay}/>}
    </>
  );
}

export default App;
