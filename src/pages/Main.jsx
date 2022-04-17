import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainInput from '../components/MainInput';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';

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
    top: 47%;
  }
`;

const ContentImage = styled.img`
  display: block;
  margin: 0 auto 36px;
  max-width: 420px;
  width: 100%;

  @media ${props => props.theme.hMedia.sm} {
    max-width: 200px;
    margin-bottom: 18px;
  }
`;

const ButtonSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  padding: 0 24px 56px;
  box-sizing: border-box;

  @media ${props => props.theme.hMedia.sm} {
    padding: 0;
  }
`;

const StartButton = styled(Link)`
  display: block;
  width: 100%;
  background-color: #e21e38;
  color: #fff;
  font-size: 20px;
  padding: 20px 0;
  font-weight: 600;
  text-decoration: none;
  line-height: 1;
  border-radius: 4px;

  @media ${props => props.theme.hMedia.sm} {
    font-size: 16px;
    padding: 16px 0;
    border-radius: 0;
  }

  &:hover {
    background-color: #b91c31;
  }
`;

export default function Main() {
  const defaultNumber = 25;
  const defaultMaxNumber = 60;
  const defaultUnit = 'minute';
  const [unit, setUnit] = useState(defaultUnit);
  const [number, setNumber] = useState(defaultNumber);

  const handleNumberChange = e => {
    let value = e.currentTarget.value === '' ? 0 : parseInt(e.target.value);

    if (isNaN(value)) {
      value = number;
    }

    if (value > defaultMaxNumber) {
      value = defaultMaxNumber;
    }

    setNumber(value);
  };

  const handleUnitChange = e => {
    setUnit(e.currentTarget.value);
  };

  useEffect(() => {
    if (window.localStorage) {
      const cachedNumber = window.localStorage.getItem('number');
      const cachedUnit = window.localStorage.getItem('unit');

      if (cachedNumber) {
        setNumber(cachedNumber);
      }

      if (cachedUnit) {
        setUnit(cachedUnit);
      }
    }
  }, []);

  useEffect(() => {
    if (window.localStorage) {
      window.localStorage.setItem('number', number);
      window.localStorage.setItem('unit', unit);
    }
  }, [number, unit]);

  return (
    <PageContainer>
      <Title>타타타</Title>
      <ContentSection>
        <ContentImage src="/img/main-img.png" alt="Man grabbing timer pin" />
        <MainInput
          number={number}
          unit={unit}
          handleNumberChange={handleNumberChange}
          handleUnitChange={handleUnitChange}
        />
      </ContentSection>
      <ButtonSection>
        <StartButton to={`/timer/${unit}/${number}`}>시작하기</StartButton>
      </ButtonSection>
    </PageContainer>
  );
}
