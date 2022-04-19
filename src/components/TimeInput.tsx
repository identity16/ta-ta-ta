import React, { useCallback } from 'react';
import { clamp } from '../_common/util';
import { Label, Input } from './TimeInput.styled';

const TIME_MIN = 0;
const TIME_MAX = 60;

const autoSelect = (elem: HTMLInputElement) => {
  if (elem.select) {
    elem.select();
  } else {
    elem.setSelectionRange(0, elem.value.length);
  }
};

interface TimeInputProps {
  value: number;
  onChange: (event?: React.FormEvent<HTMLInputElement>) => void;
}

function TimeInput({ value, onChange }: TimeInputProps) {
  const onClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    autoSelect(e.currentTarget);
  }, []);

  return (
    <Label>
      <Input
        type="number"
        min={TIME_MIN}
        max={TIME_MAX}
        value={clamp(value, TIME_MIN, TIME_MAX)}
        onClick={onClick}
        onChange={onChange}
      />
    </Label>
  );
}

export default TimeInput;
