import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type PlayWithFriendsProp = {
  bg: string;
};

const PlayWithFriends = ({ bg }: PlayWithFriendsProp) => {
  const {
    quizstate: { category },
  } = useQuiz();
  const history = useHistory();
  return (
    <Button bgGradient={bg} onClick={() => history.push(`/${category}/rooms`)}>
      Play with Friends
    </Button>
  );
};

export default PlayWithFriends;
