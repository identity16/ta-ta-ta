import TimeInput from './TimeInput';
import UnitSelect from './UnitSelect';
import React from 'react';
import { InputContainer, Separator } from './MainInput.styled';
import { Unit } from '../_common/type';

interface MainInputProps {
  number: number;
  unit: Unit;
  handleNumberChange: (event?: React.FormEvent<HTMLInputElement>) => void;
  handleUnitChange: (event?: React.FormEvent<HTMLSelectElement>) => void;
}

export default function MainInput({
  number = 25,
  unit = 'minute',
  handleNumberChange = () => {},
  handleUnitChange = () => {},
}: MainInputProps) {
  return (
    <InputContainer>
      <TimeInput value={number} onChange={handleNumberChange} />
      <Separator>:</Separator>
      <UnitSelect onChange={handleUnitChange} value={unit} />
    </InputContainer>
  );
}
