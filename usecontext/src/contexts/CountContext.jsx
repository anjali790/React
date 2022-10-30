import React, { createContext, useState } from "react";

const CountStateContext = createContext();

function CountStateProvider({children}) {
  // console.log("Child", children);
  const [count, setCount] = useState(true);
  const increment = () => setCount(!count);
  const decrement = () => setCount(count - 1);

  return (
    <CountStateContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountStateContext.Provider>
  );
}

export { CountStateContext, CountStateProvider };