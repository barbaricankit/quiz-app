import { Button } from "@chakra-ui/button";
import { Box, Flex, Grid, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuiz } from "../../context/quiz-context";
import { Option } from "../../database/data.type";
import CurrentScore from "./CurrentScore";
import Timer from "./Timer";

const PlayQuiz = () => {
  const {
    quizstate: { currentQuesNumber, currentQuiz },
    quizdispatch,
  } = useQuiz();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const history = useHistory();
  const currentQuestion = currentQuiz!.questions[currentQuesNumber - 1];
  useEffect(() => {
    if (currentQuesNumber > currentQuiz!.questions.length) {
      history.push("/finalscore");
    }
    return () => {
      console.log("useeffect caled");
      setSelectedOption(null);
      setIsOptionClicked(false);
    };
  }, [currentQuesNumber, history, currentQuiz]);
  const showCorrectAnswer = (option: Option) => {
    if (selectedOption) {
      if (selectedOption.optionvalue === option.optionvalue) {
        console.log({ selectedOption });
        if (selectedOption.isCorrect) {
          return "green.400";
        } else {
          console.log({ selectedOption });
          return "tomato";
        }
      } else if (option.isCorrect) {
        return "green.500";
      }
    }
  };
  const handleNextQuestion = (option: Option) => {
    setTimeout(() => {
      setSelectedOption(null);
      setIsOptionClicked(false);
      quizdispatch({
        type: "NEXT_QUESTION",
        value: {
          question: currentQuestion,
          selectedOption: option,
        },
      });
    }, 1000);
  };
  return (
    <>
      {currentQuestion && (
        <VStack>
          <Grid minH='100vh' p={3}>
            <VStack>
              <Flex justify='space-between'>
                <Timer timer={10} isOptionClicked={isOptionClicked} />
                <CurrentScore />
              </Flex>
            </VStack>
            <Box boxShadow='dark-lg'>
              <div>Question {currentQuesNumber}</div>
              <div>{currentQuestion.question}</div>
              <Flex direction='column'>
                {currentQuestion.options.map((option: Option, index) => (
                  <Button
                    mb={2}
                    key={index}
                    color={isOptionClicked ? showCorrectAnswer(option) : ""}
                    onClick={() => {
                      setIsOptionClicked(true);
                      setSelectedOption(option);
                      handleNextQuestion(option);
                    }}>
                    {option.optionvalue}
                  </Button>
                ))}
              </Flex>
              <button onClick={() => {}}>Skip Question</button>
            </Box>
          </Grid>
        </VStack>
      )}
    </>
  );
};

export default PlayQuiz;
