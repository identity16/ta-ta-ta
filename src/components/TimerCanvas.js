import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import NoSleep from 'nosleep.js';
import { Timer } from '../timer';
import useViewportSize from '../hooks/useViewportSize';

const noSleep = new NoSleep();

const getTimerRadius = (stageWidth, stageHeight) => {
  return (Math.min(stageWidth, stageHeight) / 2) * 0.8;
};

export default function TimerCanvas({
  number,
  unit,
  onResume,
  onPause,
  onComplete,
}) {
  const { width: stageWidth, height: stageHeight } = useViewportSize();
  const refCanvas = useRef();
  const [context, setContext] = useState(null);

  const timer = useMemo(
    () =>
      new Timer({
        timeScale: unit,
        onResume,
        onPause,
        onComplete,
      }),
    [unit, onResume, onPause, onComplete],
  );

  useEffect(
    () => () => {
      if (timer) timer.disable();
    },
    [timer],
  );

  useEffect(() => {
    const eCanvas = refCanvas.current;
    if (eCanvas && context) {
      eCanvas.style.width = stageWidth + 'px';
      eCanvas.style.height = stageHeight + 'px';

      // Set actual size in memory (scaled to account for extra pixel density).
      const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.

      eCanvas.width = stageWidth * scale;
      eCanvas.height = stageHeight * scale;

      // Normalize coordinate system to use css pixels.
      context.scale(scale, scale);

      if (timer) {
        timer.resize(
          stageWidth / 2,
          stageHeight / 2,
          getTimerRadius(stageWidth, stageHeight),
        );
      }
    }
  }, [stageWidth, stageHeight, context, timer]);

  const animate = useCallback(
    t => {
      window.requestAnimationFrame(animate);
      context.clearRect(0, 0, stageWidth, stageHeight);

      timer.draw(context, t);
    },
    [timer, context, stageWidth, stageHeight],
  );

  useEffect(() => {
    const eCanvas = refCanvas.current;
    const enableNoSleep = () => {
      document.removeEventListener('click', enableNoSleep, false);
      noSleep.enable();
    };

    const togglePause = () => timer.togglePause();

    if (eCanvas && context) {
      document.addEventListener('click', togglePause);

      if (!timer.isStarted) {
        timer.start(number);
      }

      window.requestAnimationFrame(animate);

      document.addEventListener('click', enableNoSleep, false);
    } else {
      setContext(eCanvas.getContext('2d'));
    }

    return () => {
      noSleep.disable();
      document.removeEventListener('click', enableNoSleep);
      document.removeEventListener('click', togglePause);
    };
  }, [animate, context, number, timer]);

  return <canvas className="TimerCanvas" ref={refCanvas} />;
}
