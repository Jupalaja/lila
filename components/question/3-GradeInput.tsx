import {
  BtnContainer,
  DropdownSelect,
  DropdownSelectOption,
  Error,
  QuestionBoxPara,
  QuestionNumHeading,
} from "../index";
import classNames from "classnames";
import styles from "./Question.module.css";
import Image from "next/image";
import { useQuestions, useSharedStates } from "@/contexts";
import { GRADES } from "@/constants";
import { SET_GRADE } from "@/reducers";

export function GradeInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.grade ?? "";
  const { name, grade } = state;

  function handleDropdownOptionClick(_grade: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.grade;
        return prevValue;
      }); 

    if (_grade === grade) {
      dispatch({ type: SET_GRADE, payload: "" });
    } else {
      dispatch({ type: SET_GRADE, payload: _grade });
      setTimeout(() => handleOkClick(), 600);
    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={3}>
        ¿En qué grado está {name.split(" ")[0]}? *
      </QuestionNumHeading>

      <QuestionBoxPara>Selecciona un grado</QuestionBoxPara>

      <DropdownSelect className={styles["grade-dropdown"]}>
        <div>
          {Object.keys(GRADES).map((gradeKey) => {
            const _grade = GRADES[gradeKey];

            return (
              <DropdownSelectOption
                key={gradeKey}
                className={styles["grade-option"]}
                onClick={() => handleDropdownOptionClick(_grade)}
                isSelected={_grade === grade}
              >
                <span
                  className={classNames({
                    [styles["selected"]]: _grade === grade,
                  })}
                >
                  {gradeKey}
                </span>
                {_grade}
              </DropdownSelectOption>
            );
          })}
        </div>
      </DropdownSelect>

      {errorMsg && <Error message={errorMsg} />}

      {grade && errorMsg === "" && (
        <BtnContainer
          className={classNames(styles["btn-container"], styles["ok"])}
          showPressEnter={false}
          onClick={handleOkClick}
        >
          OK{" "}
          <Image
            src="/check-small.svg"
            alt="check small"
            width={34}
            height={34}
          />
        </BtnContainer>
      )}
    </>
  );
}
