import {
  AnotherCategory,
  PlayAgain,
  useLocation,
  useColorModeValue,
  Flex,
  Heading,
  Text,
  useEffect,
  useState,
  useSocket,
  useQuiz,
} from '.'
import { Location_Type } from '../Quiz/QuizPage'

type Host_Type = {
  hostId: string
  hostName: string
  score: number
  finalScore: number
}
type User_Type = {
  userId: string
  userName: string
  score: number
  finalScore: number
}
const MultiplayerFinalScore = () => {
  const {
    quizState: { score },
  } = useQuiz()

  const {
    socketState: { websocket, roomId, userId },
  } = useSocket()
  const [userInfo, setUserInfo] = useState<User_Type[]>()
  const [hostInfo, setHostInfo] = useState<Host_Type>()
  const bg: string = useColorModeValue(
    'linear-gradient(to right, #61e294, #0575e6)',
    'linear-gradient(to right, #005c97, #363795)',
  )
  const location = useLocation<Location_Type>()
  const player = location.state.player
  useEffect(() => {
    if (player === 'multiplayer') {
      websocket.emit('end the quiz', { roomId, userId, score })
    }
    // eslint-disable-next-line
  }, [])
  websocket.on('final score of each user', (data: any) => {
    const { host, users } = data.room
    console.log({ host, users })
    if (!hostInfo?.hostId) {
      setHostInfo(host)
    }
    setUserInfo([...users])
  })

  return (
    <>
      <Heading fontSize="5xl" fontStyle="italic" fontWeight="bold">
        Scores :
      </Heading>
      {hostInfo?.finalScore && (
        <Text fontSize="3xl" fontStyle="italic" fontWeight="bold">
          {hostInfo?.hostName} : {hostInfo?.finalScore}
        </Text>
      )}

      {userInfo?.map((user) => (
        <Text
          fontSize="3xl"
          fontStyle="italic"
          fontWeight="bold"
          key={user?.userId}
        >
          {user?.userName} : {user?.finalScore && user?.finalScore}
        </Text>
      ))}
      <Flex
        m="auto"
        w={['50%', '70%', '80%']}
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

export default MultiplayerFinalScore
