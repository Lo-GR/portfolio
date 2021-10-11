import React, { useState } from 'react';

const Context = React.createContext();

function ContextProvider({ children }){
  const [enter, setEnter] = useState(false);
  return (
    <Context.Provider value={{
      enter: enter,
      setEnter: setEnter
    }}>
      { children }
    </Context.Provider>
  )
}

export { ContextProvider, Context}