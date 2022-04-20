import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.span`
  font-size: 48px;
  font-weight: 800;
  margin: 0 12px;

  @media ${({ theme }) => theme.hMedia.sm} {
    font-size: 32px;
    margin: 0 8px;
  }
`;
