import { createContext, useContext, useState } from "react";

//context
export const PlayerContext = createContext();

//hook
export const usePlayer = () => useContext(PlayerContext);

//provider
export const PlayerProvider = ({ children }) => {
  //estado del context
  const [players, setPlayers] = useState([]);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};
