import { createContext, useContext, useEffect, useReducer } from 'react';
import { getQuizData } from '..';
import { manageState } from './quiz-reducer';
import { calculateScore } from '..';
import { initialStateValue } from './quiz-context';
import { useQuiz } from './quiz-context';

export {
	useQuiz,
	createContext,
	useContext,
	useEffect,
	useReducer,
	getQuizData,
	manageState,
	calculateScore,
	initialStateValue
};
