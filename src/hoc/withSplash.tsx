import {
  useState,
  useEffect,
  useContext,
  ComponentProps,
  ComponentType,
} from 'react';
import Splash from '../components/Splash';
import { SplashContext } from '../contexts/splash';
import useViewportSize from '../hooks/useViewportSize';

function withSplash(WrappedComponent: ComponentType, duration: number = 2500) {
  return (props: ComponentProps<any>) => {
    const { width, height } = useViewportSize();
    const [loading, setLoading] = useState(true);
    const { shown, setShownFlag } = useContext(SplashContext);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setLoading(false);
      }, duration);

      return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
      if (!loading) {
        setShownFlag();
      }
    }, [loading, setShownFlag]);

    return !shown && loading ? (
      <Splash
        title="타타타"
        imgSrc="/img/logo.svg"
        width={width}
        height={height}
      />
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

export default withSplash;
