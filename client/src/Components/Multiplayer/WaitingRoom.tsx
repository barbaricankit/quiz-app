import { Text, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSocket } from "../../context/socket-context";
import { Button } from "@chakra-ui/button";
import { Param_Type } from "../Quiz/PlayOptions";

type Member_Type = {
  users: User_Type[];
  host: Host_Type;

  roomId: string;
};
type User_Type = {
  userName: string;
  userId: string;
};
type Host_Type = {
  hostId: string;
  hostName: string;
};
const WaitingRoom = () => {
  const { category } = useParams<Param_Type>();
  const history = useHistory();
  const [members, setMembers] = useState<Array<User_Type>>([]);
  const [host, setHost] = useState<Host_Type>();

  const { websocket, userId, roomId } = useSocket();

  const startGame = () => {
    websocket.emit("start the game", {});
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
      <Text>Room Id : {roomId}</Text>
      <Text mb={2}>{host?.hostName}</Text>
      {members?.map((member) => (
        <VStack key={member.userId}>
          <Text mb={2}>{member.userName}</Text>
        </VStack>
      ))}
      {userId === host?.hostId && (
        <Button onClick={() => startGame()}>Start Game</Button>
      )}
    </VStack>
  );
};

export default WaitingRoom;
