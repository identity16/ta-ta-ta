import styled, { keyframes } from 'styled-components';

export const animLogo = keyframes`
  from {
    left: 50%;
  }

  to {
    left: calc(50% - 78px);
  }
`;

export const animTitle = keyframes`
  from {
    left: calc(50% - 68px);
    opacity: 0;
  }

  to {
    left: calc(50% + 48px);
    opacity: 1;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: 0.5s ease-out ${animLogo} forwards 0.5s;
  z-index: 2;
  width: 76px;
`;

export const Title = styled.p`
  position: absolute;
  top: 50%;
  left: calc(50% - 78px);
  transform: translate(-50%, -50%);

  line-height: 1;

  margin: 0;

  opacity: 0;

  font-size: 48px;
  font-weight: 800;
  color: #333;

  animation: 0.8s ease-out ${animTitle} forwards 1s;
`;

interface SplashBlockProps {
  width: number;
  height: number;
}

export const SplashBlock = styled.section<SplashBlockProps>`
  margin: 0 auto;
  position: relative;

  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #fff;

  @media ${({ theme }) => theme.wMedia.sm} {
    max-width: ${({ theme }) => theme.containerWidth};

    box-shadow: 8px 4px 4px 0 #f6f6f6;
  }

  ${Logo} {
    transition: all 0.5s ease-in;
  }
`;
