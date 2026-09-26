import React from 'react';

interface CategoryBannerProps {
  title: string;
  copy: React.ReactNode;
  imageSrc: string;
}

export default function CategoryBanner({ title, copy, imageSrc }: CategoryBannerProps) {
  return (
    <section className="c-category-banner js-category-banner">
        <div className="c-category-banner__wrap container">
            <h2 className="c-category-banner__title title-xl js-category-title">
                {title}
            </h2>
            <p className="c-category-banner__copy copy js-category-copy">
                {copy}
            </p>
            <div className="c-category-banner__right js-category-image">
                <img src={imageSrc} loading="lazy" alt="" className="c-category-banner__image" />
            </div>
        </div>
    </section>
  );
}
