import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";
import { useQuiz } from "../../../context/quiz-context";
type AnotherCategoryProp = {
  bg: string;
};

const AnotherCategory = ({ bg }: AnotherCategoryProp) => {
  const { quizdispatch } = useQuiz();
  const history = useHistory();
  return (
    <Button
      bgGradient={bg}
      onClick={() => {
        quizdispatch({ type: "RESET" });
        history.push("/categories");
      }}>
      Another Category
    </Button>
  );
};

export default AnotherCategory;
