import { Box, VStack, Grid, useColorModeValue } from '@chakra-ui/react';
import './App.css';

import Login from './Components/auth/Login';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Category from './Components/Category/Category';
import Rules from './Components/Quiz/Rules';
import Multiplayer from './Components/Multiplayer/MultiplayerRoom';
import WaitingRoom from './Components/Multiplayer/WaitingRoom';
import Header from './Components/Header/Header';
import QuizPage from './Components/Quiz/QuizPage';
import MultiplayerFinalScore from './Components/Multiplayer/MultiplayerFinalScore';
import SinglePlayerFinalScore from './Components/SinglePlayer/SinglePlayerFinalScore';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import PrivateRoute from './Components/private/PrivateRoute';
import Home from './Components/auth/Home';
export const App = () => {
	const bg = useColorModeValue('gray.100', 'linear-gradient(to right, #1d2e4e, #243b55)');

	return (
		<Box textAlign='center' fontSize='xl' bg={bg}>
			<Grid minH='100vh'>
				<Header />
				<VStack spacing={8}>
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/signin' component={SignIn} />
						<Route exact path='/signup' component={SignUp} />
						<PrivateRoute path='/home' component={Home} />
						<PrivateRoute exact path='/' component={Category} />
						<PrivateRoute path='/:category/rules' component={Rules} />
						<PrivateRoute path='/:category/rooms' component={Multiplayer} />
						<PrivateRoute path='/:category/play' component={QuizPage} />
						<PrivateRoute path='/finalscore' component={SinglePlayerFinalScore} />
						<PrivateRoute path='/:category/roomarea' component={WaitingRoom} />
						<PrivateRoute path='/multiplayer/finalscore' component={MultiplayerFinalScore} />
					</Switch>
				</VStack>
			</Grid>
		</Box>
	);
};
