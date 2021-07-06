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
					{rules.map((rule) => (
						<ListItem fontSize='md' textAlign='left'>
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
