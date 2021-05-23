import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/layout";
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
  const optionsbg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  const questionbg = useColorModeValue("#ECE7EE", "#262a31");
  const skipButtonBg = useColorModeValue(
    "linear-gradient(to right, #1c92d2, #f2fcfe)",
    "linear-gradient(to right, #005c97, #363795)"
  );

  const currentQuestion = currentQuiz![currentQuesNumber - 1];

  useEffect(() => {
    if (currentQuesNumber > currentQuiz!.length) {
      history.push("/finalscore");
    }
    return () => {
      setSelectedOption(null);
      setIsOptionClicked(false);
    };
  }, [currentQuesNumber, history, currentQuiz]);
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
    }
    return "";
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
        <VStack w='100%'>
          <Grid minH='100vh' p={3} w='100%'>
            <VStack>
              <Flex justify='space-between'>
                <Timer timer={10} isOptionClicked={isOptionClicked} />
                <CurrentScore />
              </Flex>
            </VStack>
            <Box
              boxShadow='dark-lg'
              bg={questionbg}
              borderRadius='2xl'
              margin={"auto"}
              p={1}
              w={["100%", "80%"]}>
              <Text fontWeight='bold' m={5} color='gray.500'>
                Question {currentQuesNumber}{" "}
                {currentQuestion.bonuspoints && ": Bonus Question"}
              </Text>
              <Text fontStyle='italic' fontWeight='semibold' m={5}>
                {currentQuestion?.question}
              </Text>
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
                    key={option.optionvalue}
                    fontWeight='bold'
                    color={isOptionClicked ? showCorrectAnswer(option) : ""}
                    variant='solid'
                    onClick={() => {
                      setIsOptionClicked(true);
                      setSelectedOption(option);
                      handleNextQuestion(option);
                    }}>
                    {option.optionvalue}
                  </Button>
                ))}
              </Flex>
              <VStack>
                <Button
                  key={currentQuesNumber}
                  bgGradient={skipButtonBg}
                  onClick={() =>
                    quizdispatch({
                      type: "SKIP_QUESTION",
                    })
                  }
                  m={5}
                  alignSelf='flex-end'>
                  Skip Question
                </Button>
              </VStack>
            </Box>
          </Grid>
        </VStack>
      )}
    </>
  );
};

export default PlayQuiz;
