import { Box, Input, AiFillEye, useState, useAuth } from '.';

const Password = () => {
	const { authState: { password }, authDispatch: dispatch } = useAuth();
	const [ showPassword, setShowPassword ] = useState('password');
	return (
		<Box p={2} position='relative'>
			<Input
				type={showPassword}
				placeholder='Password'
				value={password}
				onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: { password: e.target.value } })}
			/>
			<AiFillEye
				className='show_password_btn'
				onClick={() => setShowPassword((pwd) => (pwd === 'text' ? 'password' : 'text'))}
			/>
		</Box>
	);
};
export default Password;
