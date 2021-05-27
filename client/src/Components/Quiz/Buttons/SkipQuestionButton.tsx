import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VStack } from "@chakra-ui/layout";
import { useQuiz } from "../../../context/quiz-context";

const SkipQuestionButton = () => {
  const {
    quizstate: { currentQuesNumber },
    quizdispatch,
  } = useQuiz();
  const skipButtonBg = useColorModeValue(
    "linear-gradient(to right, #1c92d2, #f2fcfe)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  const skipQuestion = () => {
    quizdispatch({
      type: "SET_OPTION_COLOR",
      payload: { value: "green.500" },
    });
    setTimeout(() => {
      quizdispatch({
        type: "SKIP_QUESTION",
      });
    }, 2000);
  };
  return (
    <VStack>
      <Button
        key={currentQuesNumber}
        bgGradient={skipButtonBg}
        onClick={() => skipQuestion()}
        m={5}
        alignSelf='flex-end'>
        Skip Question
      </Button>
    </VStack>
  );
};

export default SkipQuestionButton;
