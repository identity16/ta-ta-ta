import React from 'react';

import './MainInput.scss';

export default function MainInput({
  min = 0,
  max = 60,
  number = 25,
  unit = 'minute',
  handleNumberChange = () => {},
  handleUnitChange = () => {},
}) {
  const units = [
    {
      value: 'second',
      text: '초',
    },
    {
      value: 'minute',
      text: '분',
    },
    {
      value: 'hour',
      text: '시간',
    },
  ];

  const onInputClicked = e => {
    const eInput = e.target;
    if (eInput.select) {
      eInput.select();
    } else {
      eInput.setSelectionRange(0, eInput.value.length);
    }
  };

  return (
    <div className="MainInput">
      <label className="MainInput__input-number">
        <input
          className="MainInput__input"
          type="number"
          min={min}
          max={max}
          value={number > max ? max : number < min ? min : number}
          onClick={onInputClicked}
          onChange={handleNumberChange.bind(this)}
        />
      </label>
      <span className="MainInput__separator">:</span>
      <label className="MainInput__select-unit">
        <select
          className="MainInput__select"
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
        <article className="MainInput__select-visual">
          <p>{units.find(u => u.value === unit).text}</p>
        </article>
      </label>
    </div>
  );
}
