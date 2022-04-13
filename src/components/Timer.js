import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Pause from './Pause';

import './Timer.scss';
import TimerCanvas from './TimerCanvas';

export default function Timer() {
  const [isPaused, setPaused] = useState(false);

  let { number, unit } = useParams();
  const history = useHistory();
  const onPause = useCallback(() => setPaused(true), []);
  const onResume = useCallback(() => setPaused(false), []);
  const onComplete = useCallback(() => {
    history.push(`/complete?number=${number}&unit=${unit}`);
  }, [history, number, unit]);

  return (
    <section className="Timer">
      <TimerCanvas
        number={number}
        unit={unit}
        onResume={onResume}
        onPause={onPause}
        onComplete={onComplete}
      />
      <Pause show={isPaused} />
    </section>
  );
}
