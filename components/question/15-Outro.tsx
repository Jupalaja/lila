import { useState } from 'react';
import { QuestionBoxHeading, QuestionBoxPara, BtnContainer } from '../index';
import { useQuestions } from '@/contexts';
import { postData } from '@/utils';
import styles from './Question.module.css';
import { useSharedStates } from '@/contexts';

export function Outro() {
  const { state, dispatch } = useQuestions();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const { setScrollEnabled } = useSharedStates();

  const handleOnClick = async () => {
    if (submitting) return;
    if (submitted) window.location.href = 'https://sherpal.co';

    setSubmitting(true);

    const {
      name,
      caretaker,
      school,
      grade,
      courses,
      days,
      times,
      phone,
      email,
      kind,
      address,
      topic,
      reference,
      referral,
    } = state;
    const dataToSend = {
      name,
      caretaker,
      school,
      grade,
      courses,
      days,
      times,
      phone,
      email,
      kind,
      address,
      topic,
      reference,
      referral,
    };

    console.log('Sending Data:', dataToSend);

    const success = await postData(dataToSend);

    if (success) {
      setSubmitted(true);
      setSuccess(true);
      dispatch({ type: 'SET_COMPLETE' });
      setScrollEnabled(false);
    }

    setSubmitting(false);
  };

  return (
    <>
      <QuestionBoxHeading>¡Todo listo!</QuestionBoxHeading>
      <QuestionBoxPara>
        Al dar click en enviar, estás aceptando los{' '}
        <a href="https://sherpal.co/tyc-estudiantes/" target="_blank">
          términos y condiciones
        </a>{' '}
        de uso de la plataforma
      </QuestionBoxPara>
      {success && (
        <>
          <QuestionBoxPara className={submitted ? styles.rendered : ''}>
            Te contactaremos en el transcurso del dia para confirmar la tutoría!
          </QuestionBoxPara>
        </>
      )}
      <BtnContainer
        showPressEnter={false}
        onClick={handleOnClick}
        className={`${
          submitting || submitted ? styles.successfulSubmission : ''
        } ${submitting ? styles.btnLoading : ''}`}
      >
        {submitting ? 'Cargando...' : submitted ? 'Volver a Inicio' : 'Enviar'}
      </BtnContainer>
    </>
  );
}
