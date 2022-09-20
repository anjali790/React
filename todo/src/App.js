import './App.css';
// import { WelcomeFn } from './components/WelcomeFn';
// import { WelcomeClass } from './components/WelcomeClass';
// import { Toggle } from './components/Toggle';
// import './components/Toggle.css';
// import {Count} from './components/Count';
import {Login} from './components/Login';



export function App() {
  return (
    <div className='container'>
      {/* <div className='innerDiv'>
        <h1 className='heading'>Welcome To The React World</h1>
        <img className='image' src='https://glosmartlearning.com/wp-content/uploads/2020/10/React-js.jpg'></img>
      </div> */}

      {/* <WelcomeFn /> */}
      {/* <WelcomeClass /> */}
      {/* <Toggle /> */}
      {/* <Count /> */}
      <Login/>
    </div>
  );
}





// export function App2(){
//   return (<h2>app 2 file</h2>);
// }
//if you are writing one js file then simply write only one fn don't use mutliple fn.

//always prefer name exports.
// export default App;
