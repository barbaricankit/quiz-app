import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

const Category = () => {
  const {
    quizdispatch,
    quizstate: { categories },
  } = useQuiz();
  const bg = useColorModeValue(
    "linear-gradient(to right, #61e294, #0575e6)",
    "linear-gradient(to right, #005c97, #363795)"
  );
  return (
    <Flex direction='column' alignContent='space-between'>
      {!categories && <Spinner />}
      {categories?.map((category, index) => (
        <Link to={`/${category}/rules`} key={index}>
          <Button
            bgGradient={bg}
            mb={2}
            w='10rem'
            onClick={() =>
              quizdispatch({ type: "SET_CATEGORY", value: { category } })
            }>
            {category}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default Category;
