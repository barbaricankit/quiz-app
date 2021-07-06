import { Button,useColorModeValue,Flex,useQuiz } from ".";
import { Option_Type, Quiz_Type } from "../../database/servercalls.type";

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
    "#A5C882",
    "#0B3142"
  );
   const showCorrectAnswer = (option: Option_Type) => {
    if (selectedOption) {
      if (selectedOption.optionvalue === option.optionvalue) {
        if (selectedOption.isCorrect) {
          return "green";
        } else {
          return "tomato";
        }
      } else if (option.isCorrect) {
        return "green";
      }
    } else if (option.isCorrect) {
      return "green";
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
            _after={{backgroundColor:"none"}}
            _before={{backgroundColor:"none"}}
            _hover={{backgroundColor:"none"}}
            _active={{backgroundColor:"none"}}
            disabled={isOptionClicked}
            mb={2}
            key={currentQuesNumber + option.optionvalue}
            fontWeight='bold'
            backgroundColor={
              (isOptionClicked ? showCorrectAnswer(option) : optionsbg) ||
              (option.isCorrect ? optionsColor : optionsbg)
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
