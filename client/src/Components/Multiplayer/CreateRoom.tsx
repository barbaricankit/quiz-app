import {
  VStack,
  Button,
  useHistory,
  useParams,
  getRandomRoomId,
  useAuth,
  useSocket,
} from '.'
import { Param_Type } from '../Quiz/PlayOptions'

const CreateRoom = () => {
  const {
    socketState: { websocket },
    socketDispatch: dispatch,
  } = useSocket()
  const {
    authState: { username },
  } = useAuth()
  const { category } = useParams<Param_Type>()
  const history = useHistory()
  const handleCreateRoom = () => {
    const id = getRandomRoomId(6)
    dispatch({ type: 'SET_ROOM_ID', payload: { roomId: id } })

    const roomInfo = {
      roomId: id,
      category,
      host: { hostName: username },
    }
    websocket.emit('create room data', roomInfo)
    history.push({
      pathname: `/${category}/roomarea`,
    })
  }

  return (
    <VStack>
      <Button onClick={() => handleCreateRoom()}>CreateRoom</Button>
    </VStack>
  )
}

export default CreateRoom
