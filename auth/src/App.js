import './App.css';
import { useSelector } from 'react-redux';

import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';

function App() {

  const loggedInUser = useSelector((state) => {
    return state.loggedInUser
  })

  return (
    <>
      {loggedInUser ?
        <Dashboard /> :
        <> <Home />
          <Login />
        </>}
    </>
  );
}
export default App;