'use client';

import { useEffect } from 'react';

export function useViewportHeight() {
  useEffect(() => {
    function updateVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    updateVh();
    window.addEventListener('resize', updateVh, { passive: true });
    window.addEventListener('orientationchange', updateVh, { passive: true });

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);
}
