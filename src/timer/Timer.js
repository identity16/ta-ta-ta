import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./Timer.scss";
import TimerCanvas from "./TimerCanvas";

export default function Timer() {
  let { number, unit } = useParams();
  const history = useHistory();
  const onComplete = useCallback(() => history.push("/complete"), [history]);

  return (
    <section className="Timer">
      <TimerCanvas number={number} unit={unit} onComplete={onComplete} />
    </section>
  );
}
