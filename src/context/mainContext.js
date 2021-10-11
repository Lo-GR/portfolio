import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({ children }){
  const [enter, setEnter] = useState(false);
  return (
    <Context.Provider value={{
      enter,
      setEnter
    }}>
      { children }
    </Context.Provider>
  )
}

export { ContextProvider, Context}