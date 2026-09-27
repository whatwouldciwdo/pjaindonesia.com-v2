import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import '@/assets/css/pages/page-0d49af91.css';
import '@/assets/css/pages/page-bdd83a30.css';

export const metadata = {
  title: 'Contact - Ventrex',
  description: 'VENTREX is the partner of choice for valve technology solutions for the mobility of the future.',
};

export default function ContactPage() {
  return (
    <div className="c-contact">
      <div className="c-contact__grid">
        <div className="c-contact-image js-contact-image">
          <Link href="/en/" className="c-contact-image__cta">
            <img
              src="/logo-pja.png"
              alt="Putra Jayantara Ananta"
              className="c-contact-image__logo"
              style={{ objectFit: 'contain', width: 'auto' }}
            />
          </Link>
          
          <picture>
            <source srcSet="/images/dynamic/ac9818eb.jpg" media="(min-width: 768px)" />
            <img src="/images/dynamic/ac9818eb.jpg" alt="Ventrex - contact" loading="lazy" className="c-contact-image__pic" />
          </picture>

          <svg className="c-contact-image__organic is-mob" style={{ '--color': '', '--hoverColor': '' } as React.CSSProperties}>
            <use xlinkHref="#organic-1-mob" />
          </svg>
        </div>

        <div className="c-contact-form js-contact-form">
          <h1 className="c-contact-form__title title-xl">
            Any questions?<br />
            <span className="u-blue-gradient">Let&apos;s find the solution together.</span>
          </h1>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
