import { useAuth, useHistory, Redirect, Route, setupAuthHeader, verifyToken } from '.';

export type PrivateRoute_Prop_Type = {
	component: React.FC;
	path: string;
	exact?: boolean;
};
const PrivateRoute = ({ path, ...props }: PrivateRoute_Prop_Type) => {
	const { authState: { token }, authDispatch: dispatch } = useAuth();
	const history = useHistory();
	const savedToken = JSON.parse(localStorage?.getItem('token') || '{}');
	setupAuthHeader(savedToken);

	(async () => {
	
		if (savedToken && !token) {
			const { username, token } = await verifyToken();
			if (username) {
				dispatch({ type: 'SET_USERNAME', payload: { username } });
				dispatch({ type: 'SET_TOKEN', payload: { token } });
				history.push({ pathname: '/' });
			}
		} else if (!savedToken) {
			history.push({ pathname: '/login' });
		}
	})();

	return token ? <Route {...props} path={path} /> : <Redirect to='/login' />;
};
export default PrivateRoute;
