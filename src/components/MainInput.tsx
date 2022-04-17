import TimeInput from './TimeInput';
import UnitSelect from './UnitSelect';
import styled from 'styled-components';
import React from 'react';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.span`
  font-size: 48px;
  font-weight: 800;
  margin: 0 12px;

  @media ${({ theme }) => theme.hMedia.sm} {
    font-size: 32px;
    margin: 0 8px;
  }
`;

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
