import './App.css';
import { ClassComponent } from './components/ClassComponent';
import { Toggle } from './components/Toggle';

function App() {
  return (
    <div className="App">
      <ClassComponent name={'Anjali'} />
      <ClassComponent name={'Shubro'} />
      <ClassComponent name={'Aarav'} />
      <Toggle />
    </div>
  );
}

export default App;