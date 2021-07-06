import { Action_Type, Quiz_State_Type } from './quiz-context.type';
import { manageState } from './quiz-reducer';

test('user skips the question then move on to the next question without increasing the score', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 3,
		currentQuesNumber: 2,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: 'green'
	};
	const finalStateValue: Quiz_State_Type = {
		score: 3,
		currentQuesNumber: 3,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const action_type: Action_Type = {
		type: 'SKIP_QUESTION'
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('user selected a quiz', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: '',
		category: 'IPL',
		currentQuiz: [
			{
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
			},
			{
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
			}
		]
	};
	const action_type: Action_Type = {
		type: 'SET_CURRENT_QUIZ',

		payload: {
			category: 'IPL',
			quiz: [
				{
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
				},
				{
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
				}
			]
		}
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set all the quizzes in the state', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: '',
		categories: [ 'IPL', 'T20I' ],
		quizzes: [
			{
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
			},
			{
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
			},
			{
				question: 'Which two countries played the first T20 International game?',
				category: 'T20I',
				bonuspoints: 2,
				negativepoints: -1,
				options: [
					{
						optionvalue: 'ENG vs NZ(Women)',
						isCorrect: true
					},
					{
						optionvalue: 'AUS vs ENG(Women)',
						isCorrect: false
					},
					{
						optionvalue: 'IND vs SA(Men)',
						isCorrect: false
					},
					{
						optionvalue: 'AUS vs NZ(Men)',
						isCorrect: false
					}
				]
			},
			{
				question: 'Who scored the first T20 International century?',
				points: 1,
				category: 'T20I',
				options: [
					{
						optionvalue: 'Suresh Raina',
						isCorrect: false
					},
					{
						optionvalue: 'KL Rahul',
						isCorrect: false
					},
					{
						optionvalue: 'Brendon McCullum',
						isCorrect: false
					},
					{
						optionvalue: 'Chris Gayle',
						isCorrect: true
					}
				]
			}
		]
	};
	const action_type: Action_Type = {
		type: 'SET_QUIZ',

		payload: {
			category: [ 'IPL', 'T20I' ],
			quiz: [
				{
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
				},
				{
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
				},
				{
					question: 'Which two countries played the first T20 International game?',
					category: 'T20I',
					bonuspoints: 2,
					negativepoints: -1,
					options: [
						{
							optionvalue: 'ENG vs NZ(Women)',
							isCorrect: true
						},
						{
							optionvalue: 'AUS vs ENG(Women)',
							isCorrect: false
						},
						{
							optionvalue: 'IND vs SA(Men)',
							isCorrect: false
						},
						{
							optionvalue: 'AUS vs NZ(Men)',
							isCorrect: false
						}
					]
				},
				{
					question: 'Who scored the first T20 International century?',
					points: 1,
					category: 'T20I',
					options: [
						{
							optionvalue: 'Suresh Raina',
							isCorrect: false
						},
						{
							optionvalue: 'KL Rahul',
							isCorrect: false
						},
						{
							optionvalue: 'Brendon McCullum',
							isCorrect: false
						},
						{
							optionvalue: 'Chris Gayle',
							isCorrect: true
						}
					]
				}
			]
		}
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('user has clicked an option', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const action_type: Action_Type = {
		type: 'OPTION_CLICKED',
		payload: {
			option: {
				optionvalue: 'Suresh Raina',
				isCorrect: false
			},
			value: true
		}
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: {
			optionvalue: 'Suresh Raina',
			isCorrect: false
		},
		isOptionClicked: true,
		optionsColor: ''
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set the color for the options', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const action_type: Action_Type = {
		type: 'SET_OPTION_COLOR',
		payload: {
			value: 'Green'
		}
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: 'Green'
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('move to the next question and update the score', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 2,
		currentQuesNumber: 4,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: 'Green'
	};
	const action_type: Action_Type = {
		type: 'NEXT_QUESTION',
		payload: {
			question: {
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
			},
			selectedOption: {
				optionvalue: '9',
				isCorrect: true
			}
		}
	};
	const finalStateValue: Quiz_State_Type = {
		score: 4,
		currentQuesNumber: 5,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('reset the initial conditions', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 5,
		currentQuesNumber: 10,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};
	const action_type: Action_Type = {
		type: 'RESET'
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: ''
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('user selects the category to play', () => {
	const initialStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: '',
		quizzes: [
			{
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
			},
			{
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
			},
			{
				question: 'Which two countries played the first T20 International game?',
				category: 'T20I',
				bonuspoints: 2,
				negativepoints: -1,
				options: [
					{
						optionvalue: 'ENG vs NZ(Women)',
						isCorrect: true
					},
					{
						optionvalue: 'AUS vs ENG(Women)',
						isCorrect: false
					},
					{
						optionvalue: 'IND vs SA(Men)',
						isCorrect: false
					},
					{
						optionvalue: 'AUS vs NZ(Men)',
						isCorrect: false
					}
				]
			},
			{
				question: 'Who scored the first T20 International century?',
				points: 1,
				category: 'T20I',
				options: [
					{
						optionvalue: 'Suresh Raina',
						isCorrect: false
					},
					{
						optionvalue: 'KL Rahul',
						isCorrect: false
					},
					{
						optionvalue: 'Brendon McCullum',
						isCorrect: false
					},
					{
						optionvalue: 'Chris Gayle',
						isCorrect: true
					}
				]
			}
		]
	};
	const action_type: Action_Type = {
		type: 'SET_CATEGORY',
		payload: { category: 'IPL' }
	};
	const finalStateValue: Quiz_State_Type = {
		score: 0,
		currentQuesNumber: 1,
		username: '',
		selectedOption: null,
		isOptionClicked: false,
		optionsColor: '',
		category: 'IPL',
		quizzes: [
			{
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
			},
			{
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
			},
			{
				question: 'Which two countries played the first T20 International game?',
				category: 'T20I',
				bonuspoints: 2,
				negativepoints: -1,
				options: [
					{
						optionvalue: 'ENG vs NZ(Women)',
						isCorrect: true
					},
					{
						optionvalue: 'AUS vs ENG(Women)',
						isCorrect: false
					},
					{
						optionvalue: 'IND vs SA(Men)',
						isCorrect: false
					},
					{
						optionvalue: 'AUS vs NZ(Men)',
						isCorrect: false
					}
				]
			},
			{
				question: 'Who scored the first T20 International century?',
				points: 1,
				category: 'T20I',
				options: [
					{
						optionvalue: 'Suresh Raina',
						isCorrect: false
					},
					{
						optionvalue: 'KL Rahul',
						isCorrect: false
					},
					{
						optionvalue: 'Brendon McCullum',
						isCorrect: false
					},
					{
						optionvalue: 'Chris Gayle',
						isCorrect: true
					}
				]
			}
		],
		currentQuiz: [
			{
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
			},
			{
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
			}
		]
	};

	const stateValue = manageState(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});
