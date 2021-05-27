import { Dispatch } from "react";
import { Option_Type, Quiz_Type } from "../database/data.type";

export type Quiz_Provider_Prop_Type = {
  children: React.ReactNode;
};
export type Value_Type = {
  question: Quiz_Type;
  selectedOption: Option_Type | null;
};
export type Action_Type =
  | {
      type: "NEXT_QUESTION";
      payload: Value_Type;
    }
  | { type: "WRONG_ANSWER" }
  | { type: "RESET" }
  | { type: "SET_CATEGORY"; payload: { category: string } }
  | { type: "SET_USERNAME"; payload: { userName: string } }
  | { type: "SKIP_QUESTION" }
  | { type: "SET_QUIZ"; payload: { quiz: Quiz_Type[]; category: string[] } }
  | {
      type: "SET_CURRENT_QUIZ";
      payload: { quiz: Quiz_Type[]; category: string };
    }
  | {
      type: "OPTION_CLICKED";
      payload: { value: boolean; option: Option_Type | null };
    }
  | { type: "SET_OPTION_COLOR"; payload: { value: string } };

export type Quiz_State_Type = {
  score: number;
  category?: string;
  currentQuesNumber: number;
  currentQuiz?: Quiz_Type[];
  username: string;
  quizzes?: Quiz_Type[];
  categories?: string[];
  selectedOption: Option_Type | null;
  isOptionClicked: boolean;
  optionsColor: string;
};
export type Quiz_Context_Type = {
  quizState: Quiz_State_Type;
  quizDispatch: Dispatch<Action_Type>;
};
