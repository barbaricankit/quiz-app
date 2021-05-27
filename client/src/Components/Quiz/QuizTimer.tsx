import { Text, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useQuiz } from "../../context/quiz-context";
type TimerProp = {
  timer: number;
};
const QuizTimer = ({ timer }: TimerProp) => {
  const [time, setTime] = useState<number>(timer);

  const {
    quizstate: { currentQuesNumber, currentQuiz, selectedOption },
    quizdispatch,
  } = useQuiz();
  const currentQuestion = currentQuiz![currentQuesNumber - 1];

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => (time - 1 > 0 ? time - 1 : 0));
    }, 1000);
    const id2 = setTimeout(() => {
      clearInterval(id);
    }, 12000);
    return () => {
      setTime(10);
      clearTimeout(id2);
      clearInterval(id);
    };
  }, [currentQuesNumber]);
  useEffect(() => {
    const timerID1 = setTimeout(() => {
      quizdispatch({
        type: "SET_OPTION_COLOR",
        payload: { value: "green.500" },
      });
    }, 10000);
    const timerID2 = setTimeout(() => {
      quizdispatch({
        type: "NEXT_QUESTION",
        value: {
          question: currentQuestion,
          selectedOption: selectedOption,
        },
      });
    }, 12000);
    return () => {
      clearTimeout(timerID1);
      clearTimeout(timerID2);
    };
  }, [quizdispatch, currentQuestion, selectedOption]);

  return (
    <VStack>
      <Text>Time Left</Text>
      <Text>00:{time < 10 ? `0${time}` : time}</Text>
    </VStack>
  );
};

export default QuizTimer;
