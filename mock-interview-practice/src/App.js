import './App.css';
import { AppendCounter } from './components/AppendCounter';
import { Counter } from './components/Counter';
import { DigitalClock } from './components/DigitalClock';

function App() {
  return (
    <div className="App">
      <Counter />
      <AppendCounter />
      <DigitalClock />
    </div>
  );
}

export default App;
