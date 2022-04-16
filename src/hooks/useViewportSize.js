import { useState, useEffect, useCallback } from 'react';

const getViewportSize = () => ({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
});

export default function useViewportSize() {
  const [size, setSize] = useState({});

  const onResize = useCallback(() => {
    setSize(getViewportSize());
  }, []);

  useEffect(() => {
    onResize();

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);

  return size;
}
