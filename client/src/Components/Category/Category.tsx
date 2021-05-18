import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { categories } from "../../database/data";

const Category = () => {
  const { quizdispatch } = useQuiz();
  return (
    <Flex direction='column' alignContent='space-between'>
      {categories.map((category, index) => (
        <Link to={`/${category}/rules`} key={index}>
          <Button
            mb={2}
            onClick={() =>
              quizdispatch({ type: "SET_GENRE", value: category })
            }>
            {category}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default Category;
