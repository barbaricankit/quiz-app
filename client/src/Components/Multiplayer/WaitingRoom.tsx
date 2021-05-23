// import { Text, VStack } from "@chakra-ui/layout";
// import { useEffect, useState } from "react";
// import { useHistory, useLocation, useParams } from "react-router";
// import { useSocket } from "../../context/socket-context";
// import { Button } from "@chakra-ui/button";
// import { ParamType } from "../Quiz/PlayOptions";
// type Location_Type = {
//   roomId: string;
// };
// type Member_Type = {
//   users: { userName: string }[];
//   hostName: string;
//   hostId: string;
// };
// type User_Type = {
//   userName?: string;
// };
// type Host_Type = {
//   hostId: string;
//   hostName: string;
// };
// const WaitingRoom = () => {
//   const { category } = useParams<ParamType>();
//   const history = useHistory();
//   const [members, setMembers] = useState<Array<User_Type>>([]);
//   const [host, setHost] = useState<Host_Type>();
//   const location = useLocation<Location_Type>();
//   const { websocket, userId } = useSocket();

//   useEffect(() => {
//     if (members?.length < 3) {
//       console.log({ members });
//       const intervalId = setInterval(() => {
//         websocket.emit("find members acc to category", {
//           roomId: location.state.roomId,
//           category,
//         });
//       }, 1000);
//       setTimeout(() => {
//         clearInterval(intervalId);
//       }, 1000);
//     }
//   }, [category, location, websocket, members]);

//   websocket.on("get Members", (data: Member_Type) => {
//     console.log(data.users);
//     if (!host) {
//       setHost({ hostId: data.hostId, hostName: data.hostName });
//     }
//     if (members.length !== data.users.length) {
//       setMembers([...members, ...data.users]);
//     }
//   });
//   // useEffect(() => {

//   // }, [members, category, location, websocket]);
//   console.log({ members });
//   return (
//     <VStack>
//       <Text mb={2}>{host?.hostName}</Text>
//       {members?.map((member) => (
//         <VStack>
//           <Text mb={2}>{member.userName}</Text>
//         </VStack>
//       ))}
//       {userId === host?.hostId && (
//         <Button onClick={() => history.push(`/${category}/play`)}>
//           Start Game
//         </Button>
//       )}
//     </VStack>
//   );
// };

// export default WaitingRoom;

export {};
