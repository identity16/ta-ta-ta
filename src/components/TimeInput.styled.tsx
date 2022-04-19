import styled from 'styled-components';
import { inputStyle } from '../style/mixin';

export const Label = styled.label`
  width: 120px;
  height: 70px;
  line-height: 70px;
  border: 0;
  border-radius: 6px;
  box-shadow: 2px 3px 4px 0 rgba(176, 176, 176, 0.5);
  overflow: hidden;

  background-color: #fafafa;

  @media ${({ theme }) => theme.hMedia.sm} {
    width: 96px;
    height: 54px;
    line-height: 54px;
  }
`;

export const Input = styled.input`
  ${inputStyle}

  /* Firefox */
display: block;
  width: 100%;
  height: 100%;

  border: solid 1px #d7dae0;
  border-radius: 6px;

  font-size: 40px;
  font-weight: 800;
  -webkit-appearance: none;
  -moz-appearance: textfield;

  @media ${props => props.theme.hMedia.sm} {
    font-size: 28px;
    padding: 0 12px;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:active,
  &:focus {
    border: solid 1px #e21e38;
    outline: 0;
  }
`;
