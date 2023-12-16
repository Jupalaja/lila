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
  topic: "",
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
  topic: string;
  isComplete: boolean;
};
