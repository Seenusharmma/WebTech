// src/components/TeamCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const teamMembers = [
  {
    id: 1,
    name: "Manish Kumar",
    position: "Testing & Management",
    image:
      "https://i.ibb.co/XZrWFK0N/Whats-App-Image-2025-08-28-at-20-19-26-35ade081.jpg",
  },
  {
    id: 2,
    name: "Ayush Kumar",
    position: "UI/UX",
    image: "https://i.ibb.co/WvszCrVB/DSC00222-1.jpg",
  },
  {
    id: 3,
    name: "Neha Niharika Swain",
    position: "Frontend",
    image:
      "https://i.ibb.co/RpzW3Pwd/Whats-App-Image-2025-09-09-at-19-39-00-1400b601.jpg",
  },
  {
    id: 4,
    name: "Roshan Sharma",
    position: "Full-Stack",
    image: "https://i.ibb.co/0pyFKWfr/my-pic.jpg",
  },
];

export default function TeamCarousel() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-wide">
        Meet Our Team Leads
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="max-w-7xl mx-auto"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="relative bg-white rounded-3xl overflow-hidden flex flex-col items-center text-center p-8 transform hover:-translate-y-2 hover:scale-105 transition duration-300">
              {/* Profile image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full  shadow-md"
                />
              </div>

              {/* Member info */}
              <h3 className="mt-5 text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 text-md">{member.position}</p>

              {/* Team Lead Badge */}
              <span className="mt-3 inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-md">
                Team Lead
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}