import React from 'react';
import Link from 'next/link';

export interface QuickLinkCard {
  href: string;
  imageSrc: string;
  title: React.ReactNode;
}

export interface QuickLinksProps {
  title?: React.ReactNode;
  links: QuickLinkCard[];
}

export default function QuickLinks({ title, links }: QuickLinksProps) {
  return (
    <section className="c-quick-links js-quick-links">
        <h2 className="title-xxxl c-quick-links__title">
            {title || (
                <>We have the <span className="u-blue-gradient">solution</span>.</>
            )}
        </h2>
        <div className="container c-quick-links__container">
            <div className="swiper c-quick-links__swiper js-quick-links-swiper">
                <div className="swiper-wrapper">
                    {links.map((link, index) => (
                        <div key={index} className="swiper-slide c-quick-links-card js-quick-links-card">
                            <Link href={link.href}>
                                <div className="c-quick-links-card__top">
                                    <img src={link.imageSrc} loading="lazy" alt="" className="c-quick-links-card__image" />
                                </div>
                                <div className="c-quick-links-card__bottom">
                                    <h4 className="c-quick-links-card__title copy u-normal">
                                        {link.title}
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
