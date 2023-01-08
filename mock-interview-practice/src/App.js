import './App.css';
import { ChangeFontSize } from './components/ChangeFontSize';
// import React, { Suspense, lazy } from "react";
// import { AppendCounter } from './components/AppendCounter';
// import { Counter } from './components/Counter';
// import { DigitalClock } from './components/DigitalClock';
// import { WindowResize } from './components/WindowResize';
// import { About } from './components/LazyLoading/About';
// import { Home } from './components/LazyLoading/Home';

// const Home = lazy(() => import('./Home'));
// const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <AppendCounter /> */}
      {/* <DigitalClock />  */}
      {/* <Suspense fallback={<div>please wait...</div>}>
        {/* <Home /> */}
      {/* <About />
      </Suspense> */}
      {/* <WindowResize /> */}
      <ChangeFontSize/>
    </div>
  );
}

export default App;
