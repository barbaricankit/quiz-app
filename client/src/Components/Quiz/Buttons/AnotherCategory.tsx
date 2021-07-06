import { Button, useQuiz, useHistory } from '.';

export type Another_Category_Prop_Type = {
	bg: string;
};

const AnotherCategory = ({ bg }: Another_Category_Prop_Type) => {
	const { quizDispatch } = useQuiz();
	const history = useHistory();
	return (
		<Button
			bgGradient={bg}
			onClick={() => {
				quizDispatch({ type: 'RESET' });
				history.push('/');
			}}>
			Another Category
		</Button>
	);
};

export default AnotherCategory;
