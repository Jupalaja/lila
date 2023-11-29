export const questionsInitialState = {
  name: "",
  school: "",
  grade: "",
  courses: [],
  days: [],
  times: [],
  phone: "",
  kind: "",
  address: "",
  isComplete: false,
};

export type QuestionsStateType = {
  name: string;
  school: string;
  grade: string;
  courses: string[];
  days: string[];
  times: string[];
  phone: string;
  kind: string;
  address: string;
  isComplete: boolean;
};
