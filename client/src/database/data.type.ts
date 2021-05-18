export type Quiz = {
  quizname: string;
  questions: Question[];
};

export type Question = {
  question: string;
  points: number;
  bonuspoints?: number;
  negativepoints?: number;
  options: Option[];
};

export type Option = {
  optionvalue: string;
  isCorrect: boolean;
};
