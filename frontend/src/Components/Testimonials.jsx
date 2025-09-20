import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Abhijit Sahu",
      role: "Founder, Snatchers",
      text: "This team built an amazing website for our company. The process was smooth, and the results exceeded expectations.",
      image: "abhijeet.jpg",
    },
    {
      name: "Ms Karan",
      role: "Founder, M/S Karan Enterprises",
      text: "We loved their attention to detail and creative approach. Our Webn App launch was a big success thanks to their work.",
      image: "https://thumbs.dreamstime.com/b/calm-casual-looking-senior-indian-man-face-portrait-white-background-old-man-looking-side-way-calm-casual-looking-senior-185191243.jpg",
    },
    {
      name: "Mayank Kumar",
      role: "Founder, CGU Marketplace",
      text: "Professional, responsive, and highly skilled team. I’d definitely work with them again for future projects.",
      image: "cgu.jpg",
    },
    {
      name: "Ranjit Sharma",
      role: "Founder, MyKart",
      text: "Their development expertise helped us bring our vision to life with great quality and timely delivery.",
      image: "Ranjit.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-gray-100 to-gray-50 text-black rounded-b-4xl">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl  p-8 h-full flex flex-col transform transition duration-500 hover:-translate-y-2">
                <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
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