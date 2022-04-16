import React from 'react';
import styled from 'styled-components';

const PauseBlock = styled.section`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const PauseIcon = styled.img`
  object-fit: contain;
  max-width: 160px;
  width: 20%;
`;

export default function Pause() {
  return (
    <PauseBlock>
      <PauseIcon src="/img/icon-pause.png" alt="Pause Icon" />
    </PauseBlock>
  );
}
