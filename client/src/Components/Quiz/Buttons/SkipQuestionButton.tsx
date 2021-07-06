import { Button, useQuiz, useColorModeValue, VStack } from '.';

const SkipQuestionButton = () => {
	const { quizState: { currentQuesNumber }, quizDispatch } = useQuiz();

	const skipButtonBg = useColorModeValue('#668E3E', '#155A7A');
	const skipQuestion = () => {
		quizDispatch({
			type: 'SET_OPTION_COLOR',
			payload: { value: 'green.500' }
		});
		quizDispatch({
			type: 'OPTION_CLICKED',
			payload: { value: true, option: null }
		});
		setTimeout(() => {
			quizDispatch({
				type: 'SKIP_QUESTION'
			});
		}, 2000);
	};
	return (
		<VStack>
			<Button key={currentQuesNumber} bg={skipButtonBg} onClick={() => skipQuestion()} m={5} alignSelf='flex-end'>
				Skip Question
			</Button>
		</VStack>
	);
};

export default SkipQuestionButton;
