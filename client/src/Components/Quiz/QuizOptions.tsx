import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { useQuiz } from "../../context/quiz-context";
import { Option, Quiz } from "../../database/data.type";
type Options_Prop = {
  currentQuestion: Quiz;
};
const QuizOptions = ({ currentQuestion }: Options_Prop) => {
  const {
    quizstate: {
      currentQuesNumber,
      isOptionClicked,
      selectedOption,
      optionsColor,
    },
    quizdispatch,
  } = useQuiz();
  const optionsbg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  const showCorrectAnswer = (option: Option) => {
    if (selectedOption) {
      if (selectedOption.optionvalue === option.optionvalue) {
        if (selectedOption.isCorrect) {
          return "green.500";
        } else {
          return "tomato";
        }
      } else if (option.isCorrect) {
        return "green.500";
      }
    } else if (option.isCorrect) {
      return "green.500";
    }
  };
  const handleNextQuestion = (option: Option) => {
    quizdispatch({
      type: "OPTION_CLICKED",
      payload: { value: true, option },
    });
    setTimeout(() => {
      quizdispatch({
        type: "NEXT_QUESTION",
        value: {
          question: currentQuestion,
          selectedOption: option,
        },
      });
    }, 2000);
  };
  return (
    <>
      <Flex
        direction={["column", "row"]}
        justifyContent='space-around'
        wrap='wrap'
        mt={4}
        alignItems='center'>
        {currentQuestion?.options.map((option: Option, index) => (
          <Button
            w='9rem'
            p={3}
            whiteSpace='normal'
            bgGradient={optionsbg}
            mb={2}
            key={currentQuesNumber + option.optionvalue}
            fontWeight='bold'
            color={
              (isOptionClicked ? showCorrectAnswer(option) : "") ||
              (option.isCorrect ? optionsColor : "")
            }
            variant='solid'
            onClick={() => {
              handleNextQuestion(option);
            }}>
            {option.optionvalue}
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default QuizOptions;
