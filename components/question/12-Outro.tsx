// ./components/question/Outro.tsx
import { useState } from 'react';
import { QuestionBoxHeading, QuestionBoxPara, BtnContainer } from '../index';
import { useQuestions } from '@/contexts';
import { postData } from '@/utils';
import styles from './Question.module.css';

export function Outro() {
  const { state, dispatch } = useQuestions();
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOnClick = async () => {
    if (submitted) return;

    const {
      name,
      caretaker,
      school,
      grade,
      courses,
      days,
      times,
      phone,
      kind,
      address,
      topic,
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
      kind,
      address,
      topic,
    };

    console.log('Sending Data:', dataToSend);

    const success = await postData(dataToSend);

    if (success) {
      setSubmitted(true);
      setSuccess(true);
      dispatch({ type: 'SET_COMPLETE' });
    }
  };

  const buttonClass = submitted ? styles.successfulSubmission : '';

  return (
    <>
      <QuestionBoxHeading>¡Todo listo!</QuestionBoxHeading>
      <QuestionBoxPara>
        Al dar click en enviar, estás aceptando los{' '}
        <a href="https://sherpal.co/tyc-estudiantes/" target="_blank">
          términos y condiciones
        </a>{' '}
        de uso de la plataforma.
      </QuestionBoxPara>
      {success && (
        <QuestionBoxPara className={submitted ? styles.rendered : ''}>
          Te contactaremos en el transcurso del dia para confirmar la tutoría!
        </QuestionBoxPara>
      )}
      <BtnContainer
        showPressEnter={false}
        onClick={handleOnClick}
        className={buttonClass}
      >
        {submitted ? 'Enviado' : 'Enviar'}
      </BtnContainer>
    </>
  );
}
