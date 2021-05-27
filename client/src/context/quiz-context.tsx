import { createContext, useContext, useEffect, useReducer } from "react";
import { getQuizData } from "../database/data";
import { QuizContType, QuizState } from "./quiz-context.type";
import { manageState } from "./quiz-reducer";
export const initialStateValue: QuizState = {
  score: 0,
  currentQuesNumber: 1,
  username: "",
  selectedOption: null,
  isOptionClicked: false,
  optionsColor: "",
};
export const QuizContext = createContext({});

export const QuizProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(manageState, initialStateValue);

  useEffect(() => {
    (async () => {
      const data = await getQuizData();
      if ("quiz" in data) {
        dispatch({
          type: "SET_QUIZ",
          value: { quiz: data.quiz, category: data.category },
        });
      }
    })();
    const localData = localStorage?.getItem("quizUser");
    const { username } = localData ? JSON.parse(localData) : "";
    dispatch({ type: "SET_USERNAME", value: { userName: username } });
  }, []);
  return (
    <QuizContext.Provider value={{ quizstate: state, quizdispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContType =>
  useContext(QuizContext) as QuizContType;
