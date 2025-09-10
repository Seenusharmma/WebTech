import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // removed Navigation
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/932ttTNJ/Screenshot-2025-09-09-204751.png",
    // title: "How to Pick the Perfect Gift for Her",
    // description: "A journey of thoughtfulness, intention, and emotional connection.",
  },
  {
    id: 2,
    image:
      "https://i.ytimg.com/vi/jFliffqd-2Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAK2nVXGpYdnlGSh1obw4tildVfaQ",
    // title: "5 Affordable Earrings That Look Premium",
    // description: "Because elegance shouldn’t come with an elite price tag.",
  },
  {
    id: 3,
    image:
      "https://coderspace-storage-prod.s3.eu-central-1.amazonaws.com/media/blog/post/content_images/a6d0b60c-1f9f-4749-86d9-d7516b779da4.webp",
    // title: "Handmade Jewellery at Snatchers",
    // description: "Where every piece begins with heart and ends with a story.",
  },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 mt-15">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h2
                  className="text-lg sm:text-2xl md:text-4xl font-bold mb-2"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base md:text-lg max-w-xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {slide.description}
                </motion.p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
