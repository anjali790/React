import React, { createContext, useState } from "react";

const CountStateContext = createContext();

function CountStateProvider({ children }) {
  console.log(children);
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CountStateContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountStateContext.Provider>
  );
}

export { CountStateContext, CountStateProvider };