export const questionsInitialState = {
  name: '',
  caretaker: '',
  school: '',
  grade: '',
  courses: [],
  days: [],
  times: [],
  phone: '',
  email: '',
  kind: '',
  address: '',
  topic: '',
  reference: '',
  referral: '',
  isComplete: false,
};

export type QuestionsStateType = {
  name: string;
  caretaker: string;
  school: string;
  grade: string;
  courses: string[];
  days: string[];
  times: string[];
  phone: string;
  email: string;
  kind: string;
  address: string;
  topic: string;
  reference: string;
  referral: string;
  isComplete: boolean;
};
