import React, { useState, useEffect } from 'react';
import useViewportSize from '../hooks/useViewportSize';
import './Splash.scss';

function LoadingMessage({ width, height }) {
  return (
    <section
      className="Splash"
      style={{
        width,
        height,
      }}
    >
      <img src="/img/logo.svg" alt="Ta-Ta-Ta Logo" />
      <p>타타타</p>
    </section>
  );
}

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
      <LoadingMessage width={width} height={height} />
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default withSplash;
