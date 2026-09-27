import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="c-footer js-footer">
      <div className="c-footer__background">
        <svg
          className="c-footer__background__icon is-desk"
          style={{ '--color': '', '--hoverColor': '' } as React.CSSProperties}
        >
          <use xlinkHref="#footer-desktop" />
        </svg>
        <svg
          className="c-footer__background__icon is-mob"
          style={{ '--color': '', '--hoverColor': '' } as React.CSSProperties}
        >
          <use xlinkHref="#footer-mobile" />
        </svg>
      </div>
      <div className="c-footer__content">
        <div className="c-footer-logo js-footer-logo">
          <img
            src="/logo-pja.png"
            alt="Putra Jayantara Ananta"
            className="c-footer-logo__icon"
            style={{ objectFit: 'contain', width: 'auto' }}
          />
        </div>
        <div className="c-footer-contact js-footer-contact">
          <h2 className="c-footer-contact__claim title-m is-full">
            Any questions?
            <span className="u-blue-gradient">Let’s find the solution together.</span>
          </h2>
          <Link className="btn is-black c-footer-contact__cta" href="/en/contact/">
            Contact us
          </Link>
        </div>
        <ul className="c-footer-menu js-footer-menu">
          <li className="menu-item"><Link href="/en/air-conditioning-valves/">Air conditioning</Link></li>
          <li className="menu-item"><Link href="/en/hydrogen/">H2 – Hydrogen</Link></li>
          <li className="menu-item"><Link href="/en/cng-lng/">CNG / LNG</Link></li>
          <li className="menu-item"><Link href="/en/compressors/">Air compressors</Link></li>
          <li className="menu-item"><Link href="/en/about-us/">About us</Link></li>
          <li className="menu-item"><Link href="/en/competence-center/">Competence center</Link></li>
          <li className="menu-item"><Link href="/en/responsibility/">Responsibility</Link></li>
          <li className="menu-item"><Link href="/en/careers/">Careers</Link></li>
          <li className="menu-item"><Link href="/en/contact/">Contact us</Link></li>
          <li className="menu-item"><Link href="/en/download/">Downloads</Link></li>
        </ul>
        <ul className="c-footer-service-menu js-footer-service-menu">
          <li className="menu-item"><Link href="/en/imprint/">Imprint</Link></li>
          <li className="menu-item"><Link href="/en/privacy-policy/">Privacy policy</Link></li>
          <li className="menu-item"><Link href="/en/cookie/">Cookie</Link></li>
        </ul>
        <div className="c-footer-alberts js-footer-alberts">
          <h3 className="c-footer-alberts__copy is-white">
            Part of <br /> Aalberts
          </h3>
          <a className="c-footer-alberts__cta" href="https://aalberts.com/" target="_blank" rel="noopener noreferrer">
            <svg
              className="c-footer-alberts__logo"
              style={{ '--color': '', '--hoverColor': '' } as React.CSSProperties}
            >
              <use xlinkHref="#alberts" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
