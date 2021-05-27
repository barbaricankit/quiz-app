import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
export type Another_Category_Prop_Type = {
  bg: string;
};

const AnotherCategory = ({ bg }: Another_Category_Prop_Type) => {
  const { quizDispatch } = useQuiz();
  const history = useHistory();
  return (
    <Button
      bgGradient={bg}
      onClick={() => {
        quizDispatch({ type: "RESET" });
        history.push("/categories");
      }}>
      Another Category
    </Button>
  );
};

export default AnotherCategory;
