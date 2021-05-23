export type Quiz = {
  category: string;
  points?: number;
  bonuspoints?: number;
  negativepoints?: number;
  question: string;
  options: Option[];
};
export type Network_Data_Type = {
  success?: boolean;
  categories: { category: string[] };
  quiz: Quiz[];
};
export type Option = {
  optionvalue: string;
  isCorrect: boolean;
};
export type GetQuizData_Type = {
  category: string[];
  quiz: Quiz[];
};
export type Server_Error_Type = {
  errorCode: number;
  message: string;
};
