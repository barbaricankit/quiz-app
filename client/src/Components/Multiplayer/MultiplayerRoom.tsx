import { Flex } from "@chakra-ui/layout";

import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

const Multiplayer = () => {
  return (
    <>
      <Flex>
        <CreateRoom />
        <JoinRoom />
      </Flex>
    </>
  );
};

export default Multiplayer;
