import { 
	HStack,
  OtherMembers,
	CopyToClipboard,
	FaCopy,
	Text,
  Box,
	VStack,
	Button,
	useEffect,
	useState,
	useHistory,
	useParams,
	useSocket,Host
	} from ".";
import { Param_Type } from "../Quiz/PlayOptions";
import {Member_Type,User_Type,Host_Type} from "./multiplayer.types"



const WaitingRoom = () => {
  const { category } = useParams<Param_Type>();
  const history = useHistory();
  const [members, setMembers] = useState<Array<User_Type>>([]);
  const [host, setHost] = useState<Host_Type>();
  const { websocket, userId, roomId, setRoomId } = useSocket();

  const startGame = () => {
    websocket.emit("start the game", {});
    setRoomId("");
  };
  websocket.on(`let's play`, () => {
    history.push({
      pathname: `/${category}/play`,
      state: { player: "multiplayer" },
    });
  });
  useEffect(() => {
    websocket.emit("waiting room", { roomId });
  }, [websocket, roomId]);
  websocket.on(`members for ${category} category`, (data: Member_Type) => {
    if (!host) {
      setHost({ hostId: data.host.hostId, hostName: data.host.hostName });
    }
    if (members.length !== data.users.length) {
      setMembers([...members, ...data.users]);
    }
  });

  return (
    <VStack>
      <CopyToClipboard text={roomId}>
        <HStack m={3}>
          <Text>Room Id : {roomId}</Text>
          <FaCopy className='copy-btn' />
        </HStack>
      </CopyToClipboard>

      {host && <Host host={host}/>}

      {members?.map((member) => (
        <Box key={member.userId}>
          <OtherMembers member={member}/>
        </Box>
      ))}
      {userId === host?.hostId && (
        <Button onClick={() => startGame()}>Start Game</Button>
      )}
    </VStack>
  );
};

export default WaitingRoom;
