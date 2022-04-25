import { createContext, useContext, useState } from "react";

//context
export const ShowHideContext = createContext();

//hook
export const useShowHide = () => useContext(ShowHideContext);

//provider
export const ShowHideProvider = ({ children }) => {
  //estado del context
  const [show, setShow] = useState({
    formulario: true,
    votar: false,
    quizModal: false,
    showQuiz: false,
    porcentajeVotos: false,
  });

  return (
    <ShowHideContext.Provider value={{ show, setShow }}>
      {children}
    </ShowHideContext.Provider>
  );
};
