import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainInput from "./MainInput";

import "./Main.scss";

export default function Main() {
  const defaultNumber = 25;
  const defaultMaxNumber = 60;
  const defaultUnit = "minute";
  const [unit, setUnit] = useState(defaultUnit);
  const [number, setNumber] = useState(defaultNumber);

  const handleNumberChange = (e) => {
    let value = e.target.value === "" ? 0 : parseInt(e.target.value);

    if (isNaN(value)) {
      value = number;
    }

    if (value > defaultMaxNumber) {
      value = defaultMaxNumber;
    }

    setNumber(value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  useEffect(() => {
    if (window.localStorage) {
      const cachedNumber = window.localStorage.getItem("number");
      const cachedUnit = window.localStorage.getItem("unit");

      if (cachedNumber) {
        setNumber(cachedNumber);
      }

      if (cachedUnit) {
        setUnit(cachedUnit);
      }
    }
  }, []);

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem("number", number);
      window.localStorage.setItem("unit", unit);
    }
  }, [number, unit]);

  return (
    <section className="Main">
      <h1 className="Main__title">타타타</h1>

      <section className="Main__content">
        <img src="/img/main-img.png" alt="Man grabbing timer pin" />
        <MainInput
          number={number}
          unit={unit}
          handleNumberChange={handleNumberChange}
          handleUnitChange={handleUnitChange}
        />
      </section>

      <section className="Main__button-container">
        <Link to={`/timer/${unit}/${number}`} className="Main__button-start">
          시작하기
        </Link>
      </section>
    </section>
  );
}
