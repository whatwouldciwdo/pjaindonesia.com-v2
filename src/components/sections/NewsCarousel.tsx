'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import SwiperCarousel from '@/components/ui/SwiperCarousel';
import styles from '@/styles/modules/newsCarousel.module.css';

const logos = [
  { id: 1, src: '/assets/images/dynamic/72887cbe.png', alt: 'Partner' },
  { id: 2, src: '/assets/images/dynamic/cde86817.png', alt: 'Partner' },
  { id: 3, src: '/assets/images/dynamic/a0b5c8a1.png', alt: 'Partner' },
  { id: 4, src: '/assets/images/dynamic/ee4c2d58.png', alt: 'Partner' },
  { id: 5, src: '/assets/images/dynamic/6d20ea78.png', alt: 'Partner' },
  { id: 6, src: '/assets/images/dynamic/114f42eb.png', alt: 'Partner' },
  { id: 7, src: '/assets/images/dynamic/96cd5ecb.png', alt: 'Partner' },
  { id: 8, src: '/assets/images/dynamic/b2dd3014.png', alt: 'Partner' },
  { id: 9, src: '/assets/images/dynamic/9a087e58.png', alt: 'Partner' },
  { id: 10, src: '/assets/images/dynamic/db6a30ac.png', alt: 'Partner' },
  { id: 11, src: '/assets/images/dynamic/230ee69b.png', alt: 'Partner' },
  { id: 12, src: '/assets/images/dynamic/19131169.png', alt: 'Partner' },
  { id: 13, src: '/assets/images/dynamic/142fc5dd.png', alt: 'Partner' },
  { id: 14, src: '/assets/images/dynamic/ca4df2a1.png', alt: 'Partner' },
  { id: 15, src: '/assets/images/dynamic/64dfc1fb.png', alt: 'Partner' },
  { id: 16, src: '/assets/images/dynamic/3daff969.png', alt: 'Partner' },
];

export default function NewsCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <section className="c-home-loghi section-padding">
      <div className="container">
        <h2 className="title-m has-black-color text-center mb-10">We work with</h2>
        
        {isMobile ? (
          <div className={styles.mobileCarousel}>
            <SwiperCarousel
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={{
                nextEl: `.${styles.swiperNext}`,
                prevEl: `.${styles.swiperPrev}`,
              }}
            >
              {logos.map(logo => (
                <SwiperSlide key={logo.id}>
                  <div className={styles.logoWrapper}>
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={120} 
                      height={60} 
                      style={{ objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/images/placeholder.png';
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </SwiperCarousel>
            
            <div className={styles.navigation}>
              <button className={`${styles.swiperPrev} btn-slide btn-slide--prev`} aria-label="Previous"></button>
              <button className={`${styles.swiperNext} btn-slide btn-slide--next`} aria-label="Next"></button>
            </div>
          </div>
        ) : (
          <div className={styles.desktopGrid}>
            {logos.map(logo => (
              <div key={logo.id} className={styles.logoWrapper}>
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={150} 
                  height={80} 
                  style={{ objectFit: 'contain' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/placeholder.png';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
