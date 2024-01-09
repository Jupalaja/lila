import { useQuestions, useSharedStates } from '@/contexts';
import {
  BtnContainer,
  DropdownSelect,
  DropdownSelectOption,
  Error,
  QuestionNumHeading,
} from '../index';
import classNames from 'classnames';
import styles from './Question.module.css';
import Image from 'next/image';
import { REMOVE_COURSE, SET_COURSES } from '@/reducers';
import { COURSES } from '@/constants';

export function CourseInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.courses ?? '';
  const { name, courses } = state;

  function handleDropdownOptionClick(_course: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.courses;
        return prevValue;
      });

    if (courses.includes(_course)) {
      dispatch({ type: REMOVE_COURSE, payload: _course });
    } else {
      dispatch({ type: SET_COURSES, payload: _course });
    }
  }

  return (
    <>
      <QuestionNumHeading questionNum={5}>
        ¿Qué materias debe reforzar {name.split(' ')[0]}? *
      </QuestionNumHeading>

      <DropdownSelect
        className={classNames(
          styles['grade-dropdown'],
          styles['course-dropdown']
        )}
      >
        <div>
          {Object.keys(COURSES).map((courseKey) => {
            const _course = COURSES[courseKey];
            const isSelected = courses.includes(_course);

            return (
              <DropdownSelectOption
                key={courseKey}
                className={classNames(
                  styles['grade-option'],
                  styles['course-option']
                )}
                onClick={() => handleDropdownOptionClick(_course)}
                isSelected={isSelected}
              >
                <span
                  className={classNames({
                    [styles['selected']]: isSelected,
                  })}
                >
                  {courseKey}
                </span>
                <span className={styles['course']}>{_course}</span>
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
