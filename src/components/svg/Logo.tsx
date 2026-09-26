import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function Logo({ width = 79, height = 55, color = 'currentColor', className = '' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79 55"
      width={width}
      height={height}
      className={className}
      fill={color}
    >
      <defs>
        <clipPath id="_clipPath_RqE2wLVRQpgqwqGgnJ0RLf0umd6fUPj9">
          <rect width="79" height="55" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_RqE2wLVRQpgqwqGgnJ0RLf0umd6fUPj9)">
        <path d=" M 10.663 54.862 L 0 54.862 L 21.833 27.841 L 0 0.921 L 10.663 0.921 L 32.496 27.841 L 10.663 54.862 L 10.663 54.862 Z " />
        <path d=" M 24.573 54.862 L 13.91 54.862 L 35.744 27.841 L 13.91 0.921 L 24.573 0.921 L 46.406 27.841 L 24.573 54.862 L 24.573 54.862 Z " />
        <path d=" M 68.244 0.921 L 78.906 0.921 L 57.073 27.943 L 78.906 54.862 L 68.244 54.862 L 46.41 27.841 L 68.244 0.921 L 68.244 0.921 Z " />
      </g>
    </svg>
  );
}
