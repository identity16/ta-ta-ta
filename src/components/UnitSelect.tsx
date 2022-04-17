import React from 'react';
import styled, { css } from 'styled-components';
import { inputStyle } from '../style/mixin';

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

const Label = styled.label`
  position: relative;
  overflow: hidden;

  border-radius: 6px;
  box-shadow: 2px 3px 4px 0 rgba(176, 176, 176, 0.5);
`;

const selectStyle = css`
  width: 120px;
  height: 70px;
  line-height: 70px;
  background-color: #fafafa;
  font-size: 40px;
  padding: 0 20px;
  font-weight: 800;

  @media ${({ theme }) => theme.hMedia.sm} {
    width: 96px;
    height: 54px;
    line-height: 54px;

    font-size: 28px;
    padding: 0 12px;
  }
`;

const HiddenSelect = styled.select`
  ${inputStyle}
  ${selectStyle}

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  font-weight: normal;
  font-size: 28px;

  @media ${({ theme }) => theme.hMedia.sm} {
    font-size: 20px;
  }
`;

const VisualSelect = styled.article`
  ${selectStyle}

  border: solid 1px #d7dae0;
  border-radius: 6px;

  ${HiddenSelect}:focus + &,
  ${HiddenSelect}:active + & {
    border: solid 1px #e21e38;
  }

  p {
    margin: 0;
  }
`;

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
      <VisualSelect className="MainInput__select-visual">
        <p>{UNIT_INFO.find(u => u.value === value)?.text}</p>
      </VisualSelect>
    </Label>
  );
}

export default UnitSelect;
