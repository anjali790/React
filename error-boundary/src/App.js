import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary />
    </div>
  );
}

export default App;
