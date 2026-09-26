'use client';

import { useRef, useEffect } from 'react';
import styles from '@/styles/modules/videoHero.module.css';

interface VideoHeroProps {
  desktopSrc: string;
  desktopPoster: string;
  mobileSrc: string;
  mobilePoster: string;
  children?: React.ReactNode;
}

export default function VideoHero({ desktopSrc, desktopPoster, mobileSrc, mobilePoster, children }: VideoHeroProps) {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Handle autoplay policy - try to play on interaction
    const tryPlay = (video: HTMLVideoElement | null) => {
      if (!video) return;
      video.play().catch(() => {
        // Autoplay blocked, will play on user interaction
        const handler = () => {
          video.play();
          document.removeEventListener('touchstart', handler);
          document.removeEventListener('scroll', handler);
        };
        document.addEventListener('touchstart', handler, { once: true, passive: true });
        document.addEventListener('scroll', handler, { once: true, passive: true });
      });
    };

    tryPlay(desktopVideoRef.current);
    tryPlay(mobileVideoRef.current);
  }, []);

  return (
    <div className={styles.videoHero}>
      <video
        ref={desktopVideoRef}
        className={styles.desktop}
        src={desktopSrc}
        poster={desktopPoster}
        autoPlay
        muted
        loop
        playsInline
      />
      <video
        ref={mobileVideoRef}
        className={styles.mobile}
        src={mobileSrc}
        poster={mobilePoster}
        autoPlay
        muted
        loop
        playsInline
      />
      {children && <div className={styles.overlay}>{children}</div>}
    </div>
  );
}
