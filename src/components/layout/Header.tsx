'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HeaderOverlay from './HeaderOverlay';

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <Link className="c-sticky-logo js-sticky-logo" href="/en/">
        <img
          src="/logo-pja.png"
          alt="Putra Jayantara Ananta"
          className="c-sticky-logo__icon js-sticky-logo-svg"
          style={{ objectFit: 'contain', width: 'auto' }}
        />
      </Link>

      <div className="c-header js-header">
        <div className="c-header-toggle js-header-toggle">
          <div className="c-header-toggle__actions">
            <Link className="c-header-toggle__contact" href="/en/contact/">Contact us</Link>
            <button
              type="button"
              className="c-header-toggle__button js-header-toggle-button"
              onClick={() => setIsOverlayOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <HeaderOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </>
  );
}
