import { Button, useQuiz, useHistory } from '.';

type Play_Again_Prop_Type = {
	bg: string;
};

const PlayAgain = ({ bg }: Play_Again_Prop_Type) => {
	const { quizState: { category }, quizDispatch } = useQuiz();
	const history = useHistory();
	return (
		<Button
			bgGradient={bg}
			mb={2}
			onClick={() => {
				quizDispatch({ type: 'RESET' });
				history.push(`/${category}/rules`);
			}}>
			Play Again
		</Button>
	);
};

export default PlayAgain;
