import React, { createContext, useContext, useReducer } from "react";
import { QuizContType, QuizState } from "./quiz-context.type";
import { manageState } from "./quiz-reducer";
export const initialStateValue: QuizState = {
  score: 0,
  currentQuesNumber: 1,
  username: "",
};
export const QuizContext = createContext({});

export const QuizProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(manageState, initialStateValue);
  return (
    <QuizContext.Provider value={{ quizstate: state, quizdispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContType =>
  useContext(QuizContext) as QuizContType;
