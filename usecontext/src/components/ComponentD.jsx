import React,{useContext} from 'react';
import { CountStateContext } from "../contexts/CountContext";

export function ComponentD() {
  const { handleClick } = useContext(CountStateContext);

    return (
        <div className='componentD'>
            <p>Component D</p>
            <button onClick={handleClick}>set count</button>
        </div>
    )
}
