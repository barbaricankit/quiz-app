import { Button, useColorModeValue, Flex, Spinner, Link, useQuiz } from '.'

const Category = () => {
  const {
    quizDispatch,
    quizState: { categories },
  } = useQuiz()
  const bg = useColorModeValue(
    'linear-gradient(to right, #61e294, #0575e6)',
    'linear-gradient(to right, #005c97, #363795)',
  )
  return (
    <Flex direction="column" alignContent="space-between">
      {!categories && <Spinner />}
      {categories?.map((category, index) => (
        <Link to={`/${category}/rules`} key={index}>
          <Button
            bgGradient={bg}
            mb={2}
            w="10rem"
            onClick={() =>
              quizDispatch({ type: 'SET_CATEGORY', payload: { category } })
            }
          >
            {category}
          </Button>
        </Link>
      ))}
    </Flex>
  )
}

export default Category
