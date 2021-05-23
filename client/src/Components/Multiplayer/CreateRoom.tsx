// import { useState } from "react";
// import { VStack } from "@chakra-ui/layout";
// import { v4 } from "uuid";
// import { Button } from "@chakra-ui/button";
// import { useHistory, useParams } from "react-router";

// import { useQuiz } from "../../context/quiz-context";
// import { useSocket } from "../../context/socket-context";
// import { ParamType } from "../Quiz/PlayOptions";

// const CreateRoom = () => {
//   const [roomId, setRoomId] = useState<string | null>(null);
//   const { websocket } = useSocket();
//   const {
//     quizstate: { username },
//   } = useQuiz();
//   const { category } = useParams<ParamType>();
//   const history = useHistory();
//   const handleCreateRoom = () => {
//     const id = v4();
//     setRoomId(id);

//     const roomInfo = {
//       roomId: id,
//       category,
//       hostName: username,
//     };
//     websocket.emit("create room data", {
//       hash: roomInfo,
//     });
//     history.push({
//       pathname: `/${category}/roomarea`,
//       state: { roomId: id },
//     });
//   };
//   return (
//     <VStack>
//       <Button onClick={() => handleCreateRoom()}>CreateRoom</Button>
//       <h1>{roomId}</h1>
//     </VStack>
//   );
// };

// export default CreateRoom;

export {};
