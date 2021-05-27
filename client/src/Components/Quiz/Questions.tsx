import { Text } from "@chakra-ui/layout";
import { useQuiz } from "../../context/quiz-context";
import { Quiz } from "../../database/data.type";

type Questions_Prop = {
  currentQuestion: Quiz;
};
const Questions = ({ currentQuestion }: Questions_Prop) => {
  const {
    quizstate: { currentQuesNumber },
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
