import './App.css';
import { Timer } from './components/Timer';
import { AppendCounter } from './components/AppendCounter';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <AppendCounter />
      <Timer />
    </div>
  );
}

export default App;
