import { quiz } from "../database/data";
import { calculateScore } from "../utils/util_func";
import { initialStateValue } from "./quiz-context";
import { ACTION_TYPE } from "./quiz-context.type";

export const manageState = (
  state: typeof initialStateValue,
  action: ACTION_TYPE
) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        score: calculateScore(
          state.score,
          action.value.question,
          action.value.selectedOption
        ),
        currentQuesNumber: state.currentQuesNumber + 1,
      };
    case "WRONG_ANSWER":
      return {
        ...state,
        score: state.score - 1,
        currentQuesNumber: state.currentQuesNumber + 1,
      };
    case "RESET":
      return { ...state, score: 0, currentQuesNumber: 1 };
    case "SET_GENRE":
      return {
        ...state,
        category: action.value,
        currentQuiz: quiz.find(({ quizname }) => quizname === action.value),
      };
    case "SET_USERNAME":
      return { ...state, username: action.value };
    default:
      return state;
  }
};
