import { useQuestions, useSharedStates } from "@/contexts";
import { useEffect } from "react";

export function useHandleKeypress() {
  const { questionNum, setErrorMsg, handleQuestionNumUpdate } =
    useSharedStates();

  const { now } = questionNum;
  const { state } = useQuestions();
  const { name, school, grade, courses, days, times, phone, kind } = state;

  useEffect(() => {
    function handleKeypress(event: KeyboardEvent) {
      if (event.key === "Enter") {
        event.preventDefault();

        if (now + 1 === 2 && name === "") {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            name: "Este campo es obligatorio",
          }));
          return;

        } else if (now + 1 === 3 && school === "") {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            school: "Este campo es obligatorio",
          }));
          return;

        } else if (now + 1 === 4 && grade === "") {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            grade: "Este campo es obligatorio",
          }));
          return;

        } else if (now + 1 === 5 && courses.length === 0) {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            courses: "Por favor selecciona una opción",
          }));
          return;

        } else if (now + 1 === 6 && days.length === 0) {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            days: "Por favor selecciona un dia",
          }));
          return;

        } else if (now + 1 === 7 && times.length === 0) {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            times: "Por favor selecciona una hora",
          }));
          return;

        } else if (now + 1 === 8 && kind === "") {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            kind: "Por favor selecciona una opción",
          }));
          return;

        } else if (now + 1 === 9 && phone === "") {
          setErrorMsg((prevValue) => ({
            ...prevValue,
            phone: "Por favor llena este campo",
          }));
          return;
        }        

        handleQuestionNumUpdate();
      }
    }

    document.addEventListener("keypress", handleKeypress);

    return function () {
      document.removeEventListener("keypress", handleKeypress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, school, days, times, phone, now, grade, courses, kind]);
}
