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
    image: "https://i.ibb.co/XZrWFK0N/Whats-App-Image-2025-08-28-at-20-19-26-35ade081.jpg",
  },
  
  {
    id: 2,
    name: "Ayush Kumar",
    position: "UI/UX Designer",
    image: "https://i.ibb.co/WvszCrVB/DSC00222-1.jpg",
  },
  {
    id: 3,
    name: "Neha Niharika Swain",
    position: "Frontend Developer",
    image: "https://i.ibb.co/RpzW3Pwd/Whats-App-Image-2025-09-09-at-19-39-00-1400b601.jpg",
  },
  {
    id: 4,
    name: "Roshan Sharma",
    position: "Full-Stack Developer",
    image: "https://i.ibb.co/0pyFKWfr/my-pic.jpg",
  },
];

export default function TeamCarousel() {
  return (
    <section className="w-full bg-gray-900 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
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
        speed={3000} // controls continuous sliding speed
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="max-w-6xl mx-auto"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="bg-gray-200 shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-2xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full "
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
