'use client';

import { useState, useEffect, useRef } from 'react';

interface UseHeaderScrollReturn {
  isVisible: boolean;
  isScrolled: boolean;
}

export function useHeaderScroll(threshold: number = 100): UseHeaderScrollReturn {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > threshold);
      
      if (currentScrollY < threshold) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isVisible, isScrolled };
}
