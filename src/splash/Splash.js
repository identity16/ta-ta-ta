import React from "react";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";

import "./Splash.scss";

export default function Splash({ delay }) {
  const history = useHistory();
  setTimeout(() => {
    history.push("/main");
  }, delay);

  return (
    <section className="Splash">
      <Logo withText={true} />
    </section>
  );
}
