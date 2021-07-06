import { useQuiz, useColorModeValue, useParams, useEffect, Flex, axios, PlayAlone, PlayWithFriends } from '.';
import { Quiz_Type } from '../../database/servercalls.type';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.REACT_APP_URL;

export type Param_Type = {
	category: string;
};
export type Network_Data_Type = {
	success: boolean;
	quiz: Quiz_Type[];
};
const PlayOptions = () => {
	const { category } = useParams<Param_Type>();
	const { quizState: { currentQuiz }, quizDispatch } = useQuiz();

	const bg: string = useColorModeValue(
		'linear-gradient(to right, #61e294, #0575e6)',
		'linear-gradient(to right, #005c97, #363795)'
	);
	useEffect(
		() => {
			if (!currentQuiz) {
				(async () => {
					try {
						const { data } = await axios.get<Network_Data_Type>(`${url}quiz/${category}`);
						if (data.success) {
							quizDispatch({
								type: 'SET_CURRENT_QUIZ',
								payload: { quiz: data.quiz, category }
							});
						}
					} catch (error) {
						console.log('Something went wrong to get the quiz');
					}
				})();
			}
		},
		[ category, quizDispatch, currentQuiz ]
	);
	return (
		<Flex justifyContent='space-evenly' w='100%'>
			<PlayAlone bg={bg} />
			<PlayWithFriends bg={bg} />
		</Flex>
	);
};

export default PlayOptions;
