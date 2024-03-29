import {
  BtnContainer,
  Error,
  QuestionInputText,
  QuestionNumHeading,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { ChangeEventHandler } from 'react';
import { SET_NAME } from '@/reducers';
import { useQuestions, useSharedStates } from '@/contexts';

export function NameInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.name ?? '';
  const { name } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.name;
        return prevValue;
      });

    dispatch({ type: SET_NAME, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={1}>
        ¿Cómo se llama el estudiante? *
      </QuestionNumHeading>

      <QuestionInputText
        placeholder="Nombre estudiante..."
        value={name}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === '' && (
        <BtnContainer
          className={classNames(styles['btn-container'], styles['ok'])}
          showPressEnter={true}
          onClick={handleOkClick}
        >
          OK{' '}
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
