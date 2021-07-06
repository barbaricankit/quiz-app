import { Box, Input, useAuth } from '.';

const Username = () => {
	const { authState: { username }, authDispatch: dispatch } = useAuth();

	return (
		<Box p={2}>
			<Input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: { username: e.target.value } })}
			/>
		</Box>
	);
};
export default Username;
