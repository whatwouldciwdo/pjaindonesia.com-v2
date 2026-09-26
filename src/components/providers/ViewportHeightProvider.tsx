'use client';

import { useViewportHeight } from '@/hooks/useViewportHeight';

export default function ViewportHeightProvider() {
  useViewportHeight();
  return null;
}
