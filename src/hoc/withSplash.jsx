import { useState, useEffect, useContext } from 'react';
import Splash from '../components/Splash';
import { SplashContext } from '../contexts/splash';
import useViewportSize from '../hooks/useViewportSize';

const withSplash =
  (WrappedComponent, duration = 2500) =>
  props => {
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

export default withSplash;
