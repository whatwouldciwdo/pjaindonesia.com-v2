'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/assets/css/pages/page-2f3e99b1.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  useEffect(() => {
    // 1. Values Section - Sticky Desktop Image Switcher
    const valuesCards = document.querySelectorAll('.js-home-values-card');
    const valuesImages = document.querySelectorAll('.js-home-values-image');

    function setActiveValueImage(id: string) {
      valuesImages.forEach((img: any) => {
        if (img.dataset.id === id) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }

    function checkActiveCard() {
      if (window.innerWidth < 768) return;
      const vh = window.innerHeight;
      let activeId = '1';
      let minDistance = Infinity;

      valuesCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = vh / 2;
        const distance = Math.abs(cardCenter - screenCenter);

        if (distance < minDistance) {
          minDistance = distance;
          activeId = card.getAttribute('data-id') || '1';
        }
      });

      setActiveValueImage(activeId);
    }

    window.addEventListener('scroll', checkActiveCard, { passive: true });
    checkActiveCard();

    // 2. Autoplay Video Handling
    document.querySelectorAll('video').forEach((video) => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const onFirstTouch = () => {
            video.play().catch(() => {});
            window.removeEventListener('touchstart', onFirstTouch);
            window.removeEventListener('scroll', onFirstTouch);
          };
          window.addEventListener('touchstart', onFirstTouch, { once: true, passive: true });
          window.addEventListener('scroll', onFirstTouch, { once: true, passive: true });
        });
      }
    });

    // 3. GSAP Animations & ScrollTrigger
    const heroBg = document.querySelector('.js-hero-background');
    const heroSection = document.querySelector('.c-home-hero');
    if (heroBg && heroSection) {
      gsap.fromTo(
        heroBg,
        { scale: 1.1 },
        { scale: 1, duration: 1.8, ease: 'power2.out' }
      );

      gsap.to(heroBg, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    const introTitle = document.querySelector('.js-intro-home-title');
    const introCopy = document.querySelector('.js-intro-home-copy');
    if (introTitle) {
      gsap.fromTo(
        introTitle,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.js-intro-home',
            start: 'top 75%',
          },
        }
      );
    }
    if (introCopy) {
      gsap.fromTo(
        introCopy,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.js-intro-home',
            start: 'top 75%',
          },
        }
      );
    }

    const productCards = document.querySelectorAll('.js-home-product-card');
    if (productCards.length > 0) {
      gsap.fromTo(
        productCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.js-home-product-grid',
            start: 'top 75%',
          },
        }
      );
    }

    const bannerContainer = document.querySelector('.js-home-bottom-banner-container');
    const bannerSection = document.querySelector('.js-home-bottom-banner');
    if (bannerContainer && bannerSection && window.innerWidth >= 768) {
      gsap.fromTo(
        bannerContainer,
        { yPercent: -10 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: bannerSection,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    }

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('scroll', checkActiveCard);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <main data-name="homepage">
      <section className="c-home-hero js-home-hero">
        <div className="c-home-hero__content">
            <h1 className="c-home-hero__title title-b js-hero-title is-white">
                
            </h1>
        </div>
        <div className="c-home-hero__image-wrap">
                            <div className="c-home-hero__video js-hero-background">
                    <div className="is-desk">
                        <video playsInline preload="metadata" muted autoPlay poster="/video/hero-desktop-poster.jpg" loop>
                            <source src="/video/hero-desktop.mp4" />
                        </video>
                    </div>
                    <div className="is-mob">
                        <video playsInline preload="metadata" muted autoPlay poster="/video/hero-mobile-poster.jpg" loop>
                            <source src="/video/hero-mobile.mp4" />
                        </video>
                    </div>
                </div>
                    </div>
            <svg className="c-home-hero__organic is-desk" style={{"--color": "#000", "--hoverColor": "#fff"} as React.CSSProperties}>
        <use xlinkHref="#organic-1-desk"></use>
    </svg>

            <svg className="c-home-hero__organic is-mob" style={{"--color": "#000", "--hoverColor": "#fff"} as React.CSSProperties}>
        <use xlinkHref="#organic-2-mob"></use>
    </svg>

    </section>


    
        <section className="c-intro-home js-intro-home">
        <div className="container">
            <h3 className="c-intro-home__title title-l js-intro-home-title">
                <span className="u-blue-gradient">VENTREX</span> is the partner of choice for valve technology solutions for the mobility of the future.
            </h3>
            <div className="c-intro-home__copy js-intro-home-copy copy-xm">
                <p>We develop and industrialize valves for automotive<br />
<span className="u-blue-gradient">air conditioning systems</span> and <span className="u-blue-gradient">alternative powertrains</span><br />
in on and off-road vehicles.</p>

            </div>
        </div>
    </section>


    
        
        <section className="c-home-product-grid js-home-product-grid">
        <div className="container">
            <div className="c-home-product-grid__container">
                                        
    <a href="/en/air-conditioning-valves/" className="c-home-product-card js-home-product-card" data-index="1">
        <h2 className="c-home-product-card__title title-l">
            Air conditioning
        </h2>
            
        <img src="/assets/images/dynamic/75573e42.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/75573e42.png 800w, /assets/images/dynamic/cb3ca6c5.png 300w, /assets/images/dynamic/62a2f53b.png 150w, /assets/images/dynamic/7a098621.png 768w" sizes="(max-width: 800px) 100vw, 800px" className="c-home-product-card__image" />

    </a>

                                        
    <a href="/en/hydrogen/" className="c-home-product-card js-home-product-card" data-index="2">
        <h2 className="c-home-product-card__title title-l">
            H2 - Hydrogen 
        </h2>
            
        <img src="/assets/images/dynamic/d32a812b.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/d32a812b.png 800w, /assets/images/dynamic/ff80324b.png 300w, /assets/images/dynamic/89428e29.png 150w, /assets/images/dynamic/1157f9a0.png 768w" sizes="(max-width: 800px) 100vw, 800px" className="c-home-product-card__image" />

    </a>

                                        
    <a href="/en/cng-lng/" className="c-home-product-card js-home-product-card" data-index="3">
        <h2 className="c-home-product-card__title title-l">
            CNG / LNG<br /> valve components
        </h2>
            
        <img src="/assets/images/dynamic/c8959f9a.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c8959f9a.png 800w, /assets/images/dynamic/31e512a0.png 300w, /assets/images/dynamic/4609959e.png 150w, /assets/images/dynamic/36e731e9.png 768w" sizes="(max-width: 800px) 100vw, 800px" className="c-home-product-card__image" />

    </a>

                                        
    <a href="/en/compressors/" className="c-home-product-card js-home-product-card" data-index="4">
        <h2 className="c-home-product-card__title title-l">
            Air compressors 
        </h2>
            
        <img src="/assets/images/dynamic/118605b1.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/118605b1.png 800w, /assets/images/dynamic/a7fe8884.png 300w, /assets/images/dynamic/8e8e5d7b.png 150w, /assets/images/dynamic/58ba2961.png 768w" sizes="(max-width: 800px) 100vw, 800px" className="c-home-product-card__image" />

    </a>

                            </div>
        </div>
    </section>


    
                
    <section className="c-home-values-grid js-home-values-grid">
            <svg className="c-home-values-grid__organic is-desk" style={{"--color": "#000", "--hoverColor": "#fff"} as React.CSSProperties}>
        <use xlinkHref="#organic-1-desk"></use>
    </svg>

            <svg className="c-home-values-grid__organic is-mob" style={{"--color": "#000", "--hoverColor": "#fff"} as React.CSSProperties}>
        <use xlinkHref="#organic-2-mob"></use>
    </svg>


        <div className="container">
            <h2 className="title-xxb c-home-values-grid__title js-home-values-title">
                Tailored <span className="u-blue-gradient">solutions</span><br />  for each project.
            </h2>
            <div className="c-home-values-grid__container">
                <div className="c-home-values-grid__swiper js-home-values-swiper">
                    <div className="c-home-values-grid__wrapper js-home-values-wrapper">
                        
                                                        
        
    <div className="c-home-values-card js-home-values-card first-item" data-id="1">
        <div className="c-home-values-card__wrapper js-home-values-card-wrapper">
            <h3 className="title-xb c-home-values-card__title u-blue-gradient">
                Agile <br /> process
            </h3>

            <div className="c-home-values-card__copy copy-m">
                <p>R&amp;D project house, prototype-manufacturing and test bench under a single roof.</p>

            </div>

            <div className="is-mob c-home-values-card__mobimage">
                    
        <img src="/assets/images/dynamic/59e6f307.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/59e6f307.png 569w, /assets/images/dynamic/1dffd993.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-card__image" />

            </div>
        </div>
    </div>

                                                        
        
    <div className="c-home-values-card js-home-values-card " data-id="2">
        <div className="c-home-values-card__wrapper js-home-values-card-wrapper">
            <h3 className="title-xb c-home-values-card__title u-blue-gradient">
                Rapid<br /> Prototyping
            </h3>

            <div className="c-home-values-card__copy copy-m">
                <p>From R&amp;D concepts to high-quality product samples.</p>

            </div>

            <div className="is-mob c-home-values-card__mobimage">
                    
        <img src="/assets/images/dynamic/817051c5.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/817051c5.png 569w, /assets/images/dynamic/5be1a0d0.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-card__image" />

            </div>
        </div>
    </div>

                                                        
        
    <div className="c-home-values-card js-home-values-card last-item" data-id="3">
        <div className="c-home-values-card__wrapper js-home-values-card-wrapper">
            <h3 className="title-xb c-home-values-card__title u-blue-gradient">
                Reliable<br /> testing
            </h3>

            <div className="c-home-values-card__copy copy-m">
                <p>In-house, self-designed testing equipment with integrated measurement technology.</p>

            </div>

            <div className="is-mob c-home-values-card__mobimage">
                    
        <img src="/assets/images/dynamic/c2d5a324.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c2d5a324.png 569w, /assets/images/dynamic/d3d66329.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-card__image" />

            </div>
        </div>
    </div>

                                            </div>
                </div>
                
                                        
        
        
    <div className="c-home-values-image js-home-values-image is-desk first-item" data-id="1" data-first="true" data-last="false">

            
        <img src="/assets/images/dynamic/59e6f307.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/59e6f307.png 569w, /assets/images/dynamic/1dffd993.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-image__pic" />

    </div>

                                        
        
        
    <div className="c-home-values-image js-home-values-image is-desk " data-id="2" data-first="false" data-last="false">

            
        <img src="/assets/images/dynamic/817051c5.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/817051c5.png 569w, /assets/images/dynamic/5be1a0d0.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-image__pic" />

    </div>

                                        
        
        
    <div className="c-home-values-image js-home-values-image is-desk last-item" data-id="3" data-first="false" data-last="true">

            
        <img src="/assets/images/dynamic/c2d5a324.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c2d5a324.png 569w, /assets/images/dynamic/d3d66329.png 226w" sizes="(max-width: 569px) 100vw, 569px" className="c-home-values-image__pic" />

    </div>

                            </div>
            <div className="c-home-values-grid__actions">
                <a className="c-home-values-grid__cta btn is-white" href="/en/competence-center/">Discover more</a>
            </div>
        </div>
    </section>


    
        
    <div className="c-home-bottom-banner js-home-bottom-banner">
        <div className="c-home-bottom-banner__container js-home-bottom-banner-container">
            <div className="c-home-bottom-banner__content">
                <h2 className="title-xxb is-white c-home-bottom-banner__title">
                    We are committed to empower everyone to drive sustainably towards a carbon-free future.
                </h2>
                <a className="c-home-bottom-banner__action btn is-white c-home-bottom-banner__actions" href="/en/about-us/">Discover more</a>
            </div>
                
    <picture>
        <source srcSet="/assets/images/dynamic/7b7daed0.jpg" media="(min-width: 768px)" />
        <img src="/assets/images/dynamic/6b27c92e.jpg" alt="Ventrex" loading="lazy" className="c-home-bottom-banner__image" />
    </picture>

        </div>
    </div>


    
        
    <div className="c-home-loghi js-home-loghi">
        <div className="c-home-loghi__wrapper js-home-loghi-wrapper">
            <div className="container">
                <h2 className="title-xxb c-home-loghi__title">
                    We <span>work</span> with
                </h2>
                <div className="c-home-loghi__swiper js-home-loghi-swiper">
                    <div className="c-home-loghi__grid js-home-loghi-swiper-wrapper">
                                                        
        <img src="/assets/images/dynamic/af9f9bd7.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/af9f9bd7.png 477w, /assets/images/dynamic/b554d9de.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/767b4d61.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/767b4d61.png 478w, /assets/images/dynamic/cf3d13c5.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/dda27dfb.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/dda27dfb.png 2200w, /assets/images/dynamic/3a863b1f.png 300w, /assets/images/dynamic/d2b7c649.png 1024w, /assets/images/dynamic/1373b4e4.png 768w, /assets/images/dynamic/ad00b241.png 1536w, /assets/images/dynamic/cbc7ba1f.png 2048w" sizes="(max-width: 2200px) 100vw, 2200px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/9e65447d.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/9e65447d.png 477w, /assets/images/dynamic/3cabda6b.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/d4cd446a.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/d4cd446a.png 477w, /assets/images/dynamic/8e29ca57.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/c1e8dc09.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c1e8dc09.png 477w, /assets/images/dynamic/c347fd58.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/555535e4.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/555535e4.png 478w, /assets/images/dynamic/19693d26.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/c398413b.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c398413b.png 477w, /assets/images/dynamic/18ee0485.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/d2bcdcf7.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/d2bcdcf7.png 478w, /assets/images/dynamic/71406fe7.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/c3e9d1be.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/c3e9d1be.png 477w, /assets/images/dynamic/a737fb13.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/5f707764.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/5f707764.png 477w, /assets/images/dynamic/3f895756.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/461d1d11.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/461d1d11.png 477w, /assets/images/dynamic/3a6f2c69.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/163fc927.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/163fc927.png 477w, /assets/images/dynamic/70a88d84.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/d8408ba6.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/d8408ba6.png 477w, /assets/images/dynamic/267eb0f7.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/a32f6771.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/a32f6771.png 478w, /assets/images/dynamic/f60e6a68.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/72887cbe.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/72887cbe.png 477w, /assets/images/dynamic/cee4aaf3.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/cde86817.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/cde86817.png 478w, /assets/images/dynamic/10238e16.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/a0b5c8a1.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/a0b5c8a1.png 477w, /assets/images/dynamic/04ccef7d.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/ee4c2d58.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/ee4c2d58.png 477w, /assets/images/dynamic/f4af0679.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/6d20ea78.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/6d20ea78.png 478w, /assets/images/dynamic/15de88f0.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/114f42eb.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/114f42eb.png 478w, /assets/images/dynamic/3ba5f39d.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/96cd5ecb.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/96cd5ecb.png 477w, /assets/images/dynamic/44e06a94.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/b2dd3014.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/b2dd3014.png 478w, /assets/images/dynamic/82d2cf3b.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/9a087e58.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/9a087e58.png 478w, /assets/images/dynamic/e6512d39.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/db6a30ac.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/db6a30ac.png 477w, /assets/images/dynamic/f1e98676.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/230ee69b.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/230ee69b.png 477w, /assets/images/dynamic/24f2d9f4.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/19131169.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/19131169.png 477w, /assets/images/dynamic/b1a5a2c2.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/142fc5dd.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/142fc5dd.png 477w, /assets/images/dynamic/35b6c7f4.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/ca4df2a1.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/ca4df2a1.png 477w, /assets/images/dynamic/993331e9.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/64dfc1fb.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/64dfc1fb.png 478w, /assets/images/dynamic/93d21882.png 300w" sizes="(max-width: 478px) 100vw, 478px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                                        
        <img src="/assets/images/dynamic/3daff969.png" loading="lazy" alt="" srcSet="/assets/images/dynamic/3daff969.png 477w, /assets/images/dynamic/786c21de.png 300w" sizes="(max-width: 477px) 100vw, 477px" className="c-home-loghi__item js-home-loghi-swiper-slide" />

                                            </div>
                    <div className="c-home-loghi__navigation">
                        <button type="button" className="swiper-button-prev js-home-loghi-swiper-prev is-mob btn-slide btn-slide--prev"></button>
                        <button type="button" className="swiper-button-next js-home-loghi-swiper-next is-mob btn-slide btn-slide--next"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        

                                            
    </main>
  );
}
