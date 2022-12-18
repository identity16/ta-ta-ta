import { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import withSplash from '../hoc/withSplash';
import { Unit } from '../_common/type';
import PageContainer from './PageContainer';
import Pause from './Pause';
import TimerCanvas from './TimerCanvas';

function Timer() {
  const [isPaused, setPaused] = useState(false);

  const { number, unit } = useParams<{ number: string; unit: Unit }>();
  const history = useHistory();
  const onPause = useCallback(() => setPaused(true), []);
  const onResume = useCallback(() => setPaused(false), []);
  const onComplete = useCallback(() => {
    history.push(`/complete?number=${number}&unit=${unit}`);
  }, [history, number, unit]);

  return (
    <PageContainer type="fullwidth">
      <TimerCanvas
        number={parseInt(number)}
        unit={unit}
        onResume={onResume}
        onPause={onPause}
        onComplete={onComplete}
      />
      {isPaused && <Pause />}
    </PageContainer>
  );
}

export default withSplash(Timer);