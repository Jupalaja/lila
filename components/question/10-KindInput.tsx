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
import { KINDS } from '@/constants';
import { SET_KIND } from '@/reducers';

export function KindInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.kind ?? '';
  const { name, kind } = state;

  function handleDropdownOptionClick(_kind: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.kind;
        return prevValue;
      });

    if (_kind === kind) {
      dispatch({ type: SET_KIND, payload: '' });
    } else {
      dispatch({ type: SET_KIND, payload: _kind });
      setTimeout(() => handleOkClick(), 600);
    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={10}>
        ¿Qué tipo de clases prefiere {name.split(' ')[0]}? *
      </QuestionNumHeading>

      <QuestionBoxPara>Selecciona una opción</QuestionBoxPara>

      <DropdownSelect
        showUpIndicator={false}
        showDownIndicator={false}
        className={styles['grade-dropdown']}
      >
        <div>
          {Object.keys(KINDS).map((kindKey) => {
            const _kind = KINDS[kindKey];

            return (
              <DropdownSelectOption
                key={kindKey}
                className={styles['grade-option']}
                onClick={() => handleDropdownOptionClick(_kind)}
                isSelected={_kind === kind}
              >
                <span
                  className={classNames({
                    [styles['selected']]: _kind === kind,
                  })}
                >
                  {kindKey}
                </span>
                {_kind}
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
