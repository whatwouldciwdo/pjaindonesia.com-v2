import React from 'react';

interface CategoryHeroProps {
  title: React.ReactNode;
  imageSrc: string;
  altText: string;
  titleSize?: number;
}

export default function CategoryHero({ title, imageSrc, altText, titleSize = 50 }: CategoryHeroProps) {
  return (
    <section className="c-product-hero js-product-hero" style={{ '--title-size': titleSize } as React.CSSProperties}>
        <div className="c-product-hero__content">
            <h1 className="c-product-hero__title title-b js-hero-title is-white">
                {title}
            </h1>
        </div>
        <div className="c-product-hero__image-wrap">
            <picture>
                <source srcSet={imageSrc} media="(min-width: 768px)" />
                <img src={imageSrc} alt={altText} loading="eager" className="c-product-hero__image js-hero-background" />
            </picture>
        </div>
        <svg className="c-product-hero__organic is-desk" style={{ '--color': '#000', '--hoverColor': '#fff' } as React.CSSProperties}>
            <use href="#organic-1-desk" />
        </svg>
        <svg className="c-product-hero__organic is-mob" style={{ '--color': '#000', '--hoverColor': '#fff' } as React.CSSProperties}>
            <use href="#organic-1-mob" />
        </svg>
    </section>
  );
}
