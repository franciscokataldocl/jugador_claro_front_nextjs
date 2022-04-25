import { createContext, useContext, useState } from "react";

//context
export const TimerContext = createContext();

//hook
export const useTimer = () => useContext(TimerContext);

//provider
export const TimerProvider = ({ children }) => {
  //estado del context
  const [timer, setTimer] = useState({
    inicioPartido: "0",
    finPartido: "0",
  });

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  );


};
