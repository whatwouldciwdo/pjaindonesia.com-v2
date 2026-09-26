'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoHero from '@/components/ui/VideoHero';
import OrganicDivider from '@/components/ui/OrganicDivider';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (containerRef.current) {
      const videoWrap = containerRef.current.querySelector('.js-hero-background');
      
      if (videoWrap) {
        gsap.fromTo(videoWrap, 
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="c-home-hero js-home-hero">
      <div className="c-home-hero__content">
        <h1 className="c-home-hero__title title-b js-hero-title is-white"></h1>
      </div>
      
      <div className="c-home-hero__image-wrap">
        <div className="c-home-hero__video js-hero-background" style={{ width: '100%', height: '100%', transformOrigin: 'center center' }}>
          <VideoHero 
            desktopSrc="/video/hero-desktop.mp4"
            desktopPoster="/video/hero-desktop-poster.jpg"
            mobileSrc="/video/hero-mobile.mp4"
            mobilePoster="/video/hero-mobile-poster.jpg"
          />
        </div>
      </div>

      <div className="c-home-hero__organic is-desk" style={{ '--color': '#000', '--hoverColor': '#fff' } as React.CSSProperties}>
        <OrganicDivider variant={1} color="var(--color)" />
      </div>

      <div className="c-home-hero__organic is-mob" style={{ '--color': '#000', '--hoverColor': '#fff' } as React.CSSProperties}>
        <OrganicDivider variant={2} color="var(--color)" />
      </div>
    </section>
  );
}
