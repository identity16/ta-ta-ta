import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import NoSleep from 'nosleep.js';
import { Timer } from '../timer';
import useViewportSize from '../hooks/useViewportSize';
import { Unit } from '../_common/type';

const noSleep = new NoSleep();

const getTimerRadius = (stageWidth: number, stageHeight: number) => {
  return (Math.min(stageWidth, stageHeight) / 2) * 0.8;
};

interface TimerCanvasProps {
  number: number;
  unit: Unit;
  onResume: () => void;
  onPause: () => void;
  onComplete: () => void;
}

export default function TimerCanvas({
  number,
  unit,
  onResume,
  onPause,
  onComplete,
}: TimerCanvasProps) {
  const { width: stageWidth, height: stageHeight } = useViewportSize();
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const timer = useMemo(
    () =>
      new Timer({
        x: stageWidth / 2,
        y: stageHeight / 2,
        radius: getTimerRadius(stageWidth, stageHeight),
        timeScale: unit,
        onResume,
        onPause,
        onComplete,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
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

  const animate: FrameRequestCallback = useCallback(
    t => {
      window.requestAnimationFrame(animate);
      if (context) {
        context.clearRect(0, 0, stageWidth, stageHeight);

        timer.draw(context);
      }
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
      setContext(eCanvas?.getContext('2d') ?? null);
    }

    return () => {
      noSleep.disable();
      document.removeEventListener('click', enableNoSleep);
      document.removeEventListener('click', togglePause);
    };
  }, [animate, context, number, timer]);

  return <canvas className="TimerCanvas" ref={refCanvas} />;
}
