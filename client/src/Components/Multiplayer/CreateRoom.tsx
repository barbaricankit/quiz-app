import { VStack } from "@chakra-ui/layout";
import { v4 } from "uuid";
import { Button } from "@chakra-ui/button";
import { useHistory, useParams } from "react-router";

import { useQuiz } from "../../context/quiz-context";
import { useSocket } from "../../context/socket-context";
import { ParamType } from "../Quiz/PlayOptions";

const CreateRoom = () => {
  const { websocket, setRoomId } = useSocket();
  const {
    quizstate: { username },
  } = useQuiz();
  const { category } = useParams<ParamType>();
  const history = useHistory();
  const handleCreateRoom = () => {
    const id = v4();
    setRoomId(id);

    const roomInfo = {
      roomId: id,
      category,
      host: { hostName: username },
    };
    websocket.emit("create room data", roomInfo);
    history.push({
      pathname: `/${category}/roomarea`,
    });
  };

  return (
    <VStack>
      <Button onClick={() => handleCreateRoom()}>CreateRoom</Button>
    </VStack>
  );
};

export default CreateRoom;
