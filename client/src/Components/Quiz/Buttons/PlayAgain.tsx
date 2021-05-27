import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type PlayAgainProp = {
  bg: string;
};

const PlayAgain = ({ bg }: PlayAgainProp) => {
  const {
    quizstate: { category },
    quizdispatch,
  } = useQuiz();
  const history = useHistory();
  return (
    <Button
      bgGradient={bg}
      mb={2}
      onClick={() => {
        quizdispatch({ type: "RESET" });
        history.push(`/${category}/rules`);
      }}>
      Play Again
    </Button>
  );
};

export default PlayAgain;
