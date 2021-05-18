import { Text, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useQuiz } from "../../context/quiz-context";
type TimerProp = {
  timer: number;
  isOptionClicked: boolean;
};
const Timer = ({ timer, isOptionClicked }: TimerProp) => {
  const [time, setTime] = useState<number>(timer);
  const {
    quizstate: { currentQuesNumber, currentQuiz },
    quizdispatch,
  } = useQuiz();
  const currentQuestion = currentQuiz!.questions[currentQuesNumber - 1];

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => (time - 1 > 0 ? time - 1 : 0));
    }, 1000);
    const timerId = setTimeout(() => {
      clearInterval(id);
      quizdispatch({
        type: "NEXT_QUESTION",
        value: {
          question: currentQuestion,
          selectedOption: null,
        },
      });
      setTime(10);
    }, 10000);

    return () => {
      setTime(10);
      clearInterval(id);
      clearTimeout(timerId);
    };
  }, [currentQuestion, quizdispatch]);

  return (
    <VStack>
      <Text>Time Left</Text>
      <Text>00:{time < 10 ? `0${time}` : time}</Text>
    </VStack>
  );
};

export default Timer;
