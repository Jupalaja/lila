import { TOTAL_QUESTIONS } from '@/constants';
import { questionsInitialState, questionsReducerFunc } from '@/reducers';
import { QuestionsContextType } from '@/types';
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

const QuestionsContext = createContext<QuestionsContextType>({
  state: questionsInitialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
  percent: 0,
});

type QuestionsProviderType = {
  readonly children: ReactNode;
};

export function QuestionsProvider({ children }: QuestionsProviderType) {
  const [state, dispatch] = useReducer(
    questionsReducerFunc,
    questionsInitialState
  );

  const percent = useMemo(
    function () {
      if (state.isComplete) return 100;
      let answeredQues = 0;
      const {
        name,
        caretaker,
        school,
        grade,
        courses,
        days,
        times,
        phone,
        email,
        kind,
        address,
        referral,
        reference,
      } = state;

      if (name) answeredQues += 1;
      if (caretaker) answeredQues += 1;
      if (school) answeredQues += 1;
      if (grade) answeredQues += 1;
      if (courses.length !== 0) answeredQues += 1;
      if (days.length !== 0) answeredQues += 1;
      if (times.length !== 0) answeredQues += 1;
      if (phone) answeredQues += 1;
      if (email) answeredQues += 1;
      if (kind) answeredQues += 1;
      if (address) answeredQues += 1;
      if (reference) answeredQues += 1;
      if (referral) answeredQues += 1;

      return (answeredQues * 100) / TOTAL_QUESTIONS;
    },
    [state]
  );

  const value = { state, dispatch, percent };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions(): QuestionsContextType {
  const context = useContext(QuestionsContext);

  if (context) {
    return context;
  }

  throw new Error('useQuestions must be use inside QuestionsProvider');
}
