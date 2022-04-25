import { createContext, useContext, useState } from "react";


//context
export const CounterContext = createContext();

//hook
export const useCounter = () => useContext(CounterContext);

//provider
export const CounterProvider = ({ children }) => {

  //estado del context
    const [counter, setCounter] = useState({
        inicio: false,
        termino: false,
        segundo: 0,
        minuto: 0,
        hora: 0,
        dia:0
    });

  return (
    <CounterContext.Provider
      value={{ counter, setCounter}}
    >
      {children}
    </CounterContext.Provider>
  );
};
