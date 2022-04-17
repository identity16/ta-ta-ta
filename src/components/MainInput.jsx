import './MainInput.scss';
import TimeInput from './TimeInput';

const UNIT_INFO = [
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

export default function MainInput({
  number = 25,
  unit = 'minute',
  handleNumberChange = () => {},
  handleUnitChange = () => {},
}) {
  return (
    <div className="MainInput">
      <TimeInput value={number} onChange={handleNumberChange.bind(this)} />
      <span className="MainInput__separator">:</span>
      <label className="MainInput__select-unit">
        <select
          className="MainInput__select"
          name="time-unit"
          onChange={handleUnitChange.bind(this)}
          value={unit}
        >
          {UNIT_INFO.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
        <article className="MainInput__select-visual">
          <p>{UNIT_INFO.find(u => u.value === unit).text}</p>
        </article>
      </label>
    </div>
  );
}
