import { createContext, useContext, useState } from "react";

//context
export const EstadoPartidoContext = createContext();

//hook
export const useEstadoPartido = () => useContext(EstadoPartidoContext);

//provider
export const EstadoPartidoProvider = ({ children }) => {
  //estado del context
  const [estadoPartido, setEstadoPartido] = useState({estadoPartido: false});

  return (
    <EstadoPartidoContext.Provider value={{ estadoPartido, setEstadoPartido }}>
      {children}
    </EstadoPartidoContext.Provider>
  );
};
