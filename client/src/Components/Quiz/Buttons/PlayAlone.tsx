import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type Play_Alone_Prop_Type = {
  bg: string;
};

const PlayAlone = ({ bg }: Play_Alone_Prop_Type) => {
  const {
    quizState: { category },
  } = useQuiz();
  const history = useHistory();
  return (
    <Button bgGradient={bg} onClick={() => history.push(`/${category}/play`)}>
      Play Alone
    </Button>
  );
};

export default PlayAlone;
