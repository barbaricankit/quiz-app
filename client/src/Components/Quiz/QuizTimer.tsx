import { Text, VStack, useEffect, useState, useQuiz } from '.'

export type Timer_Prop_Type = {
  timer: number
}
const QuizTimer = ({ timer }: Timer_Prop_Type) => {
  const [time, setTime] = useState<number>(timer)

  const {
    quizState: {
      currentQuesNumber,
      currentQuiz,
      selectedOption,
      isOptionClicked,
    },
    quizDispatch,
  } = useQuiz()
  const currentQuestion = currentQuiz![currentQuesNumber - 1]

  useEffect(() => {
    const id =
      !isOptionClicked &&
      setInterval(() => {
        setTime((time) => (time - 1 > 0 ? time - 1 : 0))
      }, 1000)
    const id2 =
      id &&
      setTimeout(() => {
        clearInterval(id)
        setTime(10)
      }, 12000)
    return () => {
      isOptionClicked &&
        setTimeout(() => {
          setTime(10)
        })
      id2 && clearTimeout(id2)
      id && clearInterval(id)
    }
  }, [isOptionClicked])

  useEffect(() => {
    const timerID1 = setTimeout(() => {
      quizDispatch({
        type: 'SET_OPTION_COLOR',
        payload: { value: 'green.500' },
      })
      quizDispatch({
        type: 'OPTION_CLICKED',
        payload: { value: true, option: null },
      })
    }, 10000)
    const timerID2 = setTimeout(() => {
      quizDispatch({
        type: 'NEXT_QUESTION',
        payload: {
          question: currentQuestion,
          selectedOption: selectedOption,
        },
      })
    }, 12000)
    return () => {
      clearTimeout(timerID1)
      clearTimeout(timerID2)
    }
  }, [quizDispatch, currentQuestion, selectedOption])

  return (
    <VStack>
      <Text>Time Left</Text>
      <Text>00:{time < 10 ? `0${time}` : time}</Text>
    </VStack>
  )
}

export default QuizTimer
