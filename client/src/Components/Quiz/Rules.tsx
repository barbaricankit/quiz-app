import { Flex, ListItem, Text, UnorderedList, VStack, rules, PlayOptions } from '.';

const Rules = () => {
	return (
		<Flex align='left' direction='column' boxShadow='dark-lg' p='6' rounded='md'>
			<VStack>
				<Text fontSize='2xl' mb={3} color='gray.500'>
					Rules
				</Text>
			</VStack>
			<VStack>
				<UnorderedList>
					{rules.map((rule,index) => (
						<ListItem fontSize='md' textAlign='left' key={index}>
							{rule}
						</ListItem>
					))}
				</UnorderedList>
			</VStack>
			<VStack mt={6}>
				<PlayOptions />
			</VStack>
		</Flex>
	);
};

export default Rules;
