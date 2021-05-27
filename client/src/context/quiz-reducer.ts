import { calculateScore } from "../utils/util_func";
import { initialStateValue } from "./quiz-context";
import { ACTION_TYPE } from "./quiz-context.type";

export const manageState = (
  state: typeof initialStateValue,
  action: ACTION_TYPE
) => {
  switch (action.type) {
    case "SKIP_QUESTION":
      return {
        ...state,
        currentQuesNumber: state.currentQuesNumber + 1,
      };
    case "SET_QUIZ":
      return {
        ...state,
        quizzes: action.value.quiz,
        categories: action.value.category,
      };
    case "SET_CURRENT_QUIZ":
      return {
        ...state,
        currentQuiz: action.value.quiz,
        category: action.value.category,
      };
    case "IS_OPTION_CLICKED":
      return {
        ...state,
        isOptionClicked: action.payload.value,
      };
    case "SET_SELECTED_OPTION":
      return { ...state, selectedOption: action.payload.value };
    case "OPTION_CLICKED":
      return {
        ...state,
        isOptionClicked: action.payload.value,
        selectedOption: action.payload.option,
      };
    case "SET_OPTION_COLOR":
      return {
        ...state,
        optionsColor: action.payload.value,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        score: calculateScore(
          state.score,
          action.value.question,
          action.value.selectedOption
        ),
        currentQuesNumber: state.currentQuesNumber + 1,
        optionsColor: "",
      };
    case "WRONG_ANSWER":
      return {
        ...state,
        score: state.score - 1,
        currentQuesNumber: state.currentQuesNumber + 1,
      };
    case "RESET":
      return { ...state, score: 0, currentQuesNumber: 1 };
    case "SET_CATEGORY":
      const quiz = state.quizzes!.filter(
        (quiz) => quiz.category === action.value.category
      );
      return {
        ...state,
        category: action.value.category,
        currentQuiz: quiz,
      };
    case "SET_USERNAME":
      return { ...state, username: action.value.userName };
    default:
      return state;
  }
};
