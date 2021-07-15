import {
	Box,
	Flex,
	Grid,
	VStack,
	useQuiz,
	useColorModeValue,
	useEffect,
	useHistory,
	useLocation,
	useSocket,
	SkipQuestionButton,
	CurrentScore,
	Questions,
	QuizOptions,
	QuizTimer
} from '.';

export type Location_Type = {
	player: string;
};
const QuizPage = () => {
	const { quizState: { currentQuesNumber, currentQuiz, score }, quizDispatch } = useQuiz();
	const { socketState: {websocket, roomId, userId}, } = useSocket();
	const history = useHistory();
	const location = useLocation<Location_Type>();
	const player = location.state?.player;
	const questionbg = useColorModeValue('#ECE7EE', '#262a31');

	const currentQuestion = currentQuiz![currentQuesNumber - 1];
	useEffect(
		() => {
			if (player === 'multiplayer') {
				websocket.emit('score updates', { userId, score, roomId });
			}
		},
		[ websocket, userId, score, roomId, player ]
	);
	useEffect(
		() => {
			if (currentQuesNumber > currentQuiz!.length) {
				if (player === 'multiplayer') {
					history.push({
						pathname: '/multiplayer/finalscore',
						state: { player }
					});
				} else {
					history.push({ pathname: '/finalscore', state: { player } });
				}
			}
			return () => {
				quizDispatch({
					type: 'OPTION_CLICKED',
					payload: { value: false, option: null }
				});
			};
		},
		[ currentQuesNumber, history, currentQuiz, quizDispatch, player ]
	);

	return (
		<Box>
			{currentQuestion && (
				<VStack w='100%'>
					<Grid minH='100vh' p={3} w='100%'>
						<VStack>
							<Flex justify='space-between'>
								<QuizTimer timer={10} />
								<CurrentScore />
							</Flex>
						</VStack>
						<Box
							boxShadow='dark-lg'
							bg={questionbg}
							borderRadius='2xl'
							margin={'auto'}
							p={1}
							w={[ '100%', '80%' ]}>
							<Questions currentQuestion={currentQuestion} />
							<QuizOptions currentQuestion={currentQuestion} />

							<VStack>
								<SkipQuestionButton />
							</VStack>
						</Box>
					</Grid>
				</VStack>
			)}
		</Box>
	);
};

export default QuizPage;
