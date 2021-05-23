import { Option, Quiz } from "../database/data.type";

export const calculateScore = (
  currentScore: number,
  question: Quiz,
  selectedOption: Option | null
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
export const isCorrectAnswer = (question: Quiz, selectedOption: string) => {
  const option = question.options.find(
    (option) => option.optionvalue === selectedOption
  );
  return option?.isCorrect;
};
