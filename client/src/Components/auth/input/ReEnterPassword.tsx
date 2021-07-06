import { Box, Input, AiFillEye, useState, useAuth } from '.';

const ReEnterPassword = () => {
	const { authState: { reenterPassword }, authDispatch: dispatch } = useAuth();
	const [ showPassword, setShowPassword ] = useState('password');
	return (
		<Box p={2} position='relative'>
			<Input
				type={showPassword}
				placeholder='Password'
				value={reenterPassword}
				onChange={(e) =>
					dispatch({ type: 'SET_RE_ENTER_PASSWORD', payload: { reenterPassword: e.target.value } })}
			/>
			<AiFillEye
				className='show_password_btn'
				onClick={() => setShowPassword((pwd) => (pwd === 'text' ? 'password' : 'text'))}
			/>
		</Box>
	);
};
export default ReEnterPassword;
