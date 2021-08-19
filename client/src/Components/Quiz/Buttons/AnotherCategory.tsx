import { Button, useQuiz, useHistory } from '.'
import { useSocket } from '../../Multiplayer'

export type Another_Category_Prop_Type = {
  bg: string
}

const AnotherCategory = ({ bg }: Another_Category_Prop_Type) => {
  const { quizDispatch } = useQuiz()
  const history = useHistory()
  const {
    socketState: { websocket },
  } = useSocket()
  return (
    <Button
      bgGradient={bg}
      onClick={() => {
        quizDispatch({ type: 'RESET' })
        history.push('/')
        websocket?.close()
      }}
    >
      Another Category
    </Button>
  )
}

export default AnotherCategory
