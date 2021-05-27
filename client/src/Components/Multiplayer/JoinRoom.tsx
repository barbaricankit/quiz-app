import { useState } from "react";
import { Stack, Text, VStack } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useHistory, useParams } from "react-router";
import { useQuiz } from "../../context/quiz-context";
import { useSocket } from "../../context/socket-context";
import { ParamType } from "../Quiz/PlayOptions";

type Room_Info_Type = {
  success: boolean;
  message: string;
};
const JoinRoom = () => {
  const [roomInfo, setRoomInfo] = useState<Room_Info_Type | null>(null);

  const { category } = useParams<ParamType>();
  const {
    quizstate: { username },
  } = useQuiz();
  const history = useHistory();
  const { websocket, setRoomId, roomId } = useSocket();
  const handleJoinRoom = () => {
    if (roomId) {
      websocket.emit("join room", {
        roomId,
        category,
        users: { userName: username },
      });
      websocket.on("room found", (data: any) => {
        if (data.success) {
          history.push({
            pathname: `/${category}/roomarea`,
          });
        } else {
          setRoomInfo(data);
        }
      });
    }
  };
  return (
    <VStack>
      <Input
        type='text'
        placeholder='Enter Room Id'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <Button
        disabled={roomId ? false : true}
        onClick={() => {
          handleJoinRoom();
        }}>
        Join Room
      </Button>
      {roomInfo?.success === false && (
        <Stack>
          <Text>{roomInfo.message}</Text>{" "}
        </Stack>
      )}
    </VStack>
  );
};

export default JoinRoom;
