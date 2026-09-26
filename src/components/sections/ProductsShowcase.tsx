'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/modules/productsShowcase.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section className={styles.productGrid}>
      <div className="container">
        <div className={styles.gridContainer} ref={containerRef}>
          
          <Link href="/en/air-conditioning-valves/" className={styles.productCard} ref={el => { cardsRef.current[0] = el; }}>
            <h2 className={styles.productTitle}>
              Air conditioning
            </h2>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/dynamic/75573e42.png" 
                alt="Air conditioning" 
                fill 
                className={styles.productImage}
                sizes="(max-width: 800px) 100vw, 800px" 
              />
            </div>
          </Link>

          <Link href="/en/hydrogen/" className={styles.productCard} ref={el => { cardsRef.current[1] = el; }}>
            <h2 className={styles.productTitle}>
              H2 - Hydrogen 
            </h2>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/dynamic/d32a812b.png" 
                alt="H2 - Hydrogen" 
                fill 
                className={styles.productImage}
                sizes="(max-width: 800px) 100vw, 800px" 
              />
            </div>
          </Link>

          <Link href="/en/cng-lng/" className={styles.productCard} ref={el => { cardsRef.current[2] = el; }}>
            <h2 className={styles.productTitle}>
              CNG / LNG<br/> valve components
            </h2>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/dynamic/c8959f9a.png" 
                alt="CNG / LNG" 
                fill 
                className={styles.productImage}
                sizes="(max-width: 800px) 100vw, 800px" 
              />
            </div>
          </Link>

          <Link href="/en/compressors/" className={styles.productCard} ref={el => { cardsRef.current[3] = el; }}>
            <h2 className={styles.productTitle}>
              Air compressors 
            </h2>
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/images/dynamic/118605b1.png" 
                alt="Air compressors" 
                fill 
                className={styles.productImage}
                sizes="(max-width: 800px) 100vw, 800px" 
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
