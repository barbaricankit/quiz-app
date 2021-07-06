import { Flex, Button, Logout, useHistory } from '.';

const Home = () => {
	const history = useHistory();

	return (
		<Flex flexDir='column'>
			<Button m={2} onClick={() => history.push('/')}>
				Play
			</Button>
			<Logout />
		</Flex>
	);
};

export default Home;
