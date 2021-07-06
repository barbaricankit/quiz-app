import {
	Box,
	Flex,
	Text,
	VStack,
	Button,
	useState,
	useColorModeValue,
	Username,
	Password,
	ReEnterPassword,
	signUp,
	useAuth,
	useHistory
} from '.';

const SignUp = () => {
	const { authState: { username, password, reenterPassword }, authDispatch: dispatch } = useAuth();
	const history = useHistory();
	const [ error, setError ] = useState<string | null>(null);
	const bg = useColorModeValue('#93EDC7', '#0d324d');

	const loginHandler = async () => {
		const data = await signUp({ username, password });
		if (data.token) {
			dispatch({ type: 'SET_TOKEN', payload: { token: data.token } });
			dispatch({ type: 'SET_USERNAME', payload: { username: data.username } });
			history.push('/');
			localStorage.setItem('token', JSON.stringify(data.token));
		} else {
			setError(data.message);
		}
	};

	const matchPassword = () => {
		if (password && reenterPassword) {
			if (password === reenterPassword) return true;
			return false;
		}
		return false;
	};
	return (
		<VStack>
			<Flex align='center' justify='center' className='login_page'>
				<Flex direction='column' justify='center' className='login_form'>
					<Username />
					<Password />
					<ReEnterPassword />
					<Text color='red' fontSize='md'>
						{error}
					</Text>
					{!matchPassword() && (
						<Text color='red' fontSize='md'>
							Passwords do not match
						</Text>
					)}
					<Box p={2}>
						<Button
							bg={bg}
							disabled={username && matchPassword() ? false : true}
							onClick={() => loginHandler()}>
							Submit
						</Button>
					</Box>
				</Flex>
			</Flex>
		</VStack>
	);
};
export default SignUp;
