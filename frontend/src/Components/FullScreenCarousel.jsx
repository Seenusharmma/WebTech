// src/components/FullScreenCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/932ttTNJ/Screenshot-2025-09-09-204751.png",
    // title: "Modern Infrastructure",
    // subtitle: "Building the future with innovation",
  },
  {
    id: 2,
    image:
      "https://i.ytimg.com/vi/jFliffqd-2Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAK2nVXGpYdnlGSh1obw4tildVfaQ",
    // title: "Smart Technology",
    // subtitle: "Solutions that power businesses",
  },
  {
    id: 3,
    image:
      "https://coderspace-storage-prod.s3.eu-central-1.amazonaws.com/media/blog/post/content_images/a6d0b60c-1f9f-4749-86d9-d7516b779da4.webp",
    // title: "Creative Development",
    // subtitle: "Innovative designs for every need",
  },
];

export default function FullScreenCarousel() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="
                w-full 
                h-[50vh]       /* mobile */
                sm:h-[60vh]    /* small tablets */
                md:h-[80vh]    /* tablets */
                lg:h-screen    /* desktops */
                bg-cover bg-center 
                flex items-center justify-center relative
              "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              

              {/* Text Content */}
              <div className="relative z-10 text-center text-white px-4">
                {slide.title && (
                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                    {slide.title}
                  </h2>
                )}
                {slide.subtitle && (
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl opacity-90 drop-shadow">
                    {slide.subtitle}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #6366f1; /* indigo-500 */
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
