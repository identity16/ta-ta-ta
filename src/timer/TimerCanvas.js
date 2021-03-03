import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import NoSleep from "nosleep.js";
import { getViewportSize, toggleFullscreen } from "../_common/util";
import { Timer } from "./components/timer";

import "./Timer.scss";

const noSleep = new NoSleep();

const getTimerRadius = (stageWidth, stageHeight) => {
  return (Math.min(stageWidth, stageHeight) / 2) * 0.8;
};

export default function TimerCanvas({ number, unit, onComplete }) {
  const refCanvas = useRef();
  const [stageWidth, setStageWidth] = useState();
  const [stageHeight, setStageHeight] = useState();
  const [context, setContext] = useState(null);

  const timer = useMemo(
    () =>
      new Timer({
        timeScale: unit,
        onComplete,
      }),
    [unit, onComplete]
  );

  const onResize = useCallback(() => {
    const viewportSize = getViewportSize();
    setStageWidth(viewportSize.width);
    setStageHeight(viewportSize.height);
  }, [setStageWidth, setStageHeight]);

  useEffect(() => {
    const eCanvas = refCanvas.current;
    if (eCanvas && context) {
      eCanvas.width = stageWidth;
      eCanvas.height = stageHeight;

      if (timer) {
        timer.resize(
          stageWidth / 2,
          stageHeight / 2,
          getTimerRadius(stageWidth, stageHeight)
        );
      }
    }
  }, [stageWidth, stageHeight, context, timer]);

  const animate = useCallback(
    (t) => {
      if (timer.isRunning) {
        window.requestAnimationFrame(animate);
        context.clearRect(0, 0, stageWidth, stageHeight);

        timer.draw(context, t);
      }
    },
    [timer, context, stageWidth, stageHeight]
  );

  useEffect(() => {
    const eCanvas = refCanvas.current;
    const enableNoSleep = () => {
      document.removeEventListener("click", enableNoSleep, false);
      noSleep.enable();
    };

    window.addEventListener("resize", onResize, false);

    if (eCanvas && context) {
      eCanvas.addEventListener("dblclick", toggleFullscreen);

      if (!timer.isRunning) {
        timer.start(number);
      }

      onResize();

      window.requestAnimationFrame(animate);

      document.addEventListener("click", enableNoSleep, false);
    } else {
      setContext(eCanvas.getContext("2d"));
    }

    return () => {
      noSleep.disable();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("click", enableNoSleep);
      eCanvas.removeEventListener("dblClick", toggleFullscreen);
    };
  }, [animate, context, number, onResize, timer]);

  return <canvas className="TimerCanvas" ref={refCanvas} />;
}
