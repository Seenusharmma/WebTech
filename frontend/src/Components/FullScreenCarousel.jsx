// src/components/FullScreenCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co/1fVMqCM7/Photo-1-page-0001-1.jpg",
  },
  {
    id: 2,
    image:
      "https://i.ytimg.com/vi/jFliffqd-2Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAK2nVXGpYdnlGSh1obw4tildVfaQ",
  },
  {
    id: 3,
    image:
      "https://coderspace-storage-prod.s3.eu-central-1.amazonaws.com/media/blog/post/content_images/a6d0b60c-1f9f-4749-86d9-d7516b779da4.webp",
  },
];

export default function FullScreenCarousel() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              {/* Content (kept for future if you add titles/subtitles) */}
              <div className="relative z-10 text-center text-white px-4">
                {slide.title && (
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-lg md:text-2xl">{slide.subtitle}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
