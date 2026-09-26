'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/modules/valuesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Entrance animations for cards
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    // Setup scroll trigger to change activeIndex based on scroll position 
    // when viewing on desktop
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(i + 1),
        onEnterBack: () => setActiveIndex(i + 1)
      });
    });

  }, []);

  return (
    <section className={styles.homeValuesGrid} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.title} title-xxb`}>
          Tailored <span className="u-blue-gradient">solutions</span><br/>  for each project.
        </h2>
        
        <div className={styles.gridContainer}>
          {/* Mobile Swiper */}
          <div className={`${styles.swiperContainer} is-mob`}>
            <Swiper spaceBetween={20} slidesPerView={1.2}>
              {[
                { id: 1, title: 'Agile process', img: '/assets/images/dynamic/59e6f307.png', desc: 'R&D project house, prototype-manufacturing and test bench under a single roof.' },
                { id: 2, title: 'Rapid Prototyping', img: '/assets/images/dynamic/817051c5.png', desc: 'From R&D concepts to high-quality product samples.' },
                { id: 3, title: 'Reliable testing', img: '/assets/images/dynamic/c2d5a324.png', desc: 'In-house, self-designed testing equipment with integrated measurement technology.' },
              ].map(item => (
                <SwiperSlide key={item.id}>
                  <div className={styles.card}>
                    <h3 className={`${styles.cardTitle} title-xb u-blue-gradient`}>{item.title}</h3>
                    <div className={`${styles.cardCopy} copy-m`}>
                      <p>{item.desc}</p>
                    </div>
                    <div className={styles.mobImage}>
                      <Image src={item.img} alt={item.title} width={569} height={400} className={styles.image} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Layout */}
          <div className={`${styles.wrapper} is-desk`}>
            <div className={styles.leftCol}>
              {[
                { id: 1, title: 'Agile process', desc: 'R&D project house, prototype-manufacturing and test bench under a single roof.' },
                { id: 2, title: 'Rapid Prototyping', desc: 'From R&D concepts to high-quality product samples.' },
                { id: 3, title: 'Reliable testing', desc: 'In-house, self-designed testing equipment with integrated measurement technology.' },
              ].map((item, i) => (
                <div 
                  key={item.id} 
                  className={styles.card} 
                  ref={el => { cardsRef.current[i] = el; }}
                  onMouseEnter={() => setActiveIndex(item.id)}
                >
                  <h3 className={`${styles.cardTitle} title-xb u-blue-gradient`} dangerouslySetInnerHTML={{__html: item.title.replace(' ', '<br/>')}}></h3>
                  <div className={`${styles.cardCopy} copy-m`}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.rightCol}>
              <div className={styles.stickyImage}>
                <Image 
                  src="/assets/images/dynamic/59e6f307.png" 
                  alt="Agile process" 
                  fill 
                  className={`${styles.deskImage} ${activeIndex === 1 ? styles.active : ''}`} 
                />
                <Image 
                  src="/assets/images/dynamic/817051c5.png" 
                  alt="Rapid Prototyping" 
                  fill 
                  className={`${styles.deskImage} ${activeIndex === 2 ? styles.active : ''}`} 
                />
                <Image 
                  src="/assets/images/dynamic/c2d5a324.png" 
                  alt="Reliable testing" 
                  fill 
                  className={`${styles.deskImage} ${activeIndex === 3 ? styles.active : ''}`} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/en/competence-center/" className="btn is-white">
            Discover more
          </Link>
        </div>
      </div>
    </section>
  );
}
