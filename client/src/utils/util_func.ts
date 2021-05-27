import { Option_Type, Quiz_Type } from "../database/data.type";

export const calculateScore = (
  currentScore: number,
  question: Quiz_Type,
  selectedOption: Option_Type | null
) => {
  if (selectedOption) {
    if (isCorrectAnswer(question, selectedOption.optionvalue)) {
      const point = question.bonuspoints
        ? question.bonuspoints
        : question.points!;
      return currentScore + point;
    } else {
      const point = question.negativepoints ? question.negativepoints : 0;
      return currentScore + point;
    }
  }
  return currentScore;
};
export const isCorrectAnswer = (
  question: Quiz_Type,
  selectedOption: string
) => {
  const option = question.options.find(
    (option) => option.optionvalue === selectedOption
  );
  return option?.isCorrect;
};
