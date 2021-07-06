import { Avatar, Flex, Text } from '.';
import { User_Type } from './multiplayer.types';

export type Member_Prop_Type = {
	member: User_Type;
};

const OtherMembers = ({ member }: Member_Prop_Type) => {
	return (
		<Flex
			key={member.userId}
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
			<Avatar size='md' name={member.userName} />

			<Text p={1} pl={0} color='gray.400' fontSize='2xl'>
				{member.userName}
			</Text>
		</Flex>
	);
};

export default OtherMembers;
