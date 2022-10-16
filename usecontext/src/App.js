import './App.css';
import React, { useState } from 'react';
import { ComponentA } from './components/ComponentA';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      {/* <button onClick={handleClick}>count</button> */}
      <ComponentA count={count} handleClick={handleClick} />
    </>
  );
}

export default App;
