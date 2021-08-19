import { calculateScore, isCorrectAnswer } from './util_func';

test('calculate the score if the selected answer is correct for a non-bonus question', () => {
	const currentScore = 2;
	const selectedOption = {
		optionvalue: 'Virat Kohli',
		isCorrect: true
	};
	const question = {
		_id: {
			$oid: '60a9555663f38725c098594b'
		},
		question: 'Which cricketer scored four hundreds in the 2016 IPL?',
		category: 'IPL',
		options: [
			{
				optionvalue: 'Suresh Raina',
				isCorrect: false
			},
			{
				optionvalue: 'Virat Kohli',
				isCorrect: true
			},
			{
				optionvalue: 'AB de Villiers',
				isCorrect: false
			},
			{
				optionvalue: 'Chris Gayle',
				isCorrect: false
			}
		],
		points: 1
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(3);
});
test('calculate the score if the selected answer is incorrect for a non-bonus  question', () => {
	const currentScore = 2;
	const selectedOption = {
		optionvalue: 'Suresh Raina',
		isCorrect: false
	};
	const question = {
		_id: {
			$oid: '60a9555663f38725c098594b'
		},
		question: 'Which cricketer scored four hundreds in the 2016 IPL?',
		category: 'IPL',
		options: [
			{
				optionvalue: 'Suresh Raina',
				isCorrect: false
			},
			{
				optionvalue: 'Virat Kohli',
				isCorrect: true
			},
			{
				optionvalue: 'AB de Villiers',
				isCorrect: false
			},
			{
				optionvalue: 'Chris Gayle',
				isCorrect: false
			}
		],
		points: 1
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(2);
});
test('calculate the score if the answer is not selected for a non bonus question', () => {
	const currentScore = 2;
	const selectedOption = null;
	const question = {
		question: 'Which cricketer scored four hundreds in the 2016 IPL?',
		category: 'IPL',
		options: [
			{
				optionvalue: 'Suresh Raina',
				isCorrect: false
			},
			{
				optionvalue: 'Virat Kohli',
				isCorrect: true
			},
			{
				optionvalue: 'AB de Villiers',
				isCorrect: false
			},
			{
				optionvalue: 'Chris Gayle',
				isCorrect: false
			}
		],
		points: 1
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(2);
});

test('calculate the score if the selected answer is correct for a bonus question', () => {
	const currentScore = 2;
	const selectedOption = {
		optionvalue: '9',
		isCorrect: true
	};
	const question = {
		question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
		category: 'IPL',
		bonuspoints: 2,
		negativepoints: -1,
		options: [
			{
				optionvalue: '5',
				isCorrect: false
			},
			{
				optionvalue: '9',
				isCorrect: true
			},
			{
				optionvalue: '3',
				isCorrect: false
			},
			{
				optionvalue: '6',
				isCorrect: false
			}
		]
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(4);
});
test('calculate the score if the selected answer is incorrect for a bonus question', () => {
	const currentScore = 2;
	const selectedOption = {
		optionvalue: '3',
		isCorrect: false
	};
	const question = {
		question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
		category: 'IPL',
		bonuspoints: 2,
		negativepoints: -1,
		options: [
			{
				optionvalue: '5',
				isCorrect: false
			},
			{
				optionvalue: '9',
				isCorrect: true
			},
			{
				optionvalue: '3',
				isCorrect: false
			},
			{
				optionvalue: '6',
				isCorrect: false
			}
		]
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(1);
});
test('calculate the score if the answer is not selected for a bonus question', () => {
	const currentScore = 2;
	const selectedOption = null;
	const question = {
		question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
		category: 'IPL',
		bonuspoints: 2,
		negativepoints: -1,
		options: [
			{
				optionvalue: '5',
				isCorrect: false
			},
			{
				optionvalue: '9',
				isCorrect: true
			},
			{
				optionvalue: '3',
				isCorrect: false
			},
			{
				optionvalue: '6',
				isCorrect: false
			}
		]
	};
	const getScore = calculateScore(currentScore, question, selectedOption);
	expect(getScore).toBe(2);
});
test('check if the answer is correct', () => {
	const selectedOption = '9';
	const question = {
		question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
		category: 'IPL',
		bonuspoints: 2,
		negativepoints: -1,
		options: [
			{
				optionvalue: '5',
				isCorrect: false
			},
			{
				optionvalue: '9',
				isCorrect: true
			},
			{
				optionvalue: '3',
				isCorrect: false
			},
			{
				optionvalue: '6',
				isCorrect: false
			}
		]
	};

	const isCorrect = isCorrectAnswer(question, selectedOption);
	expect(isCorrect).toBe(true);
});
test('check if the answer is incorrect', () => {
	const selectedOption = '5';
	const question = {
		question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
		category: 'IPL',
		bonuspoints: 2,
		negativepoints: -1,
		options: [
			{
				optionvalue: '5',
				isCorrect: false
			},
			{
				optionvalue: '9',
				isCorrect: true
			},
			{
				optionvalue: '3',
				isCorrect: false
			},
			{
				optionvalue: '6',
				isCorrect: false
			}
		]
	};

	const isCorrect = isCorrectAnswer(question, selectedOption);
	expect(isCorrect).toBe(false);
});
