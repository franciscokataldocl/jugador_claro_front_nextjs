import { createContext, useContext, useState } from "react";

//context
export const QuizContext = createContext();

//hook
export const useQuiz = () => useContext(QuizContext);

//provider
export const QuizProvider = ({ children }) => {
  //estado del context
    const [quiz, setQuiz] = useState({});

  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
