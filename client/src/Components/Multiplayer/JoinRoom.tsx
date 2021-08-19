import {
  Stack,
  Text,
  VStack,
  Button,
  useState,
  Input,
  useHistory,
  useParams,
  useAuth,
  useSocket,
} from '.'
import { Param_Type } from '../Quiz/PlayOptions'

type Room_Info_Type = {
  success: boolean
  message: string
}
const JoinRoom = () => {
  const [roomInfo, setRoomInfo] = useState<Room_Info_Type | null>(null)
  const { category } = useParams<Param_Type>()
  const {
    authState: { username },
  } = useAuth()
  const history = useHistory()
  const {
    socketState: { websocket, roomId },
    socketDispatch: dispatch,
  } = useSocket()
  const handleJoinRoom = () => {
    console.log({ roomId })
    if (roomId) {
      websocket.emit('join room', {
        roomId,
        category,
        users: { userName: username },
      })
      websocket.on('room found', (data: any) => {
        if (data.success) {
          history.push({
            pathname: `/${category}/roomarea`,
          })
        } else {
          setRoomInfo(data)
        }
      })
    }
  }
  return (
    <VStack>
      <Input
        type="text"
        placeholder="Enter Room Id"
        value={roomId}
        onChange={(e) =>
          dispatch({ type: 'SET_ROOM_ID', payload: { roomId: e.target.value } })
        }
      />
      <Button
        disabled={roomId ? false : true}
        onClick={() => {
          handleJoinRoom()
        }}
      >
        Join Room
      </Button>
      {roomInfo?.success === false && (
        <Stack>
          <Text>{roomInfo.message}</Text>{' '}
        </Stack>
      )}
    </VStack>
  )
}

export default JoinRoom
