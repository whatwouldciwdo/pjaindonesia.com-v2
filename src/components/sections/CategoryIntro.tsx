import React from 'react';

interface CategoryIntroProps {
  children: React.ReactNode;
}

export default function CategoryIntro({ children }: CategoryIntroProps) {
  return (
    <section className="c-intro-category js-intro-category">
        <div className="container">
            <h3 className="c-intro-category__title title-l js-intro-category-title">
                {children}
            </h3>
        </div>
    </section>
  );
}
