import React from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Logo({ width = 55, height = 55, className = '', style }: LogoProps) {
  return (
    <img
      src="/logo-pja.png"
      alt="Putra Jayantara Ananta"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'contain', ...style }}
    />
  );
}
