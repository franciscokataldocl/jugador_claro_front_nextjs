import { createContext, useContext, useState } from "react";

//context
export const UserContext = createContext();

//hook
export const useUser = () => useContext(UserContext);

//provider
export const UserProvider = ({ children }) => {
  //estado del context
  const [user, setUser] = useState({
    user: {
      id: null,
      rut: null,
      email: null,
      telefono: null,
      nombre: null,
      voto: null,
      jugado: null,
      correcto:null
    },
    player: {
      id: null,
      nombre: null,
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
