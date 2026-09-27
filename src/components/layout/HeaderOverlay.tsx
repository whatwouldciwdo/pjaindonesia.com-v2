'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

interface HeaderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeaderOverlay({ isOpen, onClose }: HeaderOverlayProps) {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`c-header-overlay js-header-overlay ${isOpen ? 'active' : ''}`}>
      <div className="c-header-overlay__container">
        <div className="c-header-logo js-header-logo">
          <Link href="/en/" onClick={onClose}>
            <img
              src="/logo-pja.png"
              alt="Putra Jayantara Ananta"
              className="c-header-logo__icon"
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </div>

        <ul className="c-menu js-menu c-menu--top">
          <li className="c-menu__item menu-item-big">
            <Link className="c-menu__link" href="/en/air-conditioning-valves/" onClick={onClose}>
              <span>Air conditioning</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-big">
            <Link className="c-menu__link" href="/en/hydrogen/" onClick={onClose}>
              <span>H2 – Hydrogen</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-big">
            <Link className="c-menu__link" href="/en/cng-lng/" onClick={onClose}>
              <span>CNG / LNG</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-big">
            <Link className="c-menu__link" href="/en/compressors/" onClick={onClose}>
              <span>Air compressors</span>
            </Link>
          </li>
        </ul>

        <ul className="c-menu js-menu c-menu--bottom">
          <li className="c-menu__item menu-item-small">
            <Link className="c-menu__link" href="/en/about-us/" onClick={onClose}>
              <span>About us</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-small">
            <Link className="c-menu__link" href="/en/competence-center/" onClick={onClose}>
              <span>Competence center</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-small">
            <Link className="c-menu__link" href="/en/responsibility/" onClick={onClose}>
              <span>Responsibility</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-small">
            <Link className="c-menu__link" href="/en/careers/" onClick={onClose}>
              <span>Careers</span>
            </Link>
          </li>
          <li className="c-menu__item menu-item-small">
            <Link className="c-menu__link" href="/en/download/" onClick={onClose}>
              <span>Downloads</span>
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="c-header-close js-header-close"
          onClick={onClose}
          aria-label="Close menu"
        />

        <ul className="c-languages-selector js-languages-selector">
          <li className="c-languages-selector__item">
            <Link className="c-languages-selector__link active" href="/en/">en</Link>
          </li>
          <li className="c-languages-selector__item">
            <Link className="c-languages-selector__link" href="#">de</Link>
          </li>
        </ul>

        <Link href="/en/contact/" className="c-header-contact js-header-contact" onClick={onClose}>
          Contact us
        </Link>
      </div>
    </div>
  );
}
