import {
  useColorModeValue,
  useQuiz,
  AnotherCategory,
  PlayAgain,
  Flex,
  Text,
} from '.'

const SinglePlayerFinalScore = () => {
  const {
    quizState: { score },
  } = useQuiz()

  const bg: string = useColorModeValue(
    'linear-gradient(to right, #61e294, #0575e6)',
    'linear-gradient(to right, #005c97, #363795)',
  )

  const checkScore = () => {
    if (score >= 13) return `🏆 You scored : ${score} out of 15`
    else if (score < 13 && score >= 7)
      return `😃 You scored : ${score} out of 15`
    else if (score < 7) {
      return `😑 You scored : ${score} out of 15`
    }
  }
  return (
    <>
      <Text fontSize="5xl" fontStyle="italic" fontWeight="bold">
        {checkScore()}
      </Text>
      <Flex
        m="auto"
        w={['50%', '70%', '50%']}
        alignContent="space-between"
        direction={['column', 'row']}
        justifyContent="space-evenly"
      >
        <PlayAgain bg={bg} />
        <AnotherCategory bg={bg} />
      </Flex>
    </>
  )
}

export default SinglePlayerFinalScore
