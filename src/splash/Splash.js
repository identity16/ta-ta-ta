import React from "react";
import Logo from "../logo/Logo";

import "./Splash.scss";

export default function Splash() {
  return (
    <section className="Splash">
      <Logo withText={true} />
    </section>
  );
}
