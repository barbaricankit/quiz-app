import { Text, VStack, useEffect, useState, useQuiz } from '.';

export type Timer_Prop_Type = {
	timer: number;
};
const QuizTimer = ({ timer }: Timer_Prop_Type) => {
	const [ time, setTime ] = useState<number>(timer);

	const { quizState: { currentQuesNumber, currentQuiz, selectedOption }, quizDispatch } = useQuiz();
	const currentQuestion = currentQuiz![currentQuesNumber - 1];

	useEffect(
		() => {
			const id = setInterval(() => {
				setTime((time) => (time - 1 > 0 ? time - 1 : 0));
			}, 1000);
			const id2 = setTimeout(() => {
				clearInterval(id);
			}, 12000);
			return () => {
				setTime(10);
				clearTimeout(id2);
				clearInterval(id);
			};
		},
		[ currentQuesNumber ]
	);
	useEffect(
		() => {
			const timerID1 = setTimeout(() => {
				quizDispatch({
					type: 'SET_OPTION_COLOR',
					payload: { value: 'green.500' }
				});
			}, 10000);
			const timerID2 = setTimeout(() => {
				quizDispatch({
					type: 'NEXT_QUESTION',
					payload: {
						question: currentQuestion,
						selectedOption: selectedOption
					}
				});
			}, 12000);
			return () => {
				clearTimeout(timerID1);
				clearTimeout(timerID2);
			};
		},
		[ quizDispatch, currentQuestion, selectedOption ]
	);

	return (
		<VStack>
			<Text>Time Left</Text>
			<Text>00:{time < 10 ? `0${time}` : time}</Text>
		</VStack>
	);
};

export default QuizTimer;
