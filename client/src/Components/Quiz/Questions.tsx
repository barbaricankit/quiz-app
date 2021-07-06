import { Text,useQuiz } from ".";
import { Quiz_Type } from "../../database/servercalls.type";

type Questions_Prop_Type = {
  currentQuestion: Quiz_Type;
};
const Questions = ({ currentQuestion }: Questions_Prop_Type) => {
  const {
    quizState: { currentQuesNumber },
  } = useQuiz();
  return (
    <>
      <Text fontWeight='bold' m={5} color='gray.500'>
        Question {currentQuesNumber}{" "}
        {currentQuestion.bonuspoints && ": Bonus Question"}
      </Text>
      <Text fontStyle='italic' fontWeight='semibold' m={5}>
        {currentQuestion?.question}
      </Text>
    </>
  );
};

export default Questions;
