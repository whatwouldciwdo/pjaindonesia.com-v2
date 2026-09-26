'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTriggerOptions {
  animation: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideUp' | 'custom';
  trigger?: string;
  start?: string;
  end?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  scrub?: boolean | number;
  customAnimation?: (el: HTMLElement) => void;
}

export function useScrollTrigger<T extends HTMLElement = HTMLDivElement>(
  options: ScrollTriggerOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const {
      animation,
      start = 'top 80%',
      end = 'bottom 20%',
      duration = 0.8,
      delay = 0,
      stagger = 0,
      scrub = false,
    } = options;

    const ctx = gsap.context(() => {
      const baseConfig: gsap.TweenVars = {
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
        },
      };

      switch (animation) {
        case 'fadeInUp':
          gsap.from(el.children.length > 0 && stagger ? el.children : el, {
            ...baseConfig,
            opacity: 0,
            y: 40,
            stagger,
          });
          break;
        case 'fadeIn':
          gsap.from(el, { ...baseConfig, opacity: 0 });
          break;
        case 'scaleIn':
          gsap.from(el, { ...baseConfig, opacity: 0, scale: 0.95 });
          break;
        case 'slideUp':
          gsap.from(el, { ...baseConfig, opacity: 0, y: 60 });
          break;
        case 'custom':
          if (options.customAnimation) {
            options.customAnimation(el);
          }
          break;
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
