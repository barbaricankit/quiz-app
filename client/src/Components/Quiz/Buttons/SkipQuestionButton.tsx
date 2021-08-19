import { Button, useQuiz, useColorModeValue, VStack } from '.'

const SkipQuestionButton = () => {
  const {
    quizState: { currentQuesNumber, isOptionClicked },
    quizDispatch,
  } = useQuiz()

  const skipButtonBg = useColorModeValue(
    'linear-gradient(to right, #61e294, #0575e6)',
    'linear-gradient(to right, #005c97, #363795)',
  )
  const skipQuestion = () => {
    quizDispatch({
      type: 'SET_OPTION_COLOR',
      payload: { value: 'green.500' },
    })
    quizDispatch({
      type: 'OPTION_CLICKED',
      payload: { value: true, option: null },
    })
    setTimeout(() => {
      quizDispatch({
        type: 'SKIP_QUESTION',
      })
    }, 2000)
  }
  return (
    <VStack>
      <Button
        disabled={isOptionClicked}
        _disabled={{ backgroundColor: skipButtonBg }}
        _hover={{ backgroundColor: 'none' }}
        key={currentQuesNumber}
        bg={skipButtonBg}
        onClick={() => skipQuestion()}
        m={5}
        alignSelf="flex-end"
      >
        Skip Question
      </Button>
    </VStack>
  )
}

export default SkipQuestionButton
