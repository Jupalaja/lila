import { ChangeEventHandler } from 'react';
import {
  BtnContainer,
  Error,
  QuestionNumHeading,
  QuestionInputText,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { useQuestions, useSharedStates } from '@/contexts';
import { SET_REFERRAL } from '@/reducers';

export function ReferralInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.referral ?? '';
  const { referral } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.referral;
        return prevValue;
      });

    dispatch({ type: SET_REFERRAL, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={14}>
        Ingresa el nombre de la persona que te refirió
      </QuestionNumHeading>

      <QuestionInputText
        placeholder="Nombre del contacto"
        value={referral}
        onChange={handleInputChange}
      />

      {errorMsg && <Error message={errorMsg} />}

      {errorMsg === '' && (
        <BtnContainer
          className={classNames(styles['btn-container'], styles['ok'])}
          showPressEnter={false}
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
