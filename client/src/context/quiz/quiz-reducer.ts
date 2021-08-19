import { calculateScore, initialStateValue } from '.';
import { Action_Type } from './quiz-context.type';

export const manageState = (state: typeof initialStateValue, action: Action_Type) => {
	switch (action.type) {
		case 'SKIP_QUESTION':
			return {
				...state,
				currentQuesNumber: state.currentQuesNumber + 1,
				optionsColor: '',
				isOptionClicked:false
			};
		case 'SET_QUIZ':
			return {
				...state,
				quizzes: action.payload.quiz,
				categories: action.payload.category
			};
		case 'SET_CURRENT_QUIZ':
			return {
				...state,
				currentQuiz: action.payload.quiz,
				category: action.payload.category
			};
		case 'OPTION_CLICKED':
			return {
				...state,
				isOptionClicked: action.payload.value,
				selectedOption: action.payload.option
			};
		case 'SET_OPTION_COLOR':
			return {
				...state,
				optionsColor: action.payload.value
			};
		case 'NEXT_QUESTION':
			return {
				...state,
				score: calculateScore(state.score, action.payload.question, action.payload.selectedOption),
				currentQuesNumber: state.currentQuesNumber + 1,
				optionsColor: '',
				isOptionClicked:false
			};
		case 'RESET':
			return { ...state, score: 0, currentQuesNumber: 1 };
		case 'SET_CATEGORY':
			const quiz = state.quizzes!.filter((quiz) => quiz.category === action.payload.category);
			return {
				...state,
				category: action.payload.category,
				currentQuiz: quiz
			};

		default:
			return state;
	}
};
