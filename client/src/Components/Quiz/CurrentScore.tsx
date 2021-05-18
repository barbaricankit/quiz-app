import { Text, VStack } from "@chakra-ui/layout";
import { useQuiz } from "../../context/quiz-context";

const CurrentScore = () => {
  const {
    quizstate: { score },
  } = useQuiz();
  return (
    <>
      <VStack ml={4}>
        <Text>Score</Text>
        <Text>{score}</Text>
      </VStack>
    </>
  );
};

export default CurrentScore;
