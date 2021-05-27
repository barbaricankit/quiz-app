import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type PlayAloneProp = {
  bg: string;
};

const PlayAlone = ({ bg }: PlayAloneProp) => {
  const {
    quizstate: { category },
  } = useQuiz();
  const history = useHistory();
  return (
    <Button bgGradient={bg} onClick={() => history.push(`/${category}/play`)}>
      Play Alone
    </Button>
  );
};

export default PlayAlone;
