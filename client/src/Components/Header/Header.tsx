import { Flex, Stack, Text, useHistory, ColorModeSwitcher, useColorModeValue } from '.';

const Header = () => {
	const bg = useColorModeValue(
		'linear-gradient(to right, #159957, #155799);',
		'linear-gradient(to top, #1f2f3a, #201d40);'
	);
	const history = useHistory();
	return (
		<Stack p={3} h='3.5rem' bgGradient={bg}>
			<Flex justifyContent='space-between'>
				<Text
					fontFamily='&#39;Yanone Kaffeesatz&#39;, sans-serif;'
					fontSize='3xl'
					fontWeight='500'
					onClick={() => history.push('/home')}>
					CricoQuiz
				</Text>

				<ColorModeSwitcher />
			</Flex>
		</Stack>
	);
};

export default Header;
