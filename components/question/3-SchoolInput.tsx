import {
  BtnContainer,
  Error,
  QuestionBoxPara,
  QuestionInputSchools,
  QuestionNumHeading,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { useQuestions, useSharedStates } from '@/contexts';

export function SchoolInput() {
  const { state } = useQuestions();
  const { name } = state;
  const {
    showSchoolsList,
    setShowSchoolsList,
    setErrorMsg,
    errorMsg: error,
    handleOkClick,
  } = useSharedStates();
  const errorMsg = error.school ?? '';

  return (
    <>
      <QuestionNumHeading questionNum={3}>
        ¿De qué colegio es {name.split(' ')[0]}? *
      </QuestionNumHeading>

      <QuestionBoxPara>
        Selecciona &quot;Otro&quot; en caso de que no aparezca en la lista
      </QuestionBoxPara>

      <QuestionInputSchools
        showSchoolsList={showSchoolsList}
        setShowSchoolsList={setShowSchoolsList}
        setErrorMsg={setErrorMsg}
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
