import { useState, useEffect, useCallback } from 'react';
import { getViewportSize } from '../_common/util';

export default function useViewportSize() {
  const [size, setSize] = useState<ViewportSize>({ width: 0, height: 0 });

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
