import { SET_TOPIC } from '@/reducers';
import { ChangeEventHandler } from 'react';
import {
  BtnContainer,
  Error,
  QuestionNumHeading,
  QuestionBoxPara,
  QuestionInputText,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { useQuestions, useSharedStates } from '@/contexts';

export function TopicInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.topic ?? '';
  const { topic, name } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    errorMsg &&
      setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.topic;
        return prevValue;
      });

    dispatch({ type: SET_TOPIC, payload: event.target.value });
  };

  return (
    <>
      <QuestionNumHeading questionNum={11}>
        ¿Qué tema necesita reforzar {name.split(' ')[0]}?
      </QuestionNumHeading>
      <QuestionBoxPara>
        Esto nos ayuda a estar preparados para la clase
      </QuestionBoxPara>

      <QuestionInputText
        placeholder="Dirección..."
        value={topic}
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
