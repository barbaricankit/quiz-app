import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { useQuiz } from "../../context/quiz-context";
import { Option_Type, Quiz_Type } from "../../database/data.type";
type Options_Prop_Type = {
  currentQuestion: Quiz_Type;
};
const QuizOptions = ({ currentQuestion }: Options_Prop_Type) => {
  const {
    quizState: {
      currentQuesNumber,
      isOptionClicked,
      selectedOption,
      optionsColor,
    },
    quizDispatch,
  } = useQuiz();
  const optionsbg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  const showCorrectAnswer = (option: Option_Type) => {
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
  const handleNextQuestion = (option: Option_Type) => {
    quizDispatch({
      type: "OPTION_CLICKED",
      payload: { value: true, option },
    });
    const id = setTimeout(() => {
      quizDispatch({
        type: "NEXT_QUESTION",
        payload: {
          question: currentQuestion,
          selectedOption: option,
        },
      });
    }, 2000);
    return () => clearTimeout(id);
  };
  return (
    <>
      <Flex
        direction={["column", "row"]}
        justifyContent='space-around'
        wrap='wrap'
        mt={4}
        alignItems='center'>
        {currentQuestion?.options.map((option: Option_Type, index) => (
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
