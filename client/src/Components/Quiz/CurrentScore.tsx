import { Text, VStack, useQuiz } from '.';

const CurrentScore = () => {
	const { quizState: { score } } = useQuiz();
	return (
		<VStack ml={4}>
			<Text>Score</Text>
			<Text>{score}</Text>
		</VStack>
	);
};

export default CurrentScore;
