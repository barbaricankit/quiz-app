import { Dispatch } from "react";
import { Option, Quiz } from "../database/data.type";

export type VALUE_TYPE = {
  question: Quiz;

  selectedOption: Option | null;
};
export type ACTION_TYPE =
  | {
      type: "NEXT_QUESTION";
      value: VALUE_TYPE;
    }
  | { type: "WRONG_ANSWER" }
  | { type: "RESET" }
  | { type: "SET_CATEGORY"; value: { category: string } }
  | { type: "SET_USERNAME"; value: { userName: string } }
  | { type: "SKIP_QUESTION" }
  | { type: "SET_QUIZ"; value: { quiz: Quiz[]; category: string[] } }
  | { type: "SET_CURRENT_QUIZ"; value: { quiz: Quiz[]; category: string } };

export type QuizState = {
  score: number;
  category?: string;
  currentQuesNumber: number;
  currentQuiz?: Quiz[];
  username: string;
  quizzes?: Quiz[];
  categories?: string[];
};
export type QuizContType = {
  quizstate: QuizState;
  quizdispatch: Dispatch<ACTION_TYPE>;
};
