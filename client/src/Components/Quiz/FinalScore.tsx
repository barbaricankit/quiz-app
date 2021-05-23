import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { useQuiz } from "../../context/quiz-context";

const FinalScore = () => {
  const {
    quizstate: { score, category },
    quizdispatch,
  } = useQuiz();
  const history = useHistory();
  const bg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  return (
    <>
      <Text fontSize='5xl' fontStyle='italic' fontWeight='bold'>
        You scored : {score} out of 15
      </Text>
      <Flex
        m='auto'
        w={["50%", "70%", "50%"]}
        alignContent='space-between'
        direction={["column", "row"]}
        justifyContent='space-evenly'>
        <Button
          bgGradient={bg}
          mb={2}
          onClick={() => {
            quizdispatch({ type: "RESET" });
            history.push(`/${category}/rules`);
          }}>
          Play Again
        </Button>
        <Button
          bgGradient={bg}
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
