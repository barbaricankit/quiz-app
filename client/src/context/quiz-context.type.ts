import { Dispatch } from "react";
import { Option, Question, Quiz } from "../database/data.type";

export type VALUE_TYPE = {
  question: Question;
  selectedOption: Option | null;
};
export type ACTION_TYPE =
  | {
      type: "NEXT_QUESTION";
      value: VALUE_TYPE;
    }
  | { type: "WRONG_ANSWER" }
  | { type: "RESET" }
  | { type: "SET_GENRE"; value: string }
  | { type: "SET_USERNAME"; value: string };
export type QuizContextType = {
  genre?: string;
  score: number;
  currentQues: number;
  currentQuiz?: Quiz | { quizName: string; questions: Array<any> };
  dispatch: Dispatch<ACTION_TYPE>;
  username: string;
};
export type QuizState = {
  score: number;
  category?: string;
  currentQuesNumber: number;
  currentQuiz?: Quiz;
  username: string;
};
export type QuizContType = {
  quizstate: QuizState;
  quizdispatch: Dispatch<ACTION_TYPE>;
};
