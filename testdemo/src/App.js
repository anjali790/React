import './App.css';
import 'antd/dist/antd.css'
import { Greet } from './components/Greet/Greet';
import { Counter } from './components/Counter/Counter';


function App() {
  return (
    <>
      <Greet />
      <Counter />
    </>
  );
}

export default App;
