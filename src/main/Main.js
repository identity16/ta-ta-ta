import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import InputCircle from "./InputCircle";

import "./Main.scss";

export default function Main() {
  const defaultNumber = 25;
  const defaultUnit = "minute";
  const [unit, setUnit] = useState(defaultUnit);
  const [number, setNumber] = useState(defaultNumber);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <section className="Main">
      <Logo withText={true} dir="horizontal" />
      <InputCircle
        number={number}
        unit={unit}
        handleNumberChange={handleNumberChange}
        handleUnitChange={handleUnitChange}
      />

      <Link to={`/timer/${unit}/${number}`} className="StartButton">
        시작
      </Link>
    </section>
  );
}
