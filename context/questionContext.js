import { createContext, useContext, useState } from "react";

//context
export const QuestionsContext = createContext();

//hook
export const useQuestions = () => useContext(QuestionsContext);

//provider
export const QuestionsProvider = ({ children }) => {
  //estado del context
  const [Questions, setQuestions] = useState([]);

  return (
    <QuestionsContext.Provider value={{ Questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
