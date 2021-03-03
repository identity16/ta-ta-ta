import React from "react";

import "./InputCircle.scss";

export default function InputCircle({
  min = 0,
  max = 60,
  number = 25,
  unit = "minute",
  handleNumberChange = () => {},
  handleUnitChange = () => {},
}) {
  const units = [
    {
      value: "second",
      text: "초",
    },
    {
      value: "minute",
      text: "분",
    },
    {
      value: "hour",
      text: "시간",
    },
  ];

  const onInputClicked = (e) => {
    const eInput = e.target;
    eInput.setSelectionRange(0, eInput.value.length);
  };

  return (
    <div className="InputCircle">
      <input
        className="InputCircle__input-number"
        type="number"
        min={min}
        max={max}
        value={number > max ? max : number < min ? min : number}
        onClick={onInputClicked}
        onChange={handleNumberChange.bind(this)}
      />
      <select
        className="InputCircle__select-unit"
        name="time-unit"
        onChange={handleUnitChange.bind(this)}
        value={unit}
      >
        {units.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
