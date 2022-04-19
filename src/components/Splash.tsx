import { SplashBlock, Logo, Title } from './Splash.styled';

interface SplashProps {
  title: string;
  imgSrc: string;
  width: number;
  height: number;
}

export default function Splash({ title, imgSrc, width, height }: SplashProps) {
  return (
    <SplashBlock width={width} height={height}>
      <Logo src={imgSrc} alt={title} />
      <Title>{title}</Title>
    </SplashBlock>
  );
}
