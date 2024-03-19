import { useQuestions, useSharedStates } from '@/contexts';
import {
  BtnContainer,
  DropdownSelect,
  DropdownSelectOption,
  Error,
  QuestionNumHeading,
  QuestionBoxPara,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { DAYS } from '@/constants';
import { REMOVE_DAY, SET_DAYS } from '@/reducers';

export function DayInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.days ?? '';
  const { name, days } = state;

  function handleDropdownOptionClick(_day: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.days;
        return prevValue;
      });

    if (days.includes(_day)) {
      dispatch({ type: REMOVE_DAY, payload: _day });
    } else {
      dispatch({ type: SET_DAYS, payload: _day });
    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={6}>
        ¿Qué días puede {name.split(' ')[0]} tomar la clase? *
      </QuestionNumHeading>
      {days.includes('Domingo') && (
        <QuestionBoxPara>
          <a>
            ¡Queremos darte la mejor atención durante la semana! 😊 <br />
            Por eso te recomendamos que no tomes clases los domingos <br />
          </a>
        </QuestionBoxPara>
      )}

      <DropdownSelect
        className={classNames(
          styles['grade-dropdown'],
          styles['course-dropdown']
        )}
      >
        <div>
          {Object.keys(DAYS).map((dayKey) => {
            const _day = DAYS[dayKey];
            const isSelected = days.includes(_day);

            return (
              <DropdownSelectOption
                key={dayKey}
                className={classNames(
                  styles['grade-option'],
                  styles['course-option']
                )}
                onClick={() => handleDropdownOptionClick(_day)}
                isSelected={isSelected}
              >
                <span
                  className={classNames({
                    [styles['selected']]: isSelected,
                  })}
                >
                  {dayKey}
                </span>
                <span className={styles['course']}>{_day}</span>
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
