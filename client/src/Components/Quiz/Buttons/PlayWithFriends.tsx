import { Button, useQuiz, useHistory } from '.'
import dotenv from 'dotenv'
import { User_Id_Type, useSocket } from '../../../context/socket/socket-context'
import { io } from 'socket.io-client'
dotenv.config()
const url = process.env.REACT_APP_URL
type Play_With_Friends_Prop_Type = {
  bg: string
}

const PlayWithFriends = ({ bg }: Play_With_Friends_Prop_Type) => {
  const {
    quizState: { category },
  } = useQuiz()
  const { socketDispatch: dispatch } = useSocket()
  const history = useHistory()
  const connectToServer = () => {
    const socket = io(url!)

    socket.on('connection', () => {})
    socket.on('user id', (data: User_Id_Type) => {
      dispatch({ type: 'SET_USER_ID', payload: { userId: data.userId } })
    })
    dispatch({ type: 'SET_SOCKET_CONNECTION', payload: { socket } })
    history.push(`/${category}/rooms`)
  }
  return (
    <Button bgGradient={bg} onClick={() => connectToServer()}>
      Play with Friends
    </Button>
  )
}

export default PlayWithFriends
