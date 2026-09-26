'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useViewportHeight } from '@/hooks/useViewportHeight';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalAnimationProvider() {
  useViewportHeight();
  const pathname = usePathname();

  useEffect(() => {
    const isHome = pathname === '/' || pathname === '/en' || pathname === '/en/';
    const isContact = pathname.includes('/contact');
    const isPrivacy = pathname.includes('/privacy-policy') || pathname.includes('/imprint') || pathname.includes('/cookie');

    // Update body classes according to current route
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.classList.remove(
        'home',
        'page-template-template-homepage',
        'page-template-template-contact',
        'page-template-template-informative',
        'page-template-template-privacy'
      );

      if (isHome) {
        body.classList.add('home', 'page-template-template-homepage');
      } else if (isContact) {
        body.classList.add('page-template-template-contact');
      } else if (isPrivacy) {
        body.classList.add('page-template-template-privacy');
      } else {
        body.classList.add('page-template-template-informative');
      }
    }

    // Refresh ScrollTrigger and re-initialize generic animations on route change
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      // Homepage sticky logo scroll fade
      const stickyLogo = document.querySelector<HTMLElement>('.js-sticky-logo');
      if (stickyLogo && isHome) {
        const handleScroll = () => {
          if (window.scrollY > 80) {
            stickyLogo.style.opacity = '1';
            stickyLogo.style.visibility = 'visible';
            stickyLogo.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
          } else {
            stickyLogo.style.opacity = '0';
            stickyLogo.style.visibility = 'hidden';
            stickyLogo.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
          }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
      }

      // Animate any milestone / statistics counters (.js-counter)
      const counters = document.querySelectorAll<HTMLElement>('.js-counter');
      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute('data-value') || '0');
        if (targetValue > 0) {
          const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
          const obj = { val: 0 };

          ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.to(obj, {
                val: targetValue,
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: () => {
                  counter.textContent = obj.val.toFixed(decimals);
                },
              });
            },
          });
        }
      });

      // Animate titles and headings on scroll
      const titles = document.querySelectorAll<HTMLElement>('.js-hero-title, .js-aboutus-title, .js-careers-title, .js-intro-category-title, .js-category-title');
      titles.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
