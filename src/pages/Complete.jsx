import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PageBlock from '../components/PageBlock';

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

const Button = styled(Link)`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 0;
  color: #fff;
  border-radius: 4px;
  line-height: 1;
  text-decoration: none;
  background-color: ${props => props.background};
  color: ${props => props.text};

  @media ${props => props.theme.hMedia.sm} {
    font-size: 16px;
    padding: 16px 0;
    border-radius: 0;
  }

  &:hover {
    background-color: ${props => props.hover};
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Complete() {
  let query = useQuery();
  const number = query.get('number');
  const unit = query.get('unit');

  return (
    <PageBlock>
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
            hover="#b91c31"
            text="#fff"
          >
            한 번 더 시작
          </Button>
        )}
        <Button to={`/`} background="#49576a" hover="#1f252a" text="#fff">
          시간 재설정
        </Button>
      </ButtonSection>
    </PageBlock>
  );
}
