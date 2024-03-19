import {
  BtnContainer,
  DropdownSelect,
  DropdownSelectOption,
  Error,
  QuestionBoxPara,
  QuestionNumHeading,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { useQuestions, useSharedStates } from '@/contexts';
import { REFERENCE } from '@/constants';
import { SET_REFERENCE } from '@/reducers';

export function ReferenceInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.reference ?? '';
  const { reference } = state;

  function handleDropdownOptionClick(_reference: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.reference;
        return prevValue;
      });

    if (_reference === reference) {
      dispatch({ type: SET_REFERENCE, payload: '' });
    } else {
      dispatch({ type: SET_REFERENCE, payload: _reference });
      setTimeout(() => handleOkClick(), 600);
    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={13}>
        ¿Cómo te enteraste de nosotros?
      </QuestionNumHeading>

      <QuestionBoxPara>Selecciona una opción</QuestionBoxPara>

      <DropdownSelect
        className={classNames(
          styles['grade-dropdown'],
          styles['course-dropdown']
        )}
      >
        <div>
          {Object.keys(REFERENCE).map((referenceKey) => {
            const _reference = REFERENCE[referenceKey];

            return (
              <DropdownSelectOption
                key={referenceKey}
                className={styles['grade-option']}
                onClick={() => handleDropdownOptionClick(_reference)}
                isSelected={_reference === reference}
              >
                <span
                  className={classNames({
                    [styles['selected']]: _reference === reference,
                  })}
                >
                  {referenceKey}
                </span>
                {_reference}
              </DropdownSelectOption>
            );
          })}
        </div>
      </DropdownSelect>

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
