import './App.css';
// import { HooksCounter } from './components/HooksCounter';
import { Counter } from './components/Counter';
import { CounterNew } from './components/CounterNew';
// import { StateWithObj } from './components/StateWithObj';
import { StateWithArrays } from './components/StateWithArrays';


function App() {
  return (
    <>
    {/* <HooksCounter/> */}
    <Counter/>
    {/* <StateWithObj/> */}
    <StateWithArrays/>
    <CounterNew/>
    </>
  );
}

export default App;
