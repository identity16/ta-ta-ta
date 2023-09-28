import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { useQuery } from '../hooks/useQuery';

function CompletePage() {
  const query = useQuery();
  const number = useMemo(() => query.get('number'), [query]);
  const unit = useMemo(() => query.get('unit'), [query]);

  return (
    <PageContainer>
      <Title>타타타</Title>
      <ContentSection>
        <ContentImage
          src="/img/complete-img.png"
          alt="Man is checking on checklist beside timer"
        />
      </ContentSection>
      <ButtonSection>
        {number && unit && (
          <Button
            to={`/timer/${unit}/${number}`}
            background="#e21e38"
            hoverColor="#b91c31"
            color="#fff"
          >
            한 번 더 시작
          </Button>
        )}
        <Button to={`/`} background="#49576a" hoverColor="#1f252a" color="#fff">
          시간 재설정
        </Button>
      </ButtonSection>
    </PageContainer>
  );
}

export default CompletePage;

const Title = styled.h1`
  margin: 0;
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  color: #1c1c1c;
  line-height: 1;

  @media ${props => props.theme.hMedia.sm} {
    font-size: 20px;
    padding: 16px 0;
  }
`;

const ContentSection = styled.section`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  padding: 0 40px;

  @media ${props => props.theme.hMedia.sm} {
    top: 50%;
  }
`;

const ContentImage = styled.img`
  display: block;
  margin: 0 auto 36px;
  max-width: 420px;
  width: 100%;

  @media ${props => props.theme.hMedia.sm} {
    max-width: 220px;
    margin-bottom: 18px;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  gap: 8px;

  padding: 0 24px 56px;
  box-sizing: border-box;

  @media ${props => props.theme.hMedia.sm} {
    padding: 0;
    flex-direction: row;
    gap: 0;
  }
`;

const Button = styled(Link)<{
  background: string;
  color: string;
  hoverColor: string;
}>`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  color: #fff;
  border-radius: 4px;
  line-height: 1;
  text-decoration: none;
  background-color: ${props => props.background};
  color: ${props => props.color};

  @media ${props => props.theme.hMedia.sm} {
    font-size: 16px;
    padding: 16px 0;
    border-radius: 0;
  }

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;