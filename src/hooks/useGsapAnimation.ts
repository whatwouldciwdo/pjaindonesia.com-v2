'use client';

import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapAnimation<T extends HTMLElement = HTMLDivElement>(
  animation: (el: T, tl: gsap.core.Timeline) => void,
  deps: any[] = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      animation(ref.current!, tl);
    }, ref);

    return () => ctx.revert();
  }, deps);

  return ref;
}
