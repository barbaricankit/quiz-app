import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getQuizData } from "../database/data";
import {
  Quiz_Context_Type,
  Quiz_State_Type,
  Quiz_Provider_Prop_Type,
} from "./quiz-context.type";
import { manageState } from "./quiz-reducer";
export const initialStateValue: Quiz_State_Type = {
  score: 0,
  currentQuesNumber: 1,
  username: "",
  selectedOption: null,
  isOptionClicked: false,
  optionsColor: "",
};
export const QuizContext = createContext({});

export const QuizProvider = ({ children }: Quiz_Provider_Prop_Type) => {
  const [state, dispatch] = useReducer(manageState, initialStateValue);

  useEffect(() => {
    (async () => {
      const data = await getQuizData();
      if ("quiz" in data) {
        dispatch({
          type: "SET_QUIZ",
          payload: { quiz: data.quiz, category: data.category },
        });
      }
    })();
    const localData = localStorage?.getItem("quizUser");
    const { username } = localData ? JSON.parse(localData) : "";
    dispatch({ type: "SET_USERNAME", payload: { userName: username } });
  }, []);
  return (
    <QuizContext.Provider value={{ quizState: state, quizDispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): Quiz_Context_Type =>
  useContext(QuizContext) as Quiz_Context_Type;
