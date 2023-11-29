import { SET_ADDRESS } from "@/reducers";
import { ChangeEventHandler } from "react";
import {
  BtnContainer,
  Error,
  QuestionNumHeading,
  QuestionBoxPara,
  QuestionInputText
} from "../index";
import classNames from "classnames";
import styles from "./Question.module.css";
import Image from "next/image";
import { useQuestions, useSharedStates } from "@/contexts";

export function AddressInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.address ?? "";
  const { address } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.address;
        return prevValue;
      });

    dispatch({ type: SET_ADDRESS, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={9}>
        ¿Cual es tu dirección?
      </QuestionNumHeading>
      <QuestionBoxPara>
      🐇 (Puedes saltarte este paso si lo prefieres) 
      </QuestionBoxPara>

      <QuestionInputText
        placeholder="Dirección..."
        value={address}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === "" && (
        <BtnContainer
          className={classNames(styles["btn-container"], styles["ok"])}
          showPressEnter={true}
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
