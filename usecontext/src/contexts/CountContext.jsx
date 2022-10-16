import React, { createContext, useState } from "react";

const CountStateContext = createContext();

function CountStateProvider({ children }) {
  console.log("Child", children);
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <CountStateContext.Provider value={{ count, handleClick }}>
      {children}
    </CountStateContext.Provider>
  );
}

export { CountStateContext, CountStateProvider };