import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      text: "This team built an amazing mobile app for our company. The process was smooth, and the results exceeded expectations.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Smith",
      role: "Marketing Manager, BrandX",
      text: "We loved their attention to detail and creative approach. Our app launch was a big success thanks to their work.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      role: "Founder, StartupHub",
      text: "Professional, responsive, and highly skilled team. I’d definitely work with them again for future projects.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Emily Johnson",
      role: "CTO, InnovateNow",
      text: "Their development expertise helped us bring our vision to life with great quality and timely delivery.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black via-indigo-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-purple-800 text-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                <p className="text-lg italic mb-6 flex-grow">“{t.text}”</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-white font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
