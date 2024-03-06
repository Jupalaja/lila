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
import { REFERRALS } from '@/constants';
import { SET_REFERRAL } from '@/reducers';

export function ReferralInput() {
  const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
  const { state, dispatch } = useQuestions();

  const errorMsg = error.referral ?? '';
  const { referral } = state;

  function handleDropdownOptionClick(_referral: string) {
    setErrorMsg &&
      setErrorMsg((prevValue) => {
        delete prevValue.referral;
        return prevValue;
      });

    if (_referral === referral) {
      dispatch({ type: SET_REFERRAL, payload: '' });
    } else {
      dispatch({ type: SET_REFERRAL, payload: _referral });
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
          {Object.keys(REFERRALS).map((referralKey) => {
            const _referral = REFERRALS[referralKey];

            return (
              <DropdownSelectOption
                key={referralKey}
                className={styles['grade-option']}
                onClick={() => handleDropdownOptionClick(_referral)}
                isSelected={_referral === referral}
              >
                <span
                  className={classNames({
                    [styles['selected']]: _referral === referral,
                  })}
                >
                  {referralKey}
                </span>
                {_referral}
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
