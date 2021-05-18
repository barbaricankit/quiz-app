import { Option, Question } from "../database/data.type";

export const calculateScore = (
  currentScore: number,
  question: Question,
  selectedOption: Option | null
) => {
  if (selectedOption) {
    if (isCorrectAnswer(question, selectedOption.optionvalue)) {
      return currentScore + question.points;
    }
  }
  return currentScore;
};
export const isCorrectAnswer = (question: Question, selectedOption: string) => {
  const option = question.options.find(
    (option) => option.optionvalue === selectedOption
  );
  return option?.isCorrect;
};
