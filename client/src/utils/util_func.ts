import { Option_Type, Quiz_Type } from "../database/servercalls.type";

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

export const getRandomRoomId = (length: number) => {
  const randomChars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result: string = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result.toUpperCase();
};
