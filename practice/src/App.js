import React, { useState } from 'react';
import './App.css';
// import Axios from './components/Axios';
import { ComponentA } from './components/ComponentA';
// import { ComponentB } from './components/ComponentB';

export const NameContext = React.createContext();
export const BranchContext = React.createContext();
export const PlaceContext = React.createContext();

function App() {
  const [name, setName] = useState('Anjali');
  const [branch, setBranch] = useState('EEE');
  const [place, setPlace] = useState('Delhi');
  return (
    <>
      {/* <Axios/> */}
      <NameContext.Provider value={name}>
        <BranchContext.Provider value={branch}>
          <PlaceContext.Provider value={place}>
            <ComponentA />
          </PlaceContext.Provider>
        </BranchContext.Provider>
      </NameContext.Provider>

    </>
  );
}

export default App;
