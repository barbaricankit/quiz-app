import { 
	Avatar,
	Flex,
	Text,
	} from ".";
import { Host_Type} from "./multiplayer.types"
export type Host_Prop_Type={
    host:Host_Type
}
export function Host  ({host}:Host_Prop_Type) {

  return (
      <Flex
        boxShadow='dark-lg'
        pl={2}
        pr={2}
        pt={2}
        pb={2}
        width='100%'
        alignItems='baseline'
        justifyContent='space-around'
        bg='#8147AE'
        borderRadius='9999px'>
        <Avatar size='md' name={host?.hostName} />
        <Text p={1} pl={0} color='gray.400' fontSize='2xl'>
          {host?.hostName}
        </Text>
      </Flex>

  );
};

export default Host;
