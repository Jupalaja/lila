import {
  BtnContainer,
  Error,
  QuestionInputText,
  QuestionBoxPara,
  QuestionNumHeading,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { ChangeEventHandler } from 'react';
import { SET_CARETAKER } from '@/reducers';
import { useQuestions, useSharedStates } from '@/contexts';

export function CaretakerInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.caretaker ?? '';
  const { name, caretaker } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.caretaker;
        return prevValue;
      });

    dispatch({ type: SET_CARETAKER, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={2}>
        ¿Cómo se llama el acudiente de {name.split(' ')[0]}? *
      </QuestionNumHeading>
      <QuestionBoxPara>
        Debe ser el Padre/Madre o la persona a cargo
      </QuestionBoxPara>
      <QuestionInputText
        placeholder="Nombre acudiente..."
        value={caretaker}
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
