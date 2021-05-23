import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useQuiz } from "../../context/quiz-context";
import { Quiz } from "../../database/data.type";

export type ParamType = {
  category: string;
};
type Network_Data_Type = {
  success: boolean;
  quiz: Quiz[];
};
const PlayOptions = () => {
  const { category } = useParams<ParamType>();
  const {
    quizstate: { currentQuiz },
    quizdispatch,
  } = useQuiz();
  const history = useHistory();
  const bg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  useEffect(() => {
    if (!currentQuiz) {
      (async () => {
        try {
          const { data } = await axios.get<Network_Data_Type>(
            `https://cricquizapp-server.herokuapp.com/quiz/${category}`
          );
          if (data.success) {
            quizdispatch({
              type: "SET_CURRENT_QUIZ",
              value: { quiz: data.quiz, category },
            });
          }
        } catch (error) {
          console.log("Something went wrong to get the quiz");
        }
      })();
    }
  }, [category, quizdispatch, currentQuiz]);
  return (
    <Flex justifyContent='space-evenly' w='100%'>
      <Button bgGradient={bg} onClick={() => history.push(`/${category}/play`)}>
        Play Alone
      </Button>
      {/* Please ignore the below comment it is for multiplayer and it is in progress */}
      {/* <Button
        bgGradient={bg}
        onClick={() => history.push(`/${category}/rooms`)}>
        Play with Friends
      </Button> */}
    </Flex>
  );
};

export default PlayOptions;
