import React, { useState, useEffect } from 'react';
import Splash from '../components/Splash';
import useViewportSize from '../hooks/useViewportSize';

const withSplash =
  (WrappedComponent, duration = 2500) =>
  props => {
    const { width, height } = useViewportSize();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setLoading(false);
      }, duration);

      return () => clearTimeout(timerId);
    }, []);

    return loading ? (
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
