import { Button, useQuiz, useHistory } from '.'
import { useSocket } from '../../Multiplayer'

type Play_Again_Prop_Type = {
  bg: string
}

const PlayAgain = ({ bg }: Play_Again_Prop_Type) => {
  const {
    quizState: { category },
    quizDispatch,
  } = useQuiz()
  const history = useHistory()
  const {
    socketState: { websocket },
  } = useSocket()
  return (
    <Button
      bgGradient={bg}
      mb={2}
      onClick={() => {
        quizDispatch({ type: 'RESET' })
        history.push(`/${category}/rules`)
        websocket?.close()
      }}
    >
      Play Again
    </Button>
  )
}

export default PlayAgain
