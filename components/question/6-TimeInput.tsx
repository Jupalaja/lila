import { useQuestions, useSharedStates } from "@/contexts";
import {
  BtnContainer,
  DropdownSelect,
  DropdownSelectOption,
  Error,
  QuestionNumHeading,
} from "../index";
import classNames from "classnames";
import styles from "./Question.module.css";
import Image from "next/image";
import { TIMES } from "@/constants";
import { REMOVE_TIME, SET_TIMES } from "@/reducers";

export function TimeInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.times ?? "";
  const { name, times } = state;

  function handleDropdownOptionClick(_time: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.times;
        return prevValue;
      });

    if (times.includes(_time)) {
      dispatch({ type: REMOVE_TIME, payload: _time });
    } else {
      dispatch({ type: SET_TIMES, payload: _time });

    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={6}>
        ¿A qué hora puede {name.split(" ")[0]} tomar la clase? *
      </QuestionNumHeading>

      <div className={styles["time-dropdown-wrapper"]}>
        <DropdownSelect
          className={classNames(
            styles["grade-dropdown"],
            styles["course-dropdown"],
          )}
        >
          <div>
            {Object.keys(TIMES).map((timeKey) => {
              const _time = TIMES[timeKey];
              const isSelected = times.includes(_time);

              return (
                <DropdownSelectOption
                  key={timeKey}
                  className={classNames(
                    styles["grade-option"],
                    styles["course-option"],
                  )}
                  onClick={() => handleDropdownOptionClick(_time)}
                  isSelected={isSelected}
                >
                  <span
                    className={classNames({
                      [styles["selected"]]: isSelected,
                    })}
                  >
                    {timeKey}
                  </span>
                  <span className={styles["course"]}>{_time}</span>
                </DropdownSelectOption>
              );
            })}
          </div>
        </DropdownSelect>
      </div>

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === "" && (
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