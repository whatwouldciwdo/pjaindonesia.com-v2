'use client';

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface SwiperCarouselProps extends SwiperProps {
  children: React.ReactNode;
}

export default function SwiperCarousel({ children, ...props }: SwiperCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      {...props}
    >
      {children}
    </Swiper>
  );
}
