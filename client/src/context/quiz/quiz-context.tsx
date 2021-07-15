import { createContext, useContext, useReducer, manageState } from '.'
import {
  Quiz_Context_Type,
  Quiz_State_Type,
  Quiz_Provider_Prop_Type,
} from './quiz-context.type'

export const initialStateValue: Quiz_State_Type = {
  score: 0,
  currentQuesNumber: 1,
  username: '',
  selectedOption: null,
  isOptionClicked: false,
  optionsColor: '',
}
export const QuizContext = createContext({})

export const QuizProvider = ({ children }: Quiz_Provider_Prop_Type) => {
  const [state, dispatch] = useReducer(manageState, initialStateValue)

  return (
    <QuizContext.Provider value={{ quizState: state, quizDispatch: dispatch }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = (): Quiz_Context_Type =>
  useContext(QuizContext) as Quiz_Context_Type
