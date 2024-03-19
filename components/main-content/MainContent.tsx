import { useQuestions, useSharedStates } from '@/contexts';
import { useHandleKeypress, useHandleScroll } from '@/hooks';
import { useEffect } from 'react';
import { Question } from '../index';

export function MainContent() {
  const { questionNum, setShowSchoolsList } = useSharedStates();
  const { prev, now } = questionNum;
  const { state } = useQuestions();
  const { kind, reference } = state;

  useHandleKeypress();
  useHandleScroll();

  useEffect(() => {
    function handleClick() {
      setShowSchoolsList(false);
    }

    document.addEventListener('click', handleClick);

    return function () {
      document.removeEventListener('click', handleClick);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div>
        <Question
          type="intro"
          outView={now - 1 === 0 || now > 1}
          outViewSlide="up"
          inView={now === 0}
          inViewSlide={prev === 1 ? 'down' : ''}
          isRendered={prev === null}
        />

        {[0, 2].includes(prev ?? -1) && [now - 1, now, now + 1].includes(1) && (
          <Question
            type="name"
            outView={[now - 1, now + 1].includes(1)}
            outViewSlide={now - 1 === 1 ? 'up' : 'down'}
            inView={now === 1}
            inViewSlide={prev === 2 ? 'down' : 'up'}
          />
        )}

        {[1, 3].includes(prev ?? 0) && [now - 1, now, now + 1].includes(2) && (
          <Question
            type="caretaker"
            outView={[now - 1, now + 1].includes(2)}
            outViewSlide={now - 1 === 2 ? 'up' : 'down'}
            inView={now === 2}
            inViewSlide={prev === 3 ? 'down' : 'up'}
          />
        )}

        {[2, 4].includes(prev ?? 0) && [now - 1, now, now + 1].includes(3) && (
          <Question
            type="school"
            outView={[now - 1, now + 1].includes(3)}
            outViewSlide={now - 1 === 3 ? 'up' : 'down'}
            inView={now === 3}
            inViewSlide={prev === 4 ? 'down' : 'up'}
          />
        )}

        {[3, 5].includes(prev ?? 0) && [now - 1, now, now + 1].includes(4) && (
          <Question
            type="grade"
            outView={[now - 1, now + 1].includes(4)}
            outViewSlide={now - 1 === 4 ? 'up' : 'down'}
            inView={now === 4}
            inViewSlide={prev === 5 ? 'down' : 'up'}
          />
        )}

        {[4, 6].includes(prev ?? 0) && [now - 1, now, now + 1].includes(5) && (
          <Question
            type="course"
            outView={[now - 1, now + 1].includes(5)}
            outViewSlide={now - 1 === 5 ? 'up' : 'down'}
            inView={now === 5}
            inViewSlide={prev === 6 ? 'down' : 'up'}
          />
        )}

        {[5, 7].includes(prev ?? 0) && [now - 1, now, now + 1].includes(6) && (
          <Question
            type="day"
            outView={[now - 1, now + 1].includes(6)}
            outViewSlide={now - 1 === 6 ? 'up' : 'down'}
            inView={now === 6}
            inViewSlide={prev === 7 ? 'down' : 'up'}
          />
        )}

        {[6, 8].includes(prev ?? 0) && [now - 1, now, now + 1].includes(7) && (
          <Question
            type="time"
            outView={[now - 1, now + 1].includes(7)}
            outViewSlide={now - 1 === 7 ? 'up' : 'down'}
            inView={now === 7}
            inViewSlide={prev === 8 ? 'down' : 'up'}
          />
        )}

        {[7, 9].includes(prev ?? 0) && [now - 1, now, now + 1].includes(8) && (
          <Question
            type="phone"
            outView={[now - 1, now + 1].includes(8)}
            outViewSlide={now - 1 === 8 ? 'up' : 'down'}
            inView={now === 8}
            inViewSlide={prev === 9 ? 'down' : 'up'}
          />
        )}

        {[8, 10].includes(prev ?? 0) && [now - 1, now, now + 1].includes(9) && (
          <Question
            type="email"
            outView={[now - 1, now + 1].includes(9)}
            outViewSlide={now - 1 === 9 ? 'up' : 'down'}
            inView={now === 9}
            inViewSlide={prev === 10 ? 'down' : 'up'}
          />
        )}

        {[9, 11].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(10) && (
            <Question
              type="kind"
              outView={[now - 1, now + 1].includes(10)}
              outViewSlide={now - 1 === 10 ? 'up' : 'down'}
              inView={now === 10}
              inViewSlide={prev === 11 ? 'down' : 'up'}
            />
          )}

        {kind !== 'Virtual' &&
          [10, 12].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(11) && (
            <Question
              type="address"
              outView={[now - 1, now + 1].includes(11)}
              outViewSlide={now - 1 === 11 ? 'up' : 'down'}
              inView={now === 11}
              inViewSlide={prev === 12 ? 'down' : 'up'}
            />
          )}

        {kind !== 'Virtual' &&
          [11, 13].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(12) && (
            <Question
              type="topic"
              outView={[now - 1, now + 1].includes(12)}
              outViewSlide={now - 1 === 12 ? 'up' : 'down'}
              inView={now === 12}
              inViewSlide={prev === 13 ? 'down' : 'up'}
            />
          )}

        {kind !== 'Virtual' &&
          [12, 14].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(13) && (
            <Question
              type="reference"
              outView={[now - 1, now + 1].includes(13)}
              outViewSlide={now - 1 === 13 ? 'up' : 'down'}
              inView={now === 13}
              inViewSlide={prev === 14 ? 'down' : 'up'}
            />
          )}

        {kind !== 'Virtual' &&
          (reference === 'Recomendación de un profesor' ||
            reference === 'Recomendación de un amigo') &&
          [13, 15].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(14) && (
            <Question
              type="referral"
              outView={[now - 1, now + 1].includes(14)}
              outViewSlide={now - 1 === 14 ? 'up' : 'down'}
              inView={now === 14}
              inViewSlide={prev === 15 ? 'down' : 'up'}
            />
          )}

        {kind !== 'Virtual' &&
          (reference === 'Recomendación de un profesor' ||
            reference === 'Recomendación de un amigo') &&
          prev === 14 &&
          [now - 1, now, now + 1].includes(15) && (
            <Question
              type="outro"
              outView={[now - 1, now + 1].includes(15)}
              outViewSlide={now - 1 === 15 ? 'up' : 'down'}
              inView={now === 15}
              inViewSlide={'up'}
            />
          )}

        {kind !== 'Virtual' &&
          reference !== 'Recomendación de un profesor' &&
          reference !== 'Recomendación de un amigo' &&
          prev === 13 &&
          [now - 1, now, now + 1].includes(14) && (
            <Question
              type="outro"
              outView={[now - 1, now + 1].includes(14)}
              outViewSlide={now - 1 === 14 ? 'up' : 'down'}
              inView={now === 14}
              inViewSlide={'up'}
            />
          )}

        {kind === 'Virtual' &&
          [10, 12].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(11) && (
            <Question
              type="topic"
              outView={[now - 1, now + 1].includes(11)}
              outViewSlide={now - 1 === 11 ? 'up' : 'down'}
              inView={now === 11}
              inViewSlide={prev === 12 ? 'down' : 'up'}
            />
          )}

        {kind === 'Virtual' &&
          [11, 13].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(12) && (
            <Question
              type="reference"
              outView={[now - 1, now + 1].includes(12)}
              outViewSlide={now - 1 === 12 ? 'up' : 'down'}
              inView={now === 12}
              inViewSlide={prev === 13 ? 'down' : 'up'}
            />
          )}

        {kind === 'Virtual' &&
          (reference === 'Recomendación de un profesor' ||
            reference === 'Recomendación de un amigo') &&
          [12, 14].includes(prev ?? 0) &&
          [now - 1, now, now + 1].includes(13) && (
            <Question
              type="referral"
              outView={[now - 1, now + 1].includes(13)}
              outViewSlide={now - 1 === 13 ? 'up' : 'down'}
              inView={now === 13}
              inViewSlide={prev === 14 ? 'down' : 'up'}
            />
          )}

        {kind === 'Virtual' &&
          (reference === 'Recomendación de un profesor' ||
            reference === 'Recomendación de un amigo') &&
          prev === 13 &&
          [now - 1, now, now + 1].includes(14) && (
            <Question
              type="outro"
              outView={[now - 1, now + 1].includes(14)}
              outViewSlide={now - 1 === 14 ? 'up' : 'down'}
              inView={now === 14}
              inViewSlide={'up'}
            />
          )}

        {kind === 'Virtual' &&
          reference !== 'Recomendación de un profesor' &&
          reference !== 'Recomendación de un amigo' &&
          prev === 12 &&
          [now - 1, now, now + 1].includes(13) && (
            <Question
              type="outro"
              outView={[now - 1, now + 1].includes(13)}
              outViewSlide={now - 1 === 13 ? 'up' : 'down'}
              inView={now === 13}
              inViewSlide={'up'}
            />
          )}
      </div>
    </section>
  );
}
