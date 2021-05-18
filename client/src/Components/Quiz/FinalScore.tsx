import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { useQuiz } from "../../context/quiz-context";

const FinalScore = () => {
  const {
    quizstate: { score, category },
    quizdispatch,
  } = useQuiz();
  const history = useHistory();
  return (
    <>
      <div>Your final score is {score}</div>
      <Flex alignContent='space-between' direction='column'>
        <Button
          mb={2}
          onClick={() => {
            quizdispatch({ type: "RESET" });
            history.push(`/${category}/rules`);
          }}>
          Play Again
        </Button>
        <Button
          onClick={() => {
            quizdispatch({ type: "RESET" });
            history.push("/categories");
          }}>
          Another Category
        </Button>
      </Flex>
    </>
  );
};

export default FinalScore;
