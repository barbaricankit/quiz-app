import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type Play_With_Friends_Prop_Type = {
  bg: string;
};

const PlayWithFriends = ({ bg }: Play_With_Friends_Prop_Type) => {
  const {
    quizState: { category },
  } = useQuiz();
  const history = useHistory();
  return (
    <Button bgGradient={bg} onClick={() => history.push(`/${category}/rooms`)}>
      Play with Friends
    </Button>
  );
};

export default PlayWithFriends;
