import React from 'react';
import styled, { css } from 'styled-components';

type LayoutType = 'fullwidth' | 'constrained';

interface PageContainerProps {
  type?: LayoutType;
  children?: React.ReactNode;
}

const StyledSection = styled.section<PageContainerProps>`
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;

  ${({ type }) =>
    type === 'constrained' &&
    css`
      @media ${({ theme }) => theme.wMedia.sm} {
        max-width: ${({ theme }) => theme.containerWidth};
        box-shadow: 8px 4px 4px 0 #f6f6f6;
      }
    `}
`;

function PageContainer({ type = 'constrained', children }: PageContainerProps) {
  return <StyledSection type={type}>{children}</StyledSection>;
}

export default PageContainer;
