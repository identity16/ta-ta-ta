import React from 'react';
import { HiddenSelect, Label, VisualSelect } from './UnitSelect.styled';

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

interface UnitSelectProps {
  value: string;
  onChange: (event?: React.FormEvent<HTMLSelectElement>) => void;
}

function UnitSelect({ value, onChange }: UnitSelectProps) {
  return (
    <Label>
      <HiddenSelect name="time-unit" onChange={onChange} value={value}>
        {UNIT_INFO.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </HiddenSelect>
      <VisualSelect>
        <p>{UNIT_INFO.find(u => u.value === value)?.text}</p>
      </VisualSelect>
    </Label>
  );
}

export default UnitSelect;
