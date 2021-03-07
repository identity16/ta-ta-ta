import React, { useRef } from "react";

import "./Pause.scss";

export default function Pause({ show = false }) {
  const ref = useRef();

  return (
    <section className={"Pause" + (show ? " show" : "")} ref={ref}>
      <img src="/img/icon-pause.png" alt="Pause Icon" />
    </section>
  );
}
