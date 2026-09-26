import React from 'react';

export interface WhyChooseCard {
  label: React.ReactNode;
  imageSrc: string;
}

export interface WhyChooseProps {
  subhead?: string;
  title: React.ReactNode;
  cards: WhyChooseCard[];
}

export default function WhyChoose({ subhead = "Why you should choose our products", title, cards }: WhyChooseProps) {
  return (
    <section className="c-why-choose js-why-choose">
        <div className="container">
            <h3 className="copy-xm c-why-choose__subhead">
                {subhead}
            </h3>
            <h2 className="title-xxl c-why-choose__title">
                {title}
            </h2>
            <div className="c-why-choose__grid">
                {cards.map((card, index) => (
                    <div key={index} className={`c-why-choose__card index-${index + 1}`}>
                        <h6 className="c-why-choose__label">
                            {card.label}
                        </h6>
                        <picture>
                            <source srcSet={card.imageSrc} media="(min-width: 768px)" />
                            <img src={card.imageSrc} alt="" loading="eager" className="c-why-choose__image" />
                        </picture>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
